🏡 **Full Stack Real Estate Web Application**

A full-stack real estate application built using MongoDB, Express, React, and Node.js (MERN Stack).
This project replicates features including authentication, CRUD operations, and advanced search functionality.

🔑 **Authentication Implementation**

Sign up & Sign in with email and password.

Google OAuth integration for quick login.

Secure user profiles with proper authentication.

Manage global state using Redux Toolkit.

Profile page features: update username, email, password, and profile image.

🏗️ **CRUD Operations**

Create, Read, Update, and Delete property listings using MongoDB.

Add property details with options for discounted pricing.

Upload and modify property images with an image slider.

Enable users to contact owners/agents directly via listings.

🔍 **Advanced Search Functionality**

Search listings by title, filters, and sorting options.

Implement an intuitive sidebar interface for filtering results.

Optimize performance with MongoDB search queries.

🛠️ **Tech Stack**

**Frontend:** React, Tailwind CSS, Redux Toolkit

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Authentication:** Firebase/Auth + Google OAuth

**Deployment:** Render

🖥️ **Getting Started**
# 1. Clone repo
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# 2. Install dependencies
cd client && npm install

cd ../api && npm install

# 3. Add environment variables (server/.env)
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# 4. Run backend
cd api
npm run dev

# 5. Run frontend (new terminal)
cd client
npm run dev
