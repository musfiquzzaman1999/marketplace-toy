import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [toysData, setToysData] = useState([]);
  useTitle('All Toy')

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
    <div className="px-4 py-8 mb-20">
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
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 font-semibold border-b border-r">Seller</th>
            <th className="px-4 py-2 font-semibold border-b border-r">Toy Name</th>
            <th className="px-4 py-2 font-semibold border-b border-r">Sub-category</th>
            <th className="px-4 py-2 font-semibold border-b border-r">Price</th>
            <th className="px-4 py-2 font-semibold border-b border-r">Available Quantity</th>
            <th className="px-4 py-2 font-semibold border-b"></th>
          </tr>
        </thead>
        <tbody>
  {filteredToys.slice(0, 20).map(toy => (
    <tr key={toy._id}>
      <td className="px-4 py-2 border-b border-r">{toy.sellerName}</td>
      <td className="px-4 py-2 border-b border-r">{toy.name}</td>
      <td className="px-4 py-2 border-b border-r">{toy.subCategory}</td>
      <td className="px-4 py-2 border-b border-r">{toy.price}</td>
      <td className="px-4 py-2 border-b border-r">{toy.quantityAvailable}</td>
      <td className="px-4 py-2 border-b">
        <Link to={`/toys/${toy._id}`}>
          <button className="text-blue-500">View Details</button>
        </Link>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default AllToys;
