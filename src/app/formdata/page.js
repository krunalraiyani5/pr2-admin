"use client";
import React, { useState } from "react";

const FormDataPage = () => {
  const initialData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      mobile: "1234567890",
      message: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      mobile: "9876543210",
      message: "Consectetur adipiscing elit",
    },
  ];

  const [data, setData] = useState(initialData);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-10 mt-2">Form Data</h1>
      <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="text-white bg-[#948BF4]">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Mobile</th>
            <th className="p-4">Message</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="p-4 text-center">{item.name}</td>
              <td className="p-4 text-center">{item.email}</td>
              <td className="p-4 text-center">{item.mobile}</td>
              <td className="p-4 text-center">{item.message}</td>
              <td className="p-4 text-center flex justify-center space-x-2">
                <button className="bg-blue-500 text-white p-[9px] rounded-md hover:bg-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                  </svg>
                </button>
                <button
                  className="bg-red-500 text-white p-[9px] rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 flex justify-end">
        <button
          className={`px-2 py-1 mx-1 rounded-md bg-[#948BF4] text-white text-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          className={`px-3 py-1 mx-1 rounded-md bg-gray-300 text-gray-800`}
        >
          1
        </button>
        <button
          className={`px-3 py-1 mx-1 rounded-md bg-gray-300 text-gray-800`}
        >
          2
        </button>
        <button
          className={`px-3 py-1 mx-1 rounded-md bg-gray-300 text-gray-800`}
        >
          3
        </button>

        <button
          className={`px-2 py-1 mx-1 rounded-md bg-[#948BF4] text-white text-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FormDataPage;
