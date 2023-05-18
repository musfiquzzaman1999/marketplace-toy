import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContex } from '../provider/AuthProvider';

const Login = () => {
  const { signIn, googleSignIn,  user } = useContext(AuthContex);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if (user?.uid) {
    return <Navigate to={from} />;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        setError('');
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
      });
  };

 
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-md shadow-lg p-8 max-w-sm w-full"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{' '}
            <Link
              to="/ragister"
              className="text-blue-500 hover:text-blue-600"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-gray-600 text-sm text-center mb-2">
            Sign in with Social Account
          </h3>
          <div className="flex justify-center">
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleGoogle}
              className="text-gray-700 mx-2 hover:text-red-700"
            >
              <FaGoogle className="text-4xl" />
            </motion.button>
          </div>
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
