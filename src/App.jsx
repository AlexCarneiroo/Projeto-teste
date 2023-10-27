import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lista, setLista] = useState([])
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')
  const [cidade, setCidade] = useState('')


  const handlClick = () => {
    setLista([...lista, {
      nomes: nome,
      numero: numero,
      email: email,
      cidade: cidade
    }])


    setCidade('')
    setEmail('')
    setNome('')
    setNumero('')
  }

  return (
    <div className='container'>
      <form action="">
        <div>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder='Digite Seu Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Numero</label>
          <input 
            type="number"
            placeholder='Digite Seu Numero' 
            required 
            value={numero} 
            onChange={(e) => setNumero(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input 
            type="email" 
            placeholder='Digite Seu Email' 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="">Cidade</label>
          <input 
            type="text" 
            placeholder='Digite Seu Cidade' 
            required 
            value={cidade} 
            onChange={(e) => setCidade(e.target.value)} 
          />
        </div>
        <button onClick={handlClick}>Cadastrar</button>

      </form>

      <div>
        <h1>Tabela</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Numero</th>
              <th>Email</th>
              <th>Cidade</th>
            </tr>
          </thead>

          <tbody>
            {lista.map((item, index) => (
              <tr key={index}>
                <td>{item.nomes}</td>
                <td>{item.numero}</td>
                <td>{item.email}</td>
                <td>{item.cidade}</td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>
  )
}

export default App
