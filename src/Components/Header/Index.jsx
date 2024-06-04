import React from 'react'

export const Header = ({setView}) => {
  return (
    <div>
        <h1></h1>
        <button onClick={() => setView('login')}>Entrar</button>
        <button onClick={() =>setView('register')}>Cadastrar</button>
        <button onClick={() =>setView('agend')} >Agendamento</button>
    </div>
  )
}

