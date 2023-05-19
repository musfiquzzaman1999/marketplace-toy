import React, { useContext, useEffect, useState } from 'react';
import { AuthContex } from '../provider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContex);
  const [myToys, setMyToys] = useState([]);
//   const [modalShow, setModalShow] = React.useState(false);
//   const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/toysMail/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyToys(data);
      });
  }, [user]);
    return (
        <div>
            <h2>{myToys.length}</h2>
        </div>
    );
};

export default MyToys;