import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContex } from '../provider/AuthProvider';

const Register = () => {
  const { createUser, user } = useContext(AuthContex);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  if (user?.uid) {
    return <Navigate to={from} />;
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateUserData(result.user, name, photo);
        navigate('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log('Profile updated!');
      })
      .catch((error) => {
        console.log('An error occurred');
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
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo" className="block text-gray-700">
              Photo
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Photo"
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-4 py-2 text-white font-bold bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
            >
              Register
            </motion.button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-600">
              Login
            </Link>
          </p>
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}
      </motion.div>
    </div>
  );
};

export default Register;
