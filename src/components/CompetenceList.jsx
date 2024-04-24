import React from 'react';
import CompetenceCard from './CompetenceCard';

const CompetenceList = ({ competences, onDelete }) => {
  return (
    <div>
      {competences.map((competence, index) => (
        <CompetenceCard key={index} {...competence} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default CompetenceList;
