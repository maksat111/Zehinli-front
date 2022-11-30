import { createContext, useState } from 'react';

export const LanguageContext = createContext(null);

export const LanguageContextProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState({
        text: "TM",
        index: 1,
    });

    return (
        <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }} >
            {children}
        </LanguageContext.Provider>
    )
}