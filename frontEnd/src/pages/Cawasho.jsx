import React, { useState } from "react";
import image from "../assets/background.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cawasho() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleEmpty = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleInsert = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/create/Cawasho", {
        Name: Name,
        Email: Email,
        massage: Message,
      })
      .then(() => {
        alert("Data inserted successfully");
        handleEmpty(e);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("There is an error: ", error);
      });
  };

  return (
    <div>
      <div className="bg-blue-700 w-full h-[80px] flex items-center justify-center">
        <h1 className="text-white font-semibold text-3xl">
          Online Complaints Management System
        </h1>
      </div>

      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div>
          <div className="flex items-center justify-center h-screen">
            <div className="w-[1200px] h-[700px] bg-blue-100 rounded-2xl">
              <div className="flex justify-center pt-20">
                <div className="container flex justify-center flex-wrap">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter text..."
                      className="w-[800px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-300"
                      value={Name}
                      onChange={(E) => setName(E.target.value)}
                    />
                  </div>

                  <div className="pt-10">
                    <input
                      type="email"
                      placeholder="Enter email..."
                      className="w-[800px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-300"
                      value={Email}
                      onChange={(E) => setEmail(E.target.value)}
                    />
                  </div>

                  <div className="pt-10">
                    <textarea
                      placeholder="Enter your message..."
                      className="w-[800px] h-[200px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm transition duration-300 resize-none"
                      value={Message}
                      onChange={(E) => setMessage(E.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>

              <button
                onClick={handleInsert}
                className="ml-[40%] mt-10 px-6 py-2 border border-blue-600 font-semibold rounded-lg bg-blue-600 text-white transition duration-300"
              >
                Save Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cawasho;
