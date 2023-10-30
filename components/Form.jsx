"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const Form = () => {
  const initialData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Not Selected",
  };

  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState(null); // For handling errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    // Validate form inputs
    if (formData.title.trim() === "") {
      setError("Title is required.");
      return;
    }

    // You can add more validation rules here for other fields

    const dataToSend = {
      title: formData.title,
      description: formData.description,
      category: formData.category,
      priority: formData.priority,
      progress: formData.progress,
      status: formData.status,
      active: true,
    };

    console.log("Form Values:", dataToSend); // Log the form data

    try {
      const resp = await axios.post(
        "http://localhost:5000/api/tickets",
        dataToSend
      );
      console.log(resp.data);
      // Optionally, you can reset the form here
      setFormData(initialData);
    } catch (error) {
      setError("An error occurred while submitting the ticket.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        method="post"
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 p-6 bg-white shadow-md rounded-lg text-black"
      >
        <h3 className="text-xl font-semibold mb-4 text-black">
          Create Your Ticket
        </h3>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="mb-4">
          <label className="block text-gray-600">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full md:w-1/2 border rounded py-2 px-3 text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full md:w-1/2 border rounded py-2 px-3 text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full md:w-1/2 border rounded py-2 px-3 text-black"
          >
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Progress</label>
          <input
            type="number"
            id="progress"
            name="progress"
            placeholder="Progress"
            value={formData.progress}
            onChange={handleChange}
            className="w-full md:w-1/2 border rounded py-2 px-3 text-black"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full md:w-1/2 border rounded py-2 px-3 text-black"
          >
            <option value="not started">Not Started</option>
            <option value="started">Started</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full md:w-1/2 border rounded py-2 px-3 text-black"
          >
            <option value="Not Selected">Not Selected</option>
            <option value="Software Problem">Software Problem</option>
            <option value="Project">Project</option>
          </select>
        </div>

        <div className="flex w-full justify-between">
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full md:w-auto"
            >
              Submit
            </button>
          </div>
          <Link href={`/TicketPage`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Check out
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;

