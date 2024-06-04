import { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header/Index";
import FormL from "./Components/FormL/Index";
import Cadastro from "./Components/FormCadas/Cadastro";
import AgendamentoForm from "./Components/Agendamento/Agendamento";
import AtualizarDados from "./Components/AtualizarDados/AtualizarDados";

function App() {
  const [view, setView] = useState("login");
  const [agendamento, setAgendamento] = useState("agendamento");

  const handleLogin = () => {
    setAutenticacao(true);
  };

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
        ) : (
          <AgendamentoForm />
        )}
      </div>
    </div>
  );
}

export default App;
