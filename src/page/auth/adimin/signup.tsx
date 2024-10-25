import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { SignupSchema } from '../../../schema/signupSchema';
import { signupAction } from '../../../redux/actions/admin/signupAction';
import { useAppDispatch } from '../../../hooks/hooke';
import { getAdminAction } from '../../../redux/actions/admin/getAdminAction';


const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error,setError] = useState<string|null>(null)
  const dispatch = useAppDispatch()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full flex items-center justify-center h-screen bg-[black]">
      <div className="max-w-md w-full p-10 bg-gray-900 rounded-lg shadow-md">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-purple-700 mb-5 text-center"
        >
          Sign Up
        </motion.h2>

        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={async(values) => {
            console.log('Form data', values);
            let existMail = await dispatch(getAdminAction({email:values?.email}))
            if(!existMail?.payload.status){
                setError('')
                const response = await dispatch(signupAction(values))
            }else{
                setError('Email is exist !')
            }
            
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
               <small className='text-[red]'>{error}</small>
              <div>
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="w-full px-2 py-1 border-b-[1px] focus:outline-none bg-gray-900 border-gray-300 text-white"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-2 py-1 border-b-[1px] focus:outline-none bg-gray-900 border-gray-300 text-white"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="relative">
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="w-full px-2 py-1 border-b-[1px] focus:outline-none bg-gray-900 border-gray-300 text-white"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="relative">
                <Field
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full px-2 py-1 border-b-[1px] focus:outline-none bg-gray-900 border-gray-300 text-white"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 px-2"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-purple-800 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none text-white"
              >
                {isSubmitting ? 'Signing up...' : 'Sign Up'}
              </motion.button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
