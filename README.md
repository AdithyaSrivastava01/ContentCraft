# MERN Stack Blog Platform

## Overview

This project is a full-stack blog platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform provides users with a seamless and intuitive interface to create, edit, delete, and publicly share blogs. The user-friendly layouts were meticulously designed in Figma, ensuring an enjoyable and productive content creation experience.

## Features

- **User Authentication**: Users can sign up and log in to manage their blogs securely.
- **Blog Creation and Management**: Users can easily create new blogs, edit existing ones, and delete them if necessary.
- **Public Sharing**: Blogs can be shared publicly, allowing anyone to view the content.
- **Intuitive Interface**: The platform offers an easy-to-use interface, streamlining the content creation process.
- **Responsive Design**: The platform is fully responsive, providing a consistent experience across devices.
  
## Tech Stack

- **Frontend**: React.js
  - Designed the frontend using React.js to ensure a fast, dynamic, and responsive user experience.
  - User interfaces and layouts were crafted in Figma to create a user-friendly environment.
- **Backend**: Node.js and Express.js
  - Implemented the backend using Node.js and Express.js to handle API requests, authentication, and blog management.
- **Database**: MongoDB
  - MongoDB was used as the database to store user information and blog data, providing flexible and scalable data management.
- **Version Control**: Git and GitHub
  - The project was managed using Git for version control and hosted on GitHub.
- **Deployment**: (Specify deployment if any, e.g., AWS, Heroku, etc.)

## Project Structure

```plaintext
├── client                 # React.js frontend
│   ├── public             # Public assets
│   └── src                # Source files
│       ├── components     # Reusable components
│       ├── pages          # Page components
│       ├── services       # API service calls
│       └── App.js         # Main app component
│
├── server                 # Node.js backend
│   ├── config             # Configuration files (e.g., database connection)
│   ├── models             # MongoDB models
│   ├── routes             # Express.js routes
│   ├── controllers        # Request handlers
│   └── server.js          # Entry point of the backend
│
└── README.md              # Project documentation
