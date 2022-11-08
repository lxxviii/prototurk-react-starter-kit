import { useState } from "react";
import Header from './component/Header';
import Footer from './component/Footer';

export default function App() {

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('tr');

  return (
    <div className='App'>
      <Header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} /> <br />
      APP <br />
      <Footer theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage} />
    </div>
  );
}