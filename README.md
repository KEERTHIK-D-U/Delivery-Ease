# 🍴 DeliveryEase — Real-Time Food Delivery Backend

**DeliveryEase** is the backend server powering a real-time food delivery application that enables seamless coordination between customers, restaurants, and delivery partners.  
It’s built using **Fastify**, **Mongoose**, and **Socket.io** for high performance, scalability, and real-time event handling.

---

## 🚀 Overview

This backend provides secure and optimized APIs for:
- **User Authentication & JWT Authorization**
- **Restaurant and Menu Management**
- **Order Tracking and Status Updates**
- **Delivery Partner Management with Live Updates**
- **Real-Time Communication using Socket.io**
- **Admin Dashboard** powered by **AdminJS**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Fastify** | High-performance Node.js web framework |
| **Mongoose** | ODM for MongoDB |
| **Socket.io** | Real-time communication for order tracking |
| **AdminJS** | Admin dashboard for managing users, restaurants, and orders |
| **JWT (fastify-jwt)** | Secure authentication |
| **dotenv** | Environment configuration |
| **Fastify Plugins** | CORS, cookies, and session handling |

---

## ⚙️ Folder Structure

-Delivery-Ease/
-├── app.js # Main Fastify app entry
-├── models/ # Mongoose schemas and models
-├── routes/ # API route definitions
-├── controllers/ # Logic for handling API requests
-├── utils/ # Helper functions (auth, JWT, etc.)
-├── .env.example # Sample environment variables
-├── package.json
-└── README.md


---

## 🔑 Environment Variables

-Create a `.env` file in the root directory with the following:
-PORT=5000
-MONGO_URI=your_mongodb_connection_string
-JWT_SECRET=your_secret_key
-ADMIN_EMAIL=your_admin_email
-ADMIN_PASSWORD=your_admin_password

