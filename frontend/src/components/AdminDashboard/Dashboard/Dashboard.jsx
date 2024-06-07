import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="flex-1 p-10 text-2xl font-bold">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mountain Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #mountain
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              #sunset
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              #nature
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
