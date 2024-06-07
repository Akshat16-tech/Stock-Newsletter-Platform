import React, { useState } from "react";
import StockView from "../Markets/StockView/StockView";
import Dashboard from "./Dashboard/Dashboard";
import UserList from "./UserList/UserList";

export default function AdminDashboard() {
  function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("-translate-x-full");
  }

  const [currentTab, setCurrentTab] = useState("dashboard");

  const shownTab = (tab) => {
    switch (tab) {
      case "stocksList":
        return <StockView />;
      case "userList":
        return <UserList />;
      default:
        return <Dashboard />;
    }
  };

  console.log("{shownTab(currentTab)}", shownTab(currentTab));

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 pt-14 ">
        <div className="flex flex-col space-y-6 lg:h-screen lg:flex-row lg:items-center lg:space-x-6">
          <div className="relative min-h-screen md:flex w-full">
            {/* <!-- mobile menu bar --> */}
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
              {/* <!-- logo --> */}
              <a href="#" className="block p-4 text-white font-bold">
                Admin Penal
              </a>

              {/* <!-- mobile menu button --> */}
              <button
                className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
                onClick={toggleSidebar}
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- sidebar --> */}
            <div
              id="sidebar"
              className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
            >
              {/* <!-- logo --> */}
              <a
                href="#"
                className="text-white flex items-center space-x-2 px-4"
              >
                {/* <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg> */}
                <span className="text-2xl font-extrabold">Admin Penal</span>
              </a>

              {/* <!-- nav --> */}
              <nav>
                <a
                  onClick={() => setCurrentTab("dashboard")}
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  Dashboard
                </a>
                <li
                  onClick={() => setCurrentTab("userList")}
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  User List
                </li>
                <li
                  onClick={() => setCurrentTab("stocksList")}
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
                >
                  Stocks
                </li>
              </nav>
            </div>

            <div className="w-full sm:w-5/6">{shownTab(currentTab)}</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
