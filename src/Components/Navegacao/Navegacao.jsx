import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AgendamentoConsulta from "../Agendamento/Agendamento"
import AtualizarDados from "../AtualizarDados/AtualizarDados"
import Login from "../FormL/Index"
import Cadastro from "../FormCadas/Cadastro"
import HistoricoConsultas from "../HistoricoConsultas/HistoricoConsultas"
import Consulta from "../Consulta/Consulta"



function Navegacao() {
  return (
    <BrowserRouter>
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Cadastro</Link>
          </li>
          <li>
            <Link to="/atualizar-dados">Atualizar Dados</Link>
          </li>
          <li>
            <Link to="/historico-consultas">Histórico de Consultas</Link>
          </li>
          <li>
            <Link to="/agendar-consulta">Agendar Consulta</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/Cadastro" element={<Cadastro />} />     
        <Route path="/atualizar-dados" element={<AtualizarDados />} />
        <Route path="/historico-consultas" element={<HistoricoConsultas />} />
        <Route path="/agendar-consulta" element={<AgendamentoConsulta />} />
        <Route path="/consulta/:consultaId" element={<Consulta />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default Navegacao
