import { useEffect, useState } from "react"
import {useParams , useNavigate} from 'react-router-dom'
import Carregando from "../../components/carregar";
import {toast} from "react-toastify"

import "./sobre.css";

import api from "../../services/api";


function Sobre() {
  const {id} = useParams();
  const navgate = useNavigate();
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
      }).catch(()=>{
        navgate("/", {replace: true})
      })
    }
    loadFilme();

  },[id,navgate])

  function salvar(){
    const minhaLista = localStorage.getItem('@meusFilmes');
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((listaFilmes)=>listaFilmes.id === filme.id)

    if(hasFilme){
      toast.warn("essse filme já está na lista")
      return
    }else{
      filmesSalvos.push(filme);
      localStorage.setItem("@meusFilmes", JSON.stringify(filmesSalvos))
      toast.success("filme salvo com sucesso")
    }

    
  }

  if(loading){
    return(
      <Carregando></Carregando>
    )
  }
    return (
        <div className="quadro">

          <div className="esquerdo">
            <div className="baner"></div>
            <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} />
          </div>

          <div className="direito">
            <div className="tiuloDetalhe">
              <h1>{filme.title}</h1>
            </div>
            <div className="sinopse">
              <h4>{filme.overview}</h4>
            </div>
            <div className="avaliacao">
              <strong>Avaliação: {filme.vote_average}</strong>
            </div>
            <div className="botoesDetalhe">
              <button  onClick={salvar}>salvar</button>
              <a target={"_blank"} rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} trailler`}>
                <button>trailler</button>
              </a>
            </div>
          </div>

        </div>
    );
  }
  
  export default Sobre;