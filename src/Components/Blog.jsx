import React from "react";

function Blog() {
  const blogPosts = [
    {
      title: "Understanding React State Management",
      description:
        "A comprehensive guide to managing state in React applications using hooks, context, and libraries like Redux.",
      link: "/blog/react-state-management",
      date: "December 28, 2024",
    },
    {
      title: "Building a Full-Stack App with MERN",
      description:
        "Step-by-step tutorial on creating a full-stack application using MongoDB, Express, React, and Node.js.",
      link: "/blog/mern-fullstack-app",
      date: "December 20, 2024",
    },
    {
      title: "Mastering Tailwind CSS",
      description:
        "Learn how to style your web projects effectively using Tailwind CSS with examples and best practices.",
      link: "/blog/mastering-tailwind-css",
      date: "December 15, 2024",
    },
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-5xl font-extrabold text-white text-center mb-12">
        Blog
      </h1>
      <div className="max-w-6xl mx-auto px-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg shadow-md p-6 mb-8 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-bold text-teal-400 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-400 mb-4">{post.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <a
                href={post.link}
                className="text-teal-400 hover:text-white transition duration-300"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
