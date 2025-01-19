// src/pages/BlogAnalytics.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BlogAnalytics = () => {
  const data = [
    { name: "Jan", views: 4000, engagement: 2400 },
    { name: "Feb", views: 3000, engagement: 2210 },
    { name: "Mar", views: 2000, engagement: 2290 },
    { name: "Apr", views: 2780, engagement: 3908 },
    { name: "May", views: 1890, engagement: 4800 },
    { name: "Jun", views: 2390, engagement: 3800 },
    { name: "Jul", views: 3490, engagement: 4300 },
  ];

  // Hardcoded metrics
  const views = 13200;
  const engagement = 10800;
  const avgTimeSpent = "5 mins 30 sec";
  const topCountry = "USA";
  const activeUsers = 1500;

  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-6">
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Blog Analytics</h2>

        {/* Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-medium text-gray-800">Total Views</h3>
            <p className="text-3xl text-indigo-600">{views}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-medium text-gray-800">Engagement</h3>
            <p className="text-3xl text-green-600">{engagement}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-medium text-gray-800">Average Time Spent</h3>
            <p className="text-3xl text-yellow-500">{avgTimeSpent}</p>
          </div>
        </div>

        {/* Graph Section */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md mt-8">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Monthly Analytics</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="engagement" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-medium text-gray-800">Top Country</h3>
            <p className="text-3xl text-red-500">{topCountry}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-medium text-gray-800">Active Users</h3>
            <p className="text-3xl text-blue-500">{activeUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogAnalytics;
