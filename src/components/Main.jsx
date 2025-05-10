import React from 'react'
import languages from '../../languages';
import Buttons from './Buttons';
import Card from './Card';
import { useState } from 'react'

const Main = () => {
    const [selectedLanguage, setActiveLanguage] = useState(null);


    const renderSelectedLanguage = () => {
        if (selectedLanguage === null) {
            return <h3 className='card'>Nessun linguaggio selezionato</h3>;
        }
        const { title, description } = selectedLanguage;

        return (
            <>
                <Card title={title} description={description} />
            </>
        )
    }

    const renderButtons = () => {
        return languages.map((language) => {
            const active = selectedLanguage != null && language.id === selectedLanguage.id ? 'btn-warning' : 'btn-primary';
            return (
                <Buttons title={language.title} key={language.id} isActive={active} onSelect={() => setActiveLanguage(language)} />
            )
        })
    }

    return (
        <>
            <main>
                <div className='container'>
                    <div className='content'>
                        {renderButtons()}
                    </div>
                    <div>
                        {renderSelectedLanguage()}
                    </div>

                </div>
            </main>
        </>
    )
}

export default Main