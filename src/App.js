import { useState } from "react";
import Home from "./pages/Home";
import SiteContext from './context/SiteContext';

export default function App() {

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('tr');
  const data = { theme, setTheme, language, setLanguage }

  return (
    <SiteContext.Provider value={data}>
      <Home />
    </SiteContext.Provider>
  );
}