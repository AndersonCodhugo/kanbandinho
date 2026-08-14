import './App.css'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="quadro">

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
