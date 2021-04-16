import { useState } from 'react'
import './styles.css'
import { projects } from '../../data'
import Card from '../Card'

const Projects = () => {
  const [itemShow, setItemShow] = useState(8)

  return (
    <div className='project'>
      <div className='project-title'>
        <h1>{projects.title}</h1>
        <p>{projects.description}</p>
      </div>
      <div className="container-item">
          {
            projects.items.slice(0, itemShow).map((card, i) => {
              return(
                <Card 
                  key={i}
                  src={card.src}
                  client={card.client}
                  description= {card.description}
                  date={card.date}
                 />
              )
            })
          }
          {
            itemShow === 27 
            ? '' 
            : <div 
                onClick={() => itemShow === 20 ? setItemShow(itemShow + 7)  : setItemShow(itemShow + 6)} 
                className='card-seemore'
                >
                <h2>Ver más...</h2>
              </div>
          }
      </div>
    </div>
  )
}

export default Projects
