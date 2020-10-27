import React, { useState } from 'react';
import * as api from './api/apiService';
export default function App() {
  const [allGrades, setAllGrdes] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState({});
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <div>
      <h1>Controle de Notas</h1>
      {allGrades.length > 0 && <p>Notas Diponiveis</p>}
      {allGrades.length == 0 && <p>Carregando..</p>}
    </div>
  );
}
