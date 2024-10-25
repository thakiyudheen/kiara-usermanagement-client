import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminNavbar from '../page/admin/adminNav';
import UserTable from '../component/admin/clientTable';



const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminNavbar />}>
        {/* <Route path="/users" element={<UserTable/>} /> */}
        {/* <Route path="/admin/manage-users" element={<ManageUsers />} /> */}
   
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
