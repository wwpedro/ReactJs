import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

import api from "../../services/api";

function Sobre() {
  const {id} = useParams();
  const [filme, setFilme] = useState({});
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    async function loadFilme(){
      await api.get(`movie/${id}`,{params:{
        api_key:"1139ecfdc8d0b1c0dffb856bf723406c",
        language: "pt-Br"
      }}).then((response)=>{
        setFilme(response.data)
        setLoading(false)
      }).catch(console.log("não carregou"))
    }
    loadFilme();
  },[])

  if(loading){
    return(
      <h2>Carregando...</h2>
    )
  }
    return (
      <div>
        <h2>{filme.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`} />
        <br></br>
        <h4>{filme.overview}</h4>
        <span>{filme.overview}</span>
        <strong>{filme.vote_average}</strong>
      </div>
    );
  }
  
  export default Sobre;