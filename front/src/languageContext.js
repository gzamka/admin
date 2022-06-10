import { createContext, useContext, useState } from 'react';
import { useCustomhook } from './useCustomhook';
const LanguageContext = createContext({})
export const Language = ({ children }) => {
    const [language, setlanguage] = useState(10);
    const handleChange = (event) => setlanguage(event.target.value);
    const { data } = useCustomhook("products")
    const news = useCustomhook('news')
    return (
        <LanguageContext.Provider value={{ language, handleChange, data,news }}>
            {children}
        </LanguageContext.Provider>
    )

}
export const UselanguageContext = () => useContext(LanguageContext)