import "./styles.css"
import Cards from "./componentes/cards"
import Cardcomponentes from "./componentes/cardresult"

function App() {
 

  return (
    <div>
      <div className="header">
        <h1>
          RTM finance
        </h1>
        <button className="btn-transacao">
          Nova transação
        </button>
      </div>
      <div className="cardbtn">
        <Cards texto={"Entradas"} valor={"68,00"}/>
        <Cards texto={"Saidas"} valor={"68,00"}/>
        <Cards texto={"Total"} valor= {"232,00"}/>  
      </div>

      <div className="container-cardresult">
        <Cardcomponentes/>
        <Cardcomponentes/>
        <Cardcomponentes/>
      </div>
    </div>
  )
}

export default App
