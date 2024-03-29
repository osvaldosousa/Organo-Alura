import { v4 as uuidv4 } from 'uuid'

import { useState } from 'react'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Rodape from './componentes/Rodape'
import Time from './componentes/Time'

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const inicial = [
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem:
        'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome,
      id: uuidv4(),
      favorito: false
    },
    {
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem:
        'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome,
      id: uuidv4(),
      favorito: false
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDotime(cor, id) {
    setTimes(
      times.map(time => {
        if (time.id === id) {
          time.cor = cor
        }
        return time
      })
    )
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

  function mudarFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        cadastrarTime={cadastrarTime}
        aoCadastrar={colaborador =>
          setColaboradores([...colaboradores, colaborador])
        }
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => (
          <Time
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              colaborador => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            aoFavoritar={mudarFavorito}
            mudarCor={mudarCorDotime}
          />
        ))}
      </section>
      <Rodape />
    </div>
  )
}

export default App
