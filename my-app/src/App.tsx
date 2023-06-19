import React, { useState } from 'react';
import './App.css';


type AppEntradaProps = {
  texto: string;
  mudarTexto: (text: string) => void;
};

const AppEntrada: React.FC<AppEntradaProps> = ({ texto, mudarTexto }) => {
  return (
    <div>
      <input type="text" value={texto} onChange={(e) => mudarTexto(e.target.value)} />
    </div>
  );
};

type AppCloneEntradaProps = {
  texto: string;
};

const AppCloneEntrada: React.FC<AppCloneEntradaProps> = ({ texto }) => {
  return <p>{texto}</p>;
};

const AppNavBar: React.FC = () => {
  return <h1>Titulo Fixo</h1>;
};

const App: React.FC = () => {
  const [entrada, setEntrada] = useState('');

  return (
    <div>
      <AppNavBar />
      <AppEntrada texto={entrada} mudarTexto={setEntrada} />
      <AppCloneEntrada texto={entrada} />
    </div>
  );
};

export default App;