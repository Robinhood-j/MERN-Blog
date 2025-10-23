MERN Blog - Full Stack Blog Application

A modern, full-stack blog application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, CRUD operations, and responsive design.
🚀 Features

    User Authentication - Secure registration and login with JWT

    Blog Management - Create, read, update, and delete blog posts

    Categories - Organize posts with categories

    Rich Text Support - Create formatted blog content

    Responsive Design - Mobile-friendly interface

    Search & Filter - Find posts by keywords

    Image Support - Featured images for posts

    Protected Routes - Secure access to authenticated features

🛠️ Tech Stack
Frontend

    React.js 18 - Modern UI library

    React Router DOM - Client-side routing

    Context API - State management

    Axios - HTTP client for API calls

    Vite - Fast build tool and dev server

    CSS3 - Custom styling with modern features

Backend

    Node.js - Runtime environment

    Express.js - Web application framework

    MongoDB - NoSQL database

    Mongoose - MongoDB object modeling

    JWT - JSON Web Tokens for authentication

    bcryptjs - Password hashing

    Express Validator - Input validation

    Helmet - Security middleware

    CORS - Cross-origin resource sharing

📦 Installation
Prerequisites

    Node.js (v18 or higher)

    MongoDB (local installation or MongoDB Atlas)

Setup Instructions

    Clone the repository
    bash

git clone https://github.com/Robinhood-j/mern-blog.git
cd mern-blog

Setup Backend
bash

cd server
npm install

Setup Frontend
bash

cd ../client
npm install

Environment Configuration

Create server/.env file:
env

NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-blog
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_secure
JWT_EXPIRE=30d

Start the Application

Start MongoDB (in separate terminal):
bash

mongod

Start Backend Server (in separate terminal):
bash

cd server
npm run dev

Start Frontend Client (in separate terminal):
bash

cd client
npm run dev

    Access the Application

        Frontend: http://localhost:5173

        Backend API: http://localhost:5000

🗂️ Project Structure
text

mern-blog/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Layout.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/         # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Posts.jsx
│   │   │   ├── PostDetail.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   ├── EditPost.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── context/       # React context
│   │   │   └── BlogContext.jsx
│   │   ├── services/      # API services
│   │   │   └── api.js
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # React entry point
│   ├── package.json
│   └── vite.config.js
├── server/                # Express backend
│   ├── config/
│   │   └── database.js    # MongoDB connection
│   ├── controllers/       # Route controllers
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── categoryController.js
│   ├── models/           # Mongoose models
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Category.js
│   ├── routes/           # API routes
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── categoryRoutes.js
│   ├── middleware/       # Custom middleware
│   │   ├── authMiddleware.js
│   │   └── validationMiddleware.js
│   ├── server.js         # Main server file
│   └── package.json
└── README.md

🔌 API Endpoints
Authentication

    POST /api/auth/register - User registration

    POST /api/auth/login - User login

    GET /api/auth/profile - Get user profile

    PUT /api/auth/profile - Update user profile

Posts

    GET /api/posts - Get all posts (with pagination and search)

    GET /api/posts/:id - Get single post

    POST /api/posts - Create new post (protected)

    PUT /api/posts/:id - Update post (protected)

    DELETE /api/posts/:id - Delete post (protected)

Categories

    GET /api/categories - Get all categories

    POST /api/categories - Create category (protected, admin only)

🎯 Usage

    Register a new account at the registration page

    Login with your credentials

    Browse posts on the home page or posts page

    Create new posts by clicking "Create Post" (authenticated users only)

    Edit or delete your own posts from the post detail page

    Search posts using the search functionality

    Filter by categories when creating/editing posts

🔒 Authentication Flow

    JWT tokens are used for authentication

    Tokens are stored in localStorage

    Protected routes require valid authentication

    Users can only edit/delete their own posts (admin users have full access)

    Automatic token refresh and logout on token expiration

🚀 Deployment
Backend Deployment (Heroku)

    Create Heroku app

    Set environment variables in Heroku config

    Update MongoDB URI for production

    Deploy using Git

Frontend Deployment (Netlify/Vercel)

    Build the project: npm run build

    Deploy the dist folder

    Update API base URL for production

Environment Variables for Production
env

NODE_ENV=production
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_production_jwt_secret
CLIENT_URL=your_deployed_frontend_url

🤝 Contributing

    Fork the repository

    Create a feature branch: git checkout -b feature/amazing-feature

    Commit your changes: git commit -m 'Add amazing feature'

    Push to the branch: git push origin feature/amazing-feature

    Open a Pull Request

🐛 Troubleshooting
Common Issues

MongoDB Connection Error:

    Ensure MongoDB is running

    Check connection string in .env file

    Verify network connectivity

Frontend Build Errors:

    Clear node_modules and reinstall dependencies

    Check for syntax errors in React components

    Verify all required dependencies are installed

Authentication Issues:

    Check JWT secret in environment variables

    Verify token expiration settings

    Ensure proper CORS configuration

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
👨‍💻 Author

Robinhood Waweru

    GitHub: @Robinhood-j

    Portfolio: [Coming Soon]

    LinkedIn: Robinhood Waweru

🙏 Acknowledgments

    MERN stack community and documentation

    Contributors and testers

    Open source libraries that made this project possible

📞 Support

If you have any questions or run into issues, please open an issue on GitHub or contact me directly.

Happy Coding! 🚀

Built with ❤️ using the MERN stack
