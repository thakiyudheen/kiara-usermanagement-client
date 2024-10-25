import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import LoginSVG from '../../assets/login/login.svg';
// import LearnUp from '../../assets/LearnUp.png';
import { LoginSchema } from '../../../schema/loginSchema';
import { useAppDispatch } from '../../../hooks/hooke';
import { loginAction } from '../../../redux/actions/admin/loginAction';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  let dispatch = useAppDispatch()
  const [error,setError]= useState<string|null>('')

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-evenly h-screen bg-black">
      {/* <img className='absolute md:h-[12%] h-[9%] top-0 left-0 md:left-4' src={LearnUp} alt="Logo" /> */}
      {/* <img className='md:h-[70%] h-[30%] md:mb-0 mb-8' src={LoginSVG} alt="Login" /> */}
      <div className="max-w-md w-full p-10 rounded-[10px] shadow-md space-y-4 bg-gray-900">
        <h2 className="text-2xl font-bold text-purple-700 mb-5 text-center">Login</h2>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            console.log('this is the login values', values);
            const response =await dispatch(loginAction(values))
            if (loginAction.fulfilled.match(response)) {
                console.log('Login successful:', response.payload);
              } else if (loginAction.rejected.match(response)) {
                setError('Email or Password is incorrect')
                console.error('Login failed:', response.error.message);
              }
            
            
          }}
        >
          <Form className="space-y-4">
            <small className='text-[red]'>{error}</small>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-2 py-1 border-b-[1px] focus:outline-none border-[grey] bg-gray-900 text-white text-sm"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-[12px]" />
            </div>
            <div className="relative">
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="w-full px-2 py-1 border-b-[1px] focus:outline-none border-[grey] bg-gray-900 text-white text-sm"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash className='text-white' /> : <FaEye className='text-white' />}
              </div>
              <ErrorMessage name="password" component="div" className="text-red-500 text-[12px]" />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
