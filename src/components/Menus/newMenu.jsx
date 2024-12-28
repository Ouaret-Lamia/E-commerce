import './langMenu.css';
import React, { useState } from 'react';

export default function NewMenu() {
  const [selectedLanguage, setSelectedLanguage] = useState('Newest');

  const languages = [
    { name: 'Most popular' },
    { name: 'Your favorites' },
  ];

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedLanguage(selectedOption);
    // Here you would typically call a function to handle the selected option
  };

  return (
    <div className="language-dropdown">
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="dropdown-toggle"
      >
        <option value="Newest">Newest</option>
        {languages.map((lang) => (
          <option key={lang.name} value={lang.name}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
