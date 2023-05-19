import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/toys/')
      .then(response => response.json())
      .then(data => setToysData(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const filteredToys = toysData.filter(toy =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-center font-bold text-5xl text-rose-600 mt-16">All Toys</h2>

      {/* Search input */}
      <div className="flex justify-center mt-6 mb-8">
        <input
          type="text"
          placeholder="Search by Toy Name"
          className="px-4 py-2 border border-gray-300 rounded-md"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Toy list */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 font-semibold">Seller</th>
            <th className="px-4 py-2 font-semibold">Toy Name</th>
            <th className="px-4 py-2 font-semibold">Sub-category</th>
            <th className="px-4 py-2 font-semibold">Price</th>
            <th className="px-4 py-2 font-semibold">Available Quantity</th>
            <th className="px-4 py-2 font-semibold"></th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.map(toy => (
            <tr key={toy._id}>
              <td className="px-4 py-2">{toy.sellerName}</td>
              <td className="px-4 py-2">{toy.name}</td>
              <td className="px-4 py-2">{toy.subCategory}</td>
              <td className="px-4 py-2">{toy.price}</td>
              <td className="px-4 py-2">{toy.quantityAvailable}</td>
              <td className="px-4 py-2">
               <Link to={`/toys/${toy._id}`}> <button className="text-blue-500">View Details</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
