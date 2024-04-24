import React from 'react';
import './CompetenceCard.css';

const CompetenceCard = ({ title, description, level, onDelete }) => {
  const handleDelete = () => {
    onDelete(title);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Уровень освоения: {level}%</p>
      <button className="button" onClick={handleDelete}>Удалить</button>
    </div>
  );
};

export default CompetenceCard;