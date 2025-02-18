import React from "react";

function Update() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[500px] bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Update the Data
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter first value"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter second value"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Enter third value"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
