import React, { useState } from "react";
import "./App.css";
import {Header} from "./Components/Header/Index";
import FormL from "./Components/FormL/Index";
import Cadastro from "./Components/FormCadas/Cadastro";
import AgendamentoForm from "./Components/Agendamento/Agendamento";
import Navegacao from "./Components/Navegacao/Navegacao";

function App() {
  const [view, setView] = useState("login");

  <button>Outro teste</button>

  return (
    <div className="container">
      <div className="sidebar">
        <Header setView={setView} />
      </div>
      <div className="main-content">
        {view === "login" ? (
          <FormL />
        ) : view === "register" ? (
          <Cadastro />
        ) : view === "agendamento" ? (
          <AgendamentoForm />
        ) : (
          <Navegacao />
        )}
      </div>
    </div>
  );
}

export default App;
