# ChatApp - Real-Time Chat Application


![WhatsApp Image 2024-11-20 at 22 39 21_ebf69901](https://github.com/user-attachments/assets/1fa8f11c-7696-497c-9af3-38c810c20ffd)

A real-time chat application built with **React** on the frontend, **Node.js** on the backend, and **MongoDB** as the database. This app allows users to send and receive messages in real time.

## Features
- Real-time messaging with **Socket.io**.
- User authentication using **JWT** (JSON Web Token).
- User profiles with avatar pictures.
- MongoDB for storing user data and messages.
- Responsive design for both desktop and mobile views.

## Technologies Used
- **Frontend**:
  - React.js
  - Socket.io-client
  - React Router
  - Axios (for HTTP requests)
  - CSS/SCSS

- **Backend**:
  - Node.js
  - Express.js
  - Socket.io (for real-time communication)
  - JWT for user authentication
  - MongoDB with Mongoose (for database interaction)
  - Bcrypt (for password hashing)

## Prerequisites
- **Node.js** and **npm** installed on your machine.
- A **MongoDB Atlas** or local MongoDB setup.
- A **GitHub account** if you want to fork this project.

## Setup & Installation

### 1. Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/styloraushan/ChatApp.git
cd ChatApp

cd server
npm install
nodemon server.js

cd client
npm install
npm run dev
