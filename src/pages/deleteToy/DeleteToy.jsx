import React, { useState } from 'react';

const DeleteToy = ({toy,handleDelete}) => {
   const {_id} = toy;
    console.log(toy._id)
    

   
    console.log(toy)
    return (
        <div >
            <button onClick={() => handleDelete(_id)}className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                  Delete
                </button>
        </div>
    );
};

export default DeleteToy;