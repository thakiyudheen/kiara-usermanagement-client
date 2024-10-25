import { useEffect, useState } from 'react'
import './App.css'
import Signup from './page/auth/adimin/signup'
import Login from './page/auth/adimin/login'
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './hooks/hooke';
import { getUserAction } from './redux/actions/admin/getUserAction';
import { RootState } from './redux';
import AdminNavbar from './page/admin/adminNav';
import { RoleBasedRedirect } from './routes/roleBasedRedirect';
import Protected from './routes/protuctedRoute';
import AdminRoutes from './routes/adminRoutes';
import PublicRoute from './routes/publicRoutes';
import Invoice from './component/admin/pdf';


function App() {
  const [count, setCount] = useState(0);
  const dispatch = useAppDispatch()
  const {data} = useAppSelector((state:RootState)=>state.user)

  useEffect(()=>{
    
    const getUser=async()=>{
      await dispatch(getUserAction())
    }
    getUser()
    

  },[dispatch])

  console.log(data);
  

  return (
    <>
      {/* <div>{data.username}</div> */}
      <Routes>
      <Route
          path="/"
          element={
            <RoleBasedRedirect
              roles={{
                admin: "/admin",
                student: "/user",
                instructor: "/client",
              }}
            />
          }
        />
        <Route
					path="/admin/*"
          element={
					<Protected
							allowedRoles={["admin"]}
							element={<AdminRoutes/>}
						/>}
          
        />
        {/* Public Routes */}
      <Route path="/adminLogin" element={<PublicRoute element={<Login />} />} />
      <Route path="/signup" element={<PublicRoute element={<Signup />} />} />
        <Route path="/log" element={<Invoice/>} />

      </Routes>
    </>
  )
}

export default App
