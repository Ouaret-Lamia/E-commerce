import './langMenu.css'
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io'; // For the dropdown arrow

export default function NewMenu(){
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Newest');

  const languages = [
    { name: 'Most popular' },
    { name: 'Your favorites' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (langCode) => {
    setSelectedLanguage(langCode);
    setIsOpen(false);
    // Here you would typically call a function to change the app's language
  };

  return (
    <div className="language-dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        <span>{selectedLanguage}</span>
        <IoMdArrowDropdown />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((lang) => (
            <li key={lang.name} onClick={() => selectLanguage(lang.name)}>
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};