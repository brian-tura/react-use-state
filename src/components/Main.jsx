import React from 'react'
import languages from '../../languages';
import { useState } from 'react'

const Main = () => {
    const [selectedLanguage, setActiveLanguage] = useState(null);

    const renderSelectedLanguage = () => {
        if (selectedLanguage === null) {
            return <h3>Nessun linguaggio selezionato</h3>;
        }
        const { title, language } = selectedLanguage;

        return (
            <>
                <h5>{selectedLanguage.title}</h5>
                <p>{selectedLanguage.description}</p>
            </>
        )
    }



    return (
        <>
            <main>
                <div className='container'>
                    <div className='content'>
                        {languages.map((language) => (
                            <button
                                onClick={() => setActiveLanguage(language)}
                                className='btn btn-primary'
                                key={language.id}
                            >
                                {language.title}
                            </button>
                        ))}
                    </div>
                    <div className='content'>
                        <div className='card'>
                            {renderSelectedLanguage()}
                        </div>
                    </div>

                </div>
            </main>
        </>
    )
}

export default Main