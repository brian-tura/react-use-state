import React from 'react'
import languages from '../../languages'

const ButtonList = () => {
    return (
        languages.map((language) => (
            <button>{language.title}</button>
        ))
    )
}

export default ButtonList