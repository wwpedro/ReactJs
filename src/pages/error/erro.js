import { Link } from "react-router-dom";
import "./erro.css"

function Erro() {
    return (
      <div className="erro">
        <h1>Erro</h1>
        <h2>Página Não Encontrada</h2>
        <Link to="/">Veja todos os Filmes</Link>
      </div>
    );
  }
  
  export default Erro;