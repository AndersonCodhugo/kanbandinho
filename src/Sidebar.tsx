import { userState, useState } from 'react'
import './Sidebar.css'

function Sidebar() {
    const [aberta, setAberta] = useState(false)

    function trocarEstado() {
        setAberta(!aberta)
    }

  return (
    <div className={aberta ? "sidebar-gaveta aberta" : "sidebar-gaveta fechada"}>
      
      <button className="botao-abrir" onClick={() => setAberta(!aberta)}>
        ☰
      </button>

      <div className="conteudo-interno">
        <h2>Meu Menu</h2>
        <p>+ Post-it Amarelo</p>
      </div>

    </div>
  )
}

export default Sidebar