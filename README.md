# Bistro Boss Restaurant

![Banner Image](https://i.ibb.co.com/8gHvv9NM/Screenshot-2025-01-31-at-7-41-59-PM.png)  

**Bistro Boss Restaurant** is a modern restaurant management web application designed for seamless food ordering, cart management, and admin control. This role-based application provides distinct functionalities for users and admins.  

## Features  

### User Features:  
- Browse and add food items to the cart.  
- Manage cart items (update or remove).  
- Secure payment processing via **Stripe**.  

### Admin Features:  
- **Manage Products**: Add, update, and delete food items.  
- **Manage Users**: View and control user accounts.  
- **Dashboard Analytics**: Real-time stats on sales, orders, and user activity.  

### General Features:  
- **Role-Based Access**: Separate views for users and admins.  
- **Private Routes**: Secure access to user and admin panels.  
- **Responsive Design**: Optimized for all devices.  

## Technologies Used  

- **Frontend**: React (JSX), Tailwind CSS, DaisyUI.  
- **Backend**: Node.js, Express.js.  
- **Database**: MongoDB.  
- **Authentication**: Firebase.  
- **Payment**: Stripe.  
- **Authorization**: JSON Web Tokens (JWT) with local storage security.  

## Role-Based Routes  

### Root Route:  
- Home Page  
- Menu Page  
- Order Food  
- Order Food  

### Dashboard Route:  
- **User Dashboard**: View cart, manage cart items, make payments and payment history.  
- **Admin Dashboard**: Manage products, add product, manage users, and statistics.  

## Key Packages  

- `react-router-dom` – For routing.  
- `firebase` – For authentication.  
- `mongodb` – For database management.  
- `jsonwebtoken (JWT)` – For secure role-based authentication.  
- `stripe` – For payment integration.  
- `shadcn` – For UI components.  

## Deployment  

- **Live Frontend Link**: https://bistro-boss-76e4b.web.app/ 
- **Live Backend Server Link**: https://bistro-boss-server-nu-nine.vercel.app/  

## Admin Role Access
- **User Name**: yead@admin.com
- **Password**: Yead123@456


## Installation and Setup  

1. Clone the repository:  
   ```bash
   git clone https://github.com/Yead191/bistro-boss-client
   cd bistro-boss
