import { useEffect, useState } from "react";
import api from "../../services/api";
import {Link} from 'react-router-dom';
import "./home.css";

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
        <h2>Carregando...</h2>
      )
    }

    return (
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme)=>{
            return(
              <article key={filme.id}>
                <img src="" />
                <strong>{filme.title}</strong>
                <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} />
                <Link to={`/sobre/${filme.id}`}>Ver Mais</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
  }
  
  export default Home;