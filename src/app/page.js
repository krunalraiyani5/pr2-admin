import GaugeChart from "@/components/GaugeChart";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-10 mt-2">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex justify-between bg-white rounded-lg shadow-md p-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Projects</h2>
            <p className="text-4xl font-bold">25</p>
          </div>
          <GaugeChart value={25} color={"#68D391"} />
        </div>
        <div className="flex justify-between bg-white rounded-lg shadow-md p-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Resume Downloads</h2>
            <p className="text-4xl font-bold">50</p>
          </div>
          <GaugeChart value={50} color={"#f48b8b"} />
        </div>
        <div className="flex justify-between bg-white rounded-lg shadow-md p-6">
          ``{" "}
          <div>
            <h2 className="text-lg font-semibold mb-4">Forms Submitted</h2>
            <p className="text-4xl font-bold">80</p>
          </div>
          <GaugeChart value={80} color={"#8bb0f4"} />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Downloads Over Time</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
            {/* Placeholder for chart or visual representation */}
            <p className="text-gray-500">Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
