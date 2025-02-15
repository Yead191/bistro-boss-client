import React, { useState } from 'react';
import SectionHeader from '../../../components/SectionHeader';
import { FaUtensils } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const imageUploadKey = import.meta.env.VITE_Image_Upload_Token
const imageUploadApi = `https://api.imgbb.com/1/upload?key=${imageUploadKey}`
const AddItem = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm()

    const onSubmit = async (data) => {
        // console.log(data)
        const imageFile = {
            image: data.image[0]
        }
        // image upload to imgbb and then get an url
        setLoading(true)
        const res = await axiosPublic.post(imageUploadApi, imageFile, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        if (res.data.success) {
            const menuItem = {
                name: data.recipeName,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.details,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            // console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                setLoading(false)
                reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.recipeName} has been added!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        // console.log(res.data);

    }
    if (loading) {
        return <div className='flex min-h-screen justify-center items-center'>
            <progress className="progress w-56"></progress>
        </div>

    }


    return (
        <div className='my-8 p-2 '>
            <SectionHeader subHeading={"What's New?"} heading={'Add an Item'}></SectionHeader>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-base-200 p-6 md:p-8 py-10 rounded-md shadow-md md:w-11/12 lg:w-10/12 mx-auto my-16"
            >
                <div className="form-control mb-4">
                    <label className="label font-bold">Recipe name*</label>
                    <input
                        {...register("recipeName", { required: true })}
                        type="text"
                        name="recipeName"
                        placeholder="Recipe name"
                        className="input input-bordered"

                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="form-control">
                        <label className="label font-bold">Category*</label>
                        <select defaultValue={'default'}
                            {...register("category", { required: true })}

                            name="category"
                            className="select select-bordered"
                            required
                        >
                            <option disabled value="default">Select a category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label font-bold">Price*</label>
                        <input
                            {...register("price", { required: true })}
                            type="number"
                            name="price"
                            placeholder="Price"
                            className="input input-bordered"
                            required
                        />
                    </div>
                </div>

                <div className="form-control mb-4">
                    <label className="label font-bold">Recipe Details*</label>
                    <textarea
                        {...register("details", { required: true })}

                        name="details"
                        placeholder="Recipe Details"
                        className="textarea textarea-bordered"
                        required
                    />
                </div>

                <div className="form-control mb-4">
                    <label className="label font-bold">Upload Image</label>
                    <input
                        {...register('image', { required: true })}
                        type="file"
                        placeholder="You can't touch this"
                        className=" file-input  bg-base-200 w-full max-w-lg" />
                </div>

                <button
                    type="submit"
                    className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-none flex items-center text-white gap-2"
                >
                    <span>Add Item</span>
                    <FaUtensils />
                </button>
            </form>
        </div>
    );
};

export default AddItem;