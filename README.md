
📚 Blogify App

Blogify is a full-stack web application where users can sign up, log in, post blogs, and edit only their own blogs. The frontend is built with React, the backend uses Express.js, and MongoDB serves as the database.

LIVE URL
https://my-68grokbxx-anshuls-projects.vercel.app/

🌟 Features
🔒 User Authentication: Secure sign-up and login functionality.


📝 Post Blogs: Logged-in users can post blogs.


✏️ Edit Blogs: Users can edit or delete only the blogs they have posted.


📱 Responsive UI: The app is designed to be mobile-friendly.


🖋️ Rich Text Editor: Write blogs with basic formatting options.


🛠️ Tech Stack

Frontend:

1.React.js

2.React Router (for navigation)

3.Axios (for API requests)

Backend:

1.Node.js

2.Express.js

3.bcrypt.js (for password hashing)

4.JWT (for user authentication)

Database:

1.MongoDB


🚀 Getting Started


1. Clone the repository
bash
Copy code

git clone https://github.com/your-username/blogify-app.git

cd blogify-app


Access the application:

Open your browser and go to http://localhost:3000 to view the app.

API Endpoints

- POST /api/signup - Register a new user

-POST /api/login - Login user and generate JWT

-POST /api/blog/add - Create a new blog post

-GET /api/blog - Fetch all blog posts

-PUT /api/blogs/:id - Edit a specific blog post (only the owner can edit)

-DELETE /api/blogs/:id - Delete a specific blog post (only the owner can delete)



Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for any features or improvements.





