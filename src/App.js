import axios from 'axios';
import React from 'react';
import * as api from './api/apiService';
export default function App() {
  const testeApi = async () => {
    const res = await api.getAllGrandes();
    console.log(res);
  };
  testeApi();
  return <p>Hello</p>;
}
