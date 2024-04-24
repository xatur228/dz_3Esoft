import React, { useState } from 'react';
import CompetenceList from './components/CompetenceList';
import CompetenceForm from './components/CompetenceForm';
import './style.css';

const App = () => {
  const initialCompetences = [
    { title: 'Владение JS', description: ' Я оцениваю свой навык владения языком программирования JavsScript как довольно', level: 70 },
    { title: 'Владение React', description: 'Я оцениваю свой навык владением библиотекой React как чуть ниже среднего ведь я ещё в процессе изучения', level: 40 },
    { title: 'Навык владения Node.js', description: 'Я оцениваю навык владения нодом чуть выше чем React т.к. я имею небольшую(маленькую) базу по нему и паралельно курсам самостоятельно прохожу курсы на ютубе по ноду', level: 55 },
  ];

  const [competences, setCompetences] = useState(initialCompetences);

  const addCompetence = (newCompetence) => {
    setCompetences([...competences, newCompetence]);
  };

  const deleteCompetence = (title) => {
    const updatedCompetences = competences.filter((competence) => competence.title !== title);
    setCompetences(updatedCompetences);
  };

  const deleteAbove50 = () => {
    const updatedCompetences = competences.filter((competence) => competence.level <= 50);
    setCompetences(updatedCompetences);
  };

  const deleteBelow50 = () => {
    const updatedCompetences = competences.filter((competence) => competence.level >= 50);
    setCompetences(updatedCompetences);
  };

  return (
    <div className="container">
      <h1>Управление компетенциями</h1>
      <CompetenceForm onAddCompetence={addCompetence} />
      <CompetenceList competences={competences} onDelete={deleteCompetence} />
      <button className="button" onClick={deleteAbove50}>Удалить компетенции с уровнем больше 50%</button>
      <button className="button" onClick={deleteBelow50}>Удалить компетенции с уровнем меньше 50%</button>
    </div>
  );
};

export default App;