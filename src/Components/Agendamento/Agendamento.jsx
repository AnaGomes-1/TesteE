import React, { useState, useEffect } from "react";

const AgendamentoForm = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nomeUsuario, setNomeUsuario] = useState("");

  const [dados, setDados] = useState({ nome: "", email: "", telefone: "" });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(storedUsers);
  }, []);

  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  const [medico, setMedico] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const estados = ["SP", "RJ", "MG", "RS", "SC"];
  const cidadesPorEstado = {
    SP: ["São Paulo", "Campinas", "Santos"],
    RJ: ["Rio de Janeiro", "Niterói", "São Gonçalo"],
    MG: ["Belo Horizonte", "Uberlândia", "Ouro Preto"],
    RS: ["Porto Alegre", "Caxias do Sul", "Gramado"],
    SC: ["Florianópolis", "Blumenau", "Joinville"],
  };

  const especialidadesM = ["Fisioterapeuta", "Clinico Geral"];
  const medicosPorEspecialidade = {
    Fisioterapeuta: ["Dr. João", "Dr. Maria"],
    ClinicoGeral: ["Dr. Pedro", "Dr. Ana"],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    const agendamento = {
      medico,
      especialidade,
      dataConsulta,
      cidade,
      estado,
    };
    agendamentos.push(agendamento);
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));
  };

  const handleAgendar = (index) => {
    setNomeUsuario(usuarios[index].nome);
    setEditIndex(index);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Data da Consulta: </label>
        <input
          type="date"
          value={dataConsulta}
          onChange={(e) => setDataConsulta(e.target.value)}
        />
      </div>

      <div>
        <label>Estado: </label>
        <select
          value={estado}
          onChange={(e) => {
            setEstado(e.target.value);
            setCidade(""); // reseta a cidade quando o estado for alterado
          }}
          required
        >
          <option value="">Selecione o estado</option>
          {estados.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Cidade: </label>
        <select
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          required
        >
          <option value="">Selecione a cidade</option>
          {estado &&
            cidadesPorEstado[estado].map((cidade) => (
              <option key={cidade} value={cidade}>
                {cidade}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>Especialidade: </label>
        <select
          value={especialidade}
          onChange={(e) => setEspecialidade(e.target.value)}
          required
        >
          <option value="">Selecione a especialidade</option>
          {especialidadesM.map((especialidade) => (
            <option key={especialidade} value={especialidade}>
              {especialidade}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Médico: </label>
        <select
          value={medico}
          onChange={(e) => setMedico(e.target.value)}
          required
        >
          <option value="">Selecione o médico</option>
          {especialidade &&
            medicosPorEspecialidade[especialidade].map((medico) => (
              <option key={medico} value={medico}>
                {medico}
              </option>
            ))}
        </select>
      </div>

      <a href="a">Voltar ao Login</a>
      <h1>Agendamento</h1>
    </form>
  );
};

export default AgendamentoForm;
