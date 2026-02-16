import React from "react";
import { Check } from "lucide-react";

const DashboardPreview: React.FC = () => {
  return (
    <div className="relative flex justify-center mt-20">
      <div className="bg-linear-to-br from-cyan-400 to-blue-500 p-6 rounded-3xl shadow-2xl">
        <div className="bg-white rounded-2xl w-225 h-130 p-6 flex gap-6 overflow-hidden">
          
          <div className="w-52 bg-gray-100 rounded-xl p-4 space-y-3">
            <div className="font-semibold">WorkStack</div>
            <div className="bg-white p-2 rounded-md shadow-sm">Home</div>
            <div className="p-2">My Tasks</div>
            <div className="p-2">Inbox</div>
            <div className="p-2">Reporting</div>
          </div>

          <div className="flex-1 space-y-4">
            <h2 className="text-xl font-semibold">
              Good morning, Amanda
            </h2>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 rounded-xl p-4 h-36">
                <p className="font-medium mb-2">To do list</p>
                <div className="space-y-2 text-sm">
                  <div className="h-2 bg-gray-300 rounded" />
                  <div className="h-2 bg-gray-300 rounded w-4/5" />
                  <div className="h-2 bg-gray-300 rounded w-3/5" />
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
                <span className="text-2xl font-mono">04:21:58</span>
              </div>

              <div className="bg-gray-100 rounded-xl p-4">
                <p className="font-medium mb-2">Activity</p>
                <div className="h-24 w-24 mx-auto rounded-full border-8 border-blue-400" />
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 h-40">
              <p className="font-medium mb-3">Tasks assigned</p>
              <div className="space-y-2">
                <div className="h-2 bg-gray-300 rounded w-4/5" />
                <div className="h-2 bg-gray-300 rounded w-3/5" />
                <div className="h-2 bg-gray-300 rounded w-2/5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-5 top-24 bg-white p-4 rounded-xl shadow-xl">
        <Check className="text-green-500" />
      </div>

      <div className="absolute -left-10 bottom-24 bg-white px-4 py-3 rounded-xl shadow-xl text-xl font-semibold">
        20
      </div>
    </div>
  );
};

export default DashboardPreview;
