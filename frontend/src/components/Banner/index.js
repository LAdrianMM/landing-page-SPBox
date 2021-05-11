import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { BannerData } from '../../data'
import './styles.css'

const Banner = () => {
  return (
    <div>
      <Carousel 
      indicators={false}
      fade
      interval={3000}
      >
        {
          BannerData.map(item => {
            return(
              <Carousel.Item key={item.id}>
                <Link to={`/info/${item.id}`}>
                  <img
                    style={{height: '82vh', width: '100%', objectFit: 'cover'}}
                    src={item.url}
                    alt={item.title}
                  />
                  <Carousel.Caption className='banner-info'>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </Carousel.Caption>  
                </Link> 
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Banner
