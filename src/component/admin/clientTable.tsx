import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTable: React.FC<{ isSidebarOpen: boolean }> = ({ isSidebarOpen }) => {
  const navigate = useNavigate();

  // Sample demo data for users
  const demoUsers = [
    {
      _id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      role: 'admin',
      isActive: true,
    },
    {
      _id: '2',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane@example.com',
      role: 'user',
      isActive: false,
    },
    {
      _id: '3',
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice@example.com',
      role: 'instructor',
      isActive: true,
    },
    {
      _id: '4',
      firstName: 'Bob',
      lastName: 'Brown',
      email: 'bob@example.com',
      role: 'user',
      isActive: true,
    },
    {
      _id: '5',
      firstName: 'Charlie',
      lastName: 'Davis',
      email: 'charlie@example.com',
      role: 'admin',
      isActive: false,
    },
  ];

  return (
    <main className={` ${isSidebarOpen ? 'ml-[16%]' : 'ml-0'} bg-gray-900 min-h-screen transition-all duration-300 ease-in-out`}>
      <div className='bg-gray-900 p-5'>
        <div className='flex justify-between h-[9vh] items-center'>
            <h1 className='font-semibold text-gray-400 mb-4 mt-5 ml-2 text-2xl'>User Management</h1>
            <button className='bg-blue-700 py-2 px-2 mr-4 rounded-lg flex items-center justify-center '><small> Add Client</small></button>

        </div>
        <table className="table table-zebra w-full text-white mt-4">
          <thead>
            <tr className="bg-gray-700 text-center">
              <th className='p-2'>No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {demoUsers.map((user, index) => (
              <tr key={user._id} className="text-center border-b dark:hover:bg-gray-800">
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                <td>
                  <button
                    onClick={() => navigate(`/admin/view-user/${user._id}`)}
                    className="border font-bold py-1 px-2 rounded-lg hover:bg-blue-600 m-1 hover:text-white border-blue-600 text-blue-600"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default UserTable;
