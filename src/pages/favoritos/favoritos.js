import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./favoritos.css";


function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@meusFilmes")
        setFilmes(JSON.parse(minhaLista)||[])
    },[])

    function deletar(id){
        let filtroFilmes = filmes.filter((film)=>{
            return (film.id!==id)
        })
        setFilmes(filtroFilmes)
        localStorage.setItem("@meusFilmes", JSON.stringify(filtroFilmes))
    }

    return(
        <div>
            <div class="titulo">
                <h1>Favoritos</h1>
            </div>
            <div class="secao">
                {filmes.length===0 && <span>não tem filmes aqui</span>}
                {filmes.map((movie)=>{
                        return(
                            <div class="celula" key={movie.id}>
                                <div class="imagem">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                                </div>
                                <div class="conteudo">
                                    <h1>{movie.title}</h1>
                                    <div class="botoes">
                                        <button><Link to={`/sobre/${movie.id}`}>Detalhes</Link></button>
                                        <button onClick={()=>deletar(movie.id)}>deletar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                
            </div>
        </div>
    );
}

export default Favoritos;