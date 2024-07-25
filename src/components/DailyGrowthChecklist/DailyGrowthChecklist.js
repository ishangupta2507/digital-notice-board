// DailyGrowthChecklist.js
import React, { useState } from 'react';
import './DailyGrowthChecklist.css'; // Import the CSS file for styling

const DailyGrowthChecklist = () => {
  // Sample data for checklist items
  const [items, setItems] = useState([
    { id: 1, text: 'Exercise for 30 minutes', completed: false },
    { id: 2, text: 'Read a chapter of a book', completed: false },
    { id: 3, text: 'Meditate for 10 minutes', completed: false },
    { id: 4, text: 'Write a journal entry', completed: false },
    { id: 5, text: 'Review daily goals', completed: false }
  ]);

  // Toggle completion status of an item
  const handleToggle = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="checklist-widget">
      <h2>Daily Growth Checklist</h2>
      <ul className="checklist">
        {items.map(item => (
          <li
            key={item.id}
            className={`checklist-item ${item.completed ? 'completed' : ''}`}
            onClick={() => handleToggle(item.id)}
          >
            <span className="checkbox">
              {item.completed ? '✔️' : '⬜️'}
            </span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyGrowthChecklist;
