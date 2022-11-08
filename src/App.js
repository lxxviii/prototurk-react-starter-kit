import { useState } from "react";
import Home from "./pages/Home";
import LanguageContext from './context/LanguageContext';
import ThemeContext from "./context/ThemeContext";

export default function App() {

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('tr');
  const data = {theme, setTheme, language, setLanguage}

  return (
    <LanguageContext.Provider value={data}>
      <ThemeContext.Provider value={data}>
        <Home />
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}