import React from "react";

const FormFields = ({ formData, handleChange }) => {
  return (
    <div >
      <div className="mb-4">
        <label htmlFor="title" className="block text-black font-semibold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded py-2 px-3 text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-black font-semibold mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded py-2 px-3 text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="priority" className="block text-black font-semibold mb-2">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border rounded py-2 px-3 text-black"
        >
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="progress" className="block text-black font-semibold mb-2">
          Progress
        </label>
        <input
          type="number"
          id="progress"
          name="progress"
          placeholder="Progress"
          value={formData.progress}
          onChange={handleChange}
          className="w-full border rounded py-2 px-3 text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-black font-semibold mb-2">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border rounded py-2 px-3 text-black"
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-black font-semibold mb-2">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded py-2 px-3 text-black"
        >
          <option value="Not Selected">Not Selected</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
      </div>
    </div>
  );
};

export default FormFields;
