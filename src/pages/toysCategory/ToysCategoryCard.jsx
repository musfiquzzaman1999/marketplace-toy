import React from 'react';

import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`${fadeIn}`;

const CardContainer = styled.div`
  animation: 1s ${fadeAnimation};
`;

const ToysCategoryCard = ({toy}) => {
    console.log(toy)
    return (
        <div>
           <CardContainer className="p-4 border rounded-lg shadow-md hover:shadow-lg">
      <img src={imageSrc} alt="Card Image" className="mb-4" />
      <p className="text-gray-800">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Click Me
      </button>
    </CardContainer>
        </div>
    );
};

export default ToysCategoryCard;