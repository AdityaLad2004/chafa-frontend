import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import axios from "axios";

const BlogPortal = () => {
  const [blogs, setBlogs] = useState([]); // To store blog data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch blogs from API
  useEffect(() => {
    axios
      .get(`${process.env.backlink}/get-blogs`) // Accessing the env variable
      .then((response) => {
        const responseData = response.data;
        const blogEntries = Object.keys(responseData[0])
          .filter((key) => !key.startsWith("isPubslished_") && key !== "_id")
          .map((languageKey) => ({
            language: languageKey.toUpperCase(),
            content: responseData[0][languageKey],
          }));
        setBlogs(blogEntries); // Save processed blogs
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Typography variant="h4" className="text-center mb-6 font-semibold">
          Translations
        </Typography>

        {/* List of Blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="bg-white shadow-md rounded-lg hover:shadow-xl transition duration-300"
            >
              <CardContent>
                <Typography
                  variant="h6"
                  className="font-medium text-gray-800 mb-2"
                >
                  {blog.language}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-600 line-clamp-3"
                >
                  {blog.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPortal;
