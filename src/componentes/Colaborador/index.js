import { IoCloseCircleOutline } from 'react-icons/io5'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  const propsFavoritar = {
    size: 25,
    onClick: clickFavorito
  }

  function clickFavorito() {
    aoFavoritar(colaborador.id)
  }
  return (
    <div className="colaborador">
      <IoCloseCircleOutline
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favorito">
          {colaborador.favorito ?
            <AiFillHeart {...propsFavoritar} color="#ff0000"/>
            :
            <AiOutlineHeart {...propsFavoritar}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Colaborador
