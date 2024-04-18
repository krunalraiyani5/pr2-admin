import React from "react";

const ResumePage = () => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-2xl font-bold mb-10 mt-2">Resume</h1>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center mb-44">
          <label
            htmlFor="image"
            className="cursor-pointer flex flex-col gap-1 items-center justify-center w-[500px] h-64 border-dashed border-2 rounded-lg py-6 border-[#858585]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="h-20 w-20"
              fill="#948BF4"
            >
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
            </svg>
            <span className="text-md text-black">Browse file to upload</span>
          </label>
          <input type="file" id="image" accept="image/*" className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
