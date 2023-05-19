import React, {createContext, useState} from 'react';

export const TranslationsContext = createContext();
const TranslationsProvider = ({children}) => {
  const [language, setLanguage] = useState('tr');
  return (
    <TranslationsContext.Provider value={{language, setLanguage}}>
      {children}
    </TranslationsContext.Provider>
  );
};
export default TranslationsProvider;
