import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import DeleteToy from '../deleteToy/DeleteToy';
import useTitle from '../../hooks/useTitle';
import { AuthContex } from '../provider/AuthProvider';

const MyToys = () => {
  const { user } = useContext(AuthContex);
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  useTitle('My Toy');

  useEffect(() => {
    fetch(`http://localhost:5000/toysMail/${user?.email}?sort=${sortOrder}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [user, sortOrder]);

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      fetch(`http://localhost:5000/toys/${id}`, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Deleted successfully');
            const remaining = myToys.filter((t) => t._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">My Toys</h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">
                  Price{' '}
                  <button
                    className="text-blue-500"
                    onClick={handleSort}
                  >
                    {sortOrder === 'asc' ? '▲' : '▼'}
                  </button>
                </th>
                <th className="py-2 px-4 border">Quantity</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((toy) => (
                <tr key={toy._id} className="bg-white">
                  <td className="py-2 px-4 border">{toy.name}</td>
                  <td className="py-2 px-4 border">{toy.price}</td>
                  <td className="py-2 px-4 border">{toy.quantityAvailable}</td>
                  <td className="py-2 px-4 border">{toy.description}</td>
                  <td className="py-2 px-4 border flex">
                    <Link to={`/updateToy/${toy._id}`}>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2">
                        Update
                      </button>
                    </Link>
                    <DeleteToy
                      key={toy._id}
                      toy={toy}
                      handleDelete={handleDelete}
                    ></DeleteToy>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
