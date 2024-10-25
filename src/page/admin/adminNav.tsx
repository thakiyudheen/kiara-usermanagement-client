import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { Outlet } from 'react-router-dom';
import AdminSideNav from '../../component/admin/adminLayout';

const AdminNavbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>

      <AdminSideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <nav className={`w-full  h-[69px] shadow-lg flex justify-end items-center bg-gray-800  fixed top-0 left-0 z-40`}>
        <div className='flex justify-evenly mr-[3rem] items-center'>
          <CgProfile className='text-[1.3rem] mr-5' />
        </div>
      </nav>

      <main className={`pt-[70px] ${isSidebarOpen ? 'ml-[16%]' : 'ml-0'}  bg-[black] min-h-screen transition-all duration-300 ease-in-out`}>
        <Outlet />
      </main>
    </>
  );
};

export default AdminNavbar;
