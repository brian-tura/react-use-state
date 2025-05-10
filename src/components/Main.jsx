import React from 'react'
import ButtonList from './ButtonList'
import languages from '../../languages';
import { useState } from 'react'

const Main = () => {
    const [selectedLanguage, setActiveLanguage] = useState(languages[0]);

    return (
        <>
            <main>
                <div>
                    <ButtonList />
                </div>
                <div>
                    <h5>{selectedLanguage.title}</h5>
                    <p>{selectedLanguage.description}</p>
                </div>
            </main>
        </>
    )
}

export default Main