import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const [data, setData] = useState([]);

  const handleGetData = () => {
    axios
      .get("http://localhost:3000/reade/Cawasho")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("There is an error:", error);
      });
  };

  useEffect(() => {
    handleGetData();
  }, []);

  const handleRemove = (_id) => {
    axios
      .delete(`http://localhost:3000/delete/Cawasho/${_id}`)
      .then(() => {
        alert("Deleted successfully");

        setData((prevData) => prevData.filter((item) => item._id !== _id));
      })
      .catch((error) => {
        alert("Error deleting item: " + error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-center text-4xl font-semibold text-blue-800 mb-12">
        List of Complaints
      </h1>

      <div className="flex justify-center gap-20 flex-wrap">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white w-[600px] shadow-xl rounded-3xl p-8 space-y-6"
          >
            <h1 className="text-2xl text-blue-700 font-bold">{item.Name}</h1>
            <p className="text-lg text-gray-700">{item.Email}</p>
            <p className="text-lg text-center text-red-600 font-bold">
              Cabashada
            </p>
            <p className="text-gray-600 line-clamp-3 overflow-hidden text-ellipsis">
              {item.massage}
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => handleRemove(item._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Delete
              </button>
              <Link to={`/update/${item._id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                  Update
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
