import React, { useState } from 'react';

const CompetenceForm = ({ onAddCompetence }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [level, setLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCompetence({ title, description, level });
    setTitle('');
    setDescription('');
    setLevel('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Название" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Описание" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Уровень" value={level} onChange={(e) => setLevel(e.target.value)} />
      <button type="submit">Создать</button>
    </form>
  );
};

export default CompetenceForm;