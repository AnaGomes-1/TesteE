import React, { useState } from 'react'

const FormL = () => {
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(cpf, password)
        onLoginSucess();
        alert("Enviando os dados: " + userName + " - " + password);
    }

  return (
    <form action={handleSubmit}>
        <div>
            <label>CPF: </label>
            <input type="text" maxLength={11} value={cpf} placeholder='000.000.000-00' required onChange={(e) => setCpf(e.target.value)} />
        </div>
        
        <div>
            <label>Senha: </label>
            <input type="password" minLength={8} maxLength={20} value={password} placeholder='********' required onChange={(e) => setPassword(e.target.password)} />
        </div>

        <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <br />
                <a href="a">Esqueceu a senha?</a>

            </div>
        <button type='submit'>Entrar</button>

        

    </form>
  )
}

export default FormL