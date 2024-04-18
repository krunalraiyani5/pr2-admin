"use client";
import Modal from "@/components/Modal";
import ProjectCard from "@/components/ProjectCard";
import React, { useState } from "react";

const ProjectPage = () => {
  // Sample array of projects for testing

  const [open, setOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: "Project 1",
      image: "https://krunal-raiyani.netlify.app/img/note.png",
    },
    {
      id: 2,
      name: "Project 2",
      image: "	https://krunal-raiyani.netlify.app/img/youtube.png",
    },
    {
      id: 3,
      name: "Project 3",
      image: "https://krunal-raiyani.netlify.app/img/gaana.png",
    },
    {
      id: 4,
      name: "Project 5",
      image: "https://krunal-raiyani.netlify.app/img/store.png",
    },
    {
      id: 5,
      name: "Project 6",
      image: "https://krunal-raiyani.netlify.app/img/game.png",
    },
    {
      id: 6,
      name: "Project 7",
      image: "https://krunal-raiyani.netlify.app/img/news.png",
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (projectId) => {
    handleOpen();
    console.log("Edit project:", projectId);
  };

  const handleDelete = (projectId) => {
    console.log("Delete project:", projectId);
  };

  const handlePreview = (projectId) => {
    console.log("Preview project:", projectId);
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Projects</h1>
          <button
            className={`bg-[#948BF4] rounded-full p-3 cursor-pointer transition-all duration-300 ${
              open ? "rotate-[135deg]" : "rotate-0"
            }`}
            onClick={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              name={project.name}
              onEdit={() => handleEdit(project.id)}
              onDelete={() => handleDelete(project.id)}
              onPreview={() => handlePreview(project.id)}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={open} handleClose={handleClose} title={"Demo title"}>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="title">
              Project Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full border-[#858585] border-2 rounded-lg p-3 focus:outline-none text-sm"
              placeholder="Enter project title"
            />
          </div>
          <div className="mb-4 flex flex-col items-center border-b pb-4">
            <label
              htmlFor="image"
              className="cursor-pointer flex flex-col items-center w-full border-dashed border-2 rounded-lg py-6 border-[#858585]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="h-14 w-14"
                fill="#686868"
              >
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
              </svg>
              <span className="text-sm text-black">Browse file to upload</span>
            </label>
            <input type="file" id="image" accept="image/*" className="hidden" />
          </div>
          <button
            type="submit"
            className="bg-[#948BF4] text-white py-2 rounded-md block px-8 mx-auto"
          >
            Update
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ProjectPage;
