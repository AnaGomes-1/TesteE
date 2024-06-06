import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Cadastro = ({ Cadastrar }) => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [genero, setGenero] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [mensagem, setMensagem] = useState("");

  // const [view, setView] = useState("login");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }
    console.log(
      "Nome:",
      name,
      "CPF:",
      cpf,
      "Telefone:",
      telefone,
      "Endereço:",
      endereco,
      "Cidade",
      cidade,
      "Estado",
      estado,
      "CEP:",
      cep,
      "Gênero",
      genero,
      "Email:",
      email,
      "Idade:",
      age,
      "Password:",
      password
    );
  };




  const estados = ["SP", "RJ", "MG", "RS", "SC"];
  const cidadesPorEstado = {
    SP: ["São Paulo", "Campinas", "Santos"],
    RJ: ["Rio de Janeiro", "Niterói", "São Gonçalo"],
    MG: ["Belo Horizonte", "Uberlândia", "Ouro Preto"],
    RS: ["Porto Alegre", "Caxias do Sul", "Gramado"],
    SC: ["Florianópolis", "Blumenau", "Joinville"],
  };

  const generos = ["Masculino", "Feminino"];

  const handleCadastro = (e) => {
    e.preventDefault();
    // alert(
    //   "Enviando os dados: " +
    //     "\n" +
    //     "Nome: " +
    //     name +
    //     "\n" +
    //     "CPF: " +
    //     cpf +
    //     "\n" +
    //     "Telefone: " +
    //     telefone +
    //     "\n" +
    //     "Endereço: " +
    //     endereco +
    //     "\n" +
    //     "Cidade: " +
    //     cidade +
    //     "\n" +
    //     "Estado: " +
    //     estado +
    //     "\n" +
    //     "CEP: " +
    //     cep +
    //     "\n" +
    //     "Gênero: " +
    //     genero +
    //     "\n" +
    //     "E-mail: " +
    //     email +
    //     "\n" +
    //     "Idade: " +
    //     idade
    // );
    setMensagem("Usuário cadastrado com sucesso");
  };

  // const handleChange = (e) => {
  //   const data = e.target.value;
  //   const [ano, mes, dia] = data.split('-');
  //   const dataFormatada = `${ano}/${mes}/${ano}`;
  //   setIdade(dataFormatada);
  // };
  const salvar = () => {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = { nome: nome, cpf: cpf, senha: senha };

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  return (
    <form action={handleSubmit}>
      <div>
        <label>Nome: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>CPF: </label>
        <input
          type="text"
          value={cpf}
          maxLength={11}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Telefone: </label>
        <input
          type="tel"
          value={telefone}
          placeholder="00 000000000"
          maxLength={12}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Endereço: </label>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Estado: </label>
        <select
          value={estado}
          onChange={(e) => {
            setEstado(e.target.value);
            setCidade(""); // reseta o estado quando a cidade for alterada
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
        <label>CEP: </label>
        <input
          type="text"
          value={cep}
          maxLength={9}
          onChange={(e) => setCep(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Gênero: </label>
        <select
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
        >
          <option value="">Selecione o gênero</option>
          {generos.map((genero) => (
            <option key={genero} value={genero}>
              {genero}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          placeholder="exemplo@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Data de Nascimento: </label>
        <input
          type="date"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>

      <div>
        <label>Senha: </label>
        <input
          type="password"
          value={password}
          minLength={8}
          maxLength={20}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Confirme a Senha: </label>
        <input
          type="password"
          value={confirmPassword}
          minLength={8}
          maxLength={20}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>

      <div>
        <button type="submit" onClick={handleCadastro}>
          Cadastrar
        </button>
        {mensagem && <p>{mensagem}</p>}

        <button>
          <Link to="/">Login</Link>
        </button>

        <h1>Cadastro</h1>
      </div>
    </form>
  );
};

export default Cadastro;
