import React from 'react'

const Buttons = ({ title, isActive, onSelect }) => {
    return (
        <button onClick={() => {onSelect()}} className={`btn ${isActive}`}>
            {title}
        </button>
    );
};

export default Buttons