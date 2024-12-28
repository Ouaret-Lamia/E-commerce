import './langMenu.css';
import React, { useState } from 'react';

export default function LangMenu() {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
    // Add more languages as needed
  ];

  const handleChange = (event) => {
    const selectedCode = event.target.value;
    setSelectedLanguage(selectedCode);
    // Here you would typically call a function to change the app's language
  };

  return (
    <div className="language-dropdown">
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="dropdown-toggle"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
