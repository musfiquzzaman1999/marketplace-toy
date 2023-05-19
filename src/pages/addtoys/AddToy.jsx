import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';


const AddToy = () => {
  const { user } = useContext(AuthContex);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantityAvailable = form.quantityAvailable.value;
    const description = form.description.value;
  
    const newToy = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantityAvailable,
      description
    };
  
    fetch('http://localhost:5000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update the local state or fetch the updated toys list
        // depending on how your application is structured
      })
      .catch((error) => {
        console.log(error);
        // Show an error message
      });
  
    // Clear the form fields
    form.reset();
  };

  return (
    <div className="container mx-auto px-4">
    <div className="flex justify-center items-center min-h-screen">
    <form className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3 bg-white rounded-lg shadow-lg p-6" onSubmit={handleFormSubmit}>
    <h2 className="text-2xl font-bold mb-6">Add a Toy</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Picture URL</label>
          <input
            type="text"
            name="pictureUrl"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Seller Name</label>
          <input
            type="text"
            name="sellerName"
            defaultValue={user ? user.displayName : ''}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Seller Email</label>
          <input
            type="text"
            name="sellerEmail"
            defaultValue={user ? user.email : ''}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Sub-category</label>
          <input
            type="text"
            name="subCategory"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Price</label>
          <input
            type="text"
            name="price"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Rating</label>
          <input
            type="text"
            name="rating"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Quantity Available</label>
          <input
            type="text"
            name="quantityAvailable"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Detail Description</label>
          <textarea
            name="description"
            className="border border-gray-300 rounded-md px-4 py-2 w-full h-32"
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default AddToy;
