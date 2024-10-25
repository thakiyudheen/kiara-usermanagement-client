import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBook, FaUserGraduate } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
// import Learnup from '../../../../assets/LearnUp.png';
import { motion } from 'framer-motion';
import { RiMenu4Line } from 'react-icons/ri';

interface AdminSideNavProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const AdminSideNav: React.FC<AdminSideNavProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <motion.nav
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 z-50 flex flex-col  md:w-[16%] justify-between h-full  bg-gray-800 text-black"
      >
        <div>
          <div className="text-2xl font-bold text-center flex justify-center items-center p-1 m-3 text-purple-800 font-bold">
            {/* <img src={Learnup} className="w-[9rem]" alt="LearnUp Logo" /> */}
            ADMIN
          </div>
          {/* <hr /> */}
          <ul className="mt-6 text-center font-bold md:ml-3 ">
            <NavLink to="dashboard" className="p-4 text-gray-300 flex items-center hover:bg-purple-800  hover:rounded-lg cursor-pointer">
              <RxDashboard className="mr-4" />
              Dashboard
            </NavLink>
            <NavLink to="users" className="p-4 text-gray-300 flex items-center hover:bg-purple-800  hover:rounded-lg cursor-pointer">
              <FaBook className="mr-4" />
              Courses
            </NavLink>
            <NavLink to="students" className="p-4 text-gray-300 flex items-center hover:bg-purple-800  hover:rounded-lg cursor-pointer">
              <FaUserGraduate className="mr-4" />
              Students
            </NavLink>
          </ul>
        </div>
        <button
          onClick={toggleSidebar}
          className="md:fixed top-4 md:left-[15rem] left-[10rem] z-60 p-2 text-black"
        >
          <RiMenu4Line className="text-[25px] text-purple-600" />
        </button>
      </motion.nav>
    </>
  );
};

export default AdminSideNav;
