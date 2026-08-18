import './App.css'
import Sidebar from './Sidebar'

function App() {

  function permitirPouso(evento: DragEvent) {
    evento.preventDefault(); 
  }

  function aoSoltar(evento: DragEvent) {
    const posicaoX = evento.clientX;
    const posicaoY = evento.clientY;

    console.log(`Você soltou no pixel X: ${posicaoX} e Y: ${posicaoY}`);
  }

  return (
    <div className="quadro" onDragOver={permitirPouso} onDrop={aoSoltar}>

      <Sidebar></Sidebar>

      <div className='primeira-linha-vertical'></div>
      <div className='segunda-linha-vertical'></div>
      <div className='linha-horizontal'></div>

      <p id='Do'> A Fazer </p>
      <p id='Doing'> Fazendo </p>
      <p id='Done'> Feito </p>

      
    </div>
    
  )
}

export default App
