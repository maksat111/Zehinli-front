import { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext(null);

export const LanguageContextProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState({
        text: "TM",
        index: 1,
    });

    useEffect(() => {
        let languageData = localStorage.getItem('zehinliLanguage');
        if (languageData) {
            setCurrentLanguage(JSON.parse(languageData));
        } else {
            setCurrentLanguage({
                text: "TM",
                index: 1,
            })
        }
    }, [])

    const ChangeLanguage = (event) => {
        setCurrentLanguage(event);
        localStorage.setItem("zehinliLanguage", JSON.stringify(event));
    }

    return (
        <LanguageContext.Provider value={{ currentLanguage, ChangeLanguage }} >
            {children}
        </LanguageContext.Provider>
    )
}