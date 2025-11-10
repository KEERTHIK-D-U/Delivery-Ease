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

**Delivery-Ease/**
- **.adminjs/** → AdminJS configuration and resources  
- **node_modules/** → Installed project dependencies  
- **src/**
  - **config/** → Configuration files for app setup and database  
    - `config.js`  
    - `connect.js`  
    - `setup.js`  
  - **controllers/** → Controller logic for different modules  
    - **auth/** → Authentication and user session handling  
    - **order/** → Order creation, updates, and tracking  
    - **product/** → Product management and inventory  
    - **tracking/** → Delivery tracking and location updates  
  - **middleware/** → Middleware functions (auth, validation)  
    - `auth.js`  
  - **models/** → Mongoose schemas and database models  
    - `branch.js`, `category.js`, `counter.js`, `index.js`, `order.js`, `products.js`, `user.js`  
  - **routes/** → API route definitions  
    - `auth.js`, `index.js`, `order.js`, `products.js`  
- **.env** → Environment variables  
- **.gitignore** → Git ignore configuration  
- **app.js** → Main Fastify application entry point  
- **notes.txt** → Developer notes  
- **package.json** → Project metadata and dependencies  
- **package-lock.json** → Dependency lock file  
- **seedData.js**, **seedScript.js** → Data seeding and initialization scripts  
- **README.md** → Project documentation  



---

## 🔑 Environment Variables

This project requires the following environment variables to be configured in your `.env` file:

- **PORT** = 3001 
- **MONGO_URI** = your_mongodb_connection_string  
- **JWT_SECRET** = your_secret_key  
- **ADMIN_EMAIL** = keerthikcoorgdu@gmail.com (only for demo pupose)
- **ADMIN_PASSWORD** = 123456789





