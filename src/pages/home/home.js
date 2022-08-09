import { useEffect, useState } from "react";
import api from "../../services/api";
import {Link} from 'react-router-dom';
import "./home.css";
import Carregando from "../../components/carregar";

function Home() {
    const [filmes , setFilmes] = useState([]);
    const [load , setLoad] = useState(true);

    useEffect(()=>{
    
      async function loadFilmes(){
        const response = await api.get('trending/all/day',{
          params:{
            api_key:"1139ecfdc8d0b1c0dffb856bf723406c",
            language: "pt-Br",
            page: 1,
          }
        })
        setFilmes(response.data.results) //setFilmes(response.data.results.slice(0, 10))
        setLoad(false)
      }
      loadFilmes()
    
    },[])

    //useEffect(()=>{
    //  fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=1139ecfdc8d0b1c0dffb856bf723406c&language=pt-BR`).then(response=>response.json()).then(data=>setFilmes(data.results))
    //},[])

    if(load){
      return(
        <Carregando></Carregando>
      )
    }

    return (
      <div classNameName="pagina">
        <div className="banner">
          <h1>Filmes</h1>
        </div>
    
        <div className="filmes">
            <div className="tituloHome"><h2>Em Cartaz</h2></div>
            <div className="filme">
              {filmes.map((filme)=>{
                    return(
                      <article key={filme.id}>
                        <div className="filme1">
                          <div className="imagemfilme">
                            <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} />
                          </div>
                          <h3><Link to={`/sobre/${filme.id}`}>Ver Mais</Link></h3>
                        </div>
                      </article>
                    )
                  })}
            </div>
        </div>

        <div className="sobreCine">
            <div className="logoCine">
                <img src={"https://static.vecteezy.com/system/resources/previews/004/796/030/original/illustration-graphic-of-popcorn-logo-free-vector.jpg"} />
            </div>
            <div className="sobretexto">
                <h2>
                    PipocaFlix é um site feito para você que quer saber mais sobre filmes em lançamento,
                    por isso é importante saber todas as novidades
                    vendo os detalhes e trailler.                
                </h2>
            </div>
        </div>

        <div className="rodape">

        </div>
    </div>
    );
  }
  
  export default Home;