import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';

const ToysDetails = () => {
    
        const toyData = useLoaderData();
        console.log(toyData)
        return (
            <div>
               <h1>{toyData.name}</h1> 
            </div>
        );
    
    
};

export default ToysDetails;