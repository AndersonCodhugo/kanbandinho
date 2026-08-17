import { useState } from 'react'
import { PostIt } from './PostIt'
import './Sidebar.css'

function Sidebar() {
    const [aberta, setAberta] = useState(false)

    function trocarEstado() {
        setAberta(!aberta)
    }

    function aoComecarArrastar(evento: React.DragEvent, cor: string) {
      evento.dataTransfer.setData("corPostIt", cor)
    }

  return (
    <div className={aberta ? "sidebar-gaveta aberta" : "sidebar-gaveta fechada"}>
      
      <button className="botao-abrir" onClick={() => setAberta(!aberta)}>
        ☰
      </button>
      {aberta && (
      <div className="conteudo-interno">
        <h2>Meu Menu</h2>
          <div className='miniatura-postit' draggable={true} onDragStart={(evento) => aoComecarArrastar(evento, 'amarelo')}>
            Puxar Post-It Amarelo   
          </div>
      </div>
      )}

    </div>
  )
}

export default Sidebar