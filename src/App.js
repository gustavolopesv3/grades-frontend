import React, { useState, useEffect, useLayoutEffect } from 'react';
import * as api from './api/apiService';
export default function App() {
  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState({});
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    const getGrades = async () => {
      const grades = await api.getAllGrades();
      setAllGrades(grades);
    };
    getGrades();
  }, []);

  return (
    <div>
      <h1 className="center">Controle de Notas</h1>
      {allGrades.length > 0 && <p>Notas Diponiveis</p>}
      {allGrades.length == 0 && <p>Carregando..</p>}
    </div>
  );
}
