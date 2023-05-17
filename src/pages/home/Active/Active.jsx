import React, { Children } from 'react';
import './Active.css'
import { NavLink } from 'react-router-dom';

const Active = ({to,children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive}) =>
                      isActive
                        ? "active"
                        
                        : ""
                    }
                    
                  >
                    {/* other code */}
                    {children}
                  </NavLink>
    );
};

export default Active;