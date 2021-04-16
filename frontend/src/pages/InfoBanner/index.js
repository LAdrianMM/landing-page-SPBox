import { Button } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'
import './styles.css'
import { BannerData } from '../../data'

const InfoBanner = () => {
  const history = useHistory()
  let { id } = useParams()
  let cardSelected = BannerData[id - 1]

  return (
    <div className='info-banner'>
      <div className='card'>
        <img src={cardSelected.url} alt="logo"/>
        <div className='card-info'>
          <h2 className='card-client'>{cardSelected.title}</h2>
          <p className='card-description'>{cardSelected.subtitle}</p>
        </div>
        <Button onClick={() => history.push('/')} className='back'>Volver</Button>
      </div>  
    </div>
  )
}

export default InfoBanner
