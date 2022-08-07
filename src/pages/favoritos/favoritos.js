import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


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
            {filmes.length===0 && <span>não tem filmes aqui</span>}
            <ul>
                {filmes.map((movie)=>{
                    return(
                        <li key={movie.id}>
                            <h4>{movie.title}</h4>
                            <Link to={`/sobre/${movie.id}`}>Detalhes</Link>
                            <button onClick={()=>deletar(movie.id)}>deletar</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Favoritos;