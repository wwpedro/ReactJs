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
      <div className="pagina">
        <div class="banner">
          <h1>Filmes</h1>
        </div>
    
        <div class="filmes">
            <div class="titulo"><h2>Em Cartaz</h2></div>
            <div class="filme">
              {filmes.map((filme)=>{
                    return(
                      <article key={filme.id}>
                        <div class="filme1">
                          <div class="imagemfilme">
                            <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} />
                          </div>
                          <h3><Link to={`/sobre/${filme.id}`}>Ver Mais</Link></h3>
                        </div>
                      </article>
                    )
                  })}
            </div>
        </div>

        <div class="sobreCine">
            <div class="logoCine">
                <img src={"https://static.vecteezy.com/system/resources/previews/004/796/030/original/illustration-graphic-of-popcorn-logo-free-vector.jpg"} />
            </div>
            <div class="sobretexto">
                <h2>
                    este site é feito para você que quer assitir um filme atual e legal
                    na noite é importante saber que voce pode secole ro melhhor para voce
                    vendo os detalhes e trailler.                
                </h2>
            </div>
        </div>

        <div class="rodape">

        </div>
    </div>
    );
  }
  
  export default Home;