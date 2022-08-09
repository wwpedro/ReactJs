import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {toast} from "react-toastify"

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
        toast.success("filme delatado com sucesso!")
    }

    return(
        <div>
            <div className="titulo">
                <h1>Favoritos</h1>
            </div>
            <div className="secao">
                {filmes.length===0 && <span>não tem filmes aqui</span>}
                {filmes.map((movie)=>{
                        return(
                            <div className="celula" key={movie.id}>
                                <div className="imagem">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
                                </div>
                                <div className="conteudo">
                                    <h1>{movie.title}</h1>
                                    <div className="botoes">
                                        <Link to={`/sobre/${movie.id}`}><button>Detalhes</button></Link>
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