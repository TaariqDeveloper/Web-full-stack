import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Update() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const handleGetdata = () => {
    axios
      .get(`http://localhost:3000/read/Cawasho/${params.id}`)
      .then((res) => {
        setName(res.data[0].Name);
        setEmail(res.data[0].Email);
        setMessage(res.data[0].Message);
      })
      .catch((error) => {
        console.log("waxaa jira error  ", error);
      });
  };

  const HandleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/update/Cawasho/${params.id}`, {
        Name: Name,
        Email: Email,
        massage: Message,
      })
      .then(() => {
        alert("Updated successfully!");
        console.log("Updated successfully");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("waxaa jira error ", error);
      });
  };

  useEffect(() => {
    handleGetdata();
  }, []); // Fetch data only once

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
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter second value"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message..."
            className="w-[450px] h-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-300 resize-none"
          ></textarea>
          <button
            onClick={HandleUpdate}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
