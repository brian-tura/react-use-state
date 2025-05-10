import React from 'react'

const Card = ({title, description}) => {
    return (
        <>
            <div className='content'>
                <div className='card'>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default Card