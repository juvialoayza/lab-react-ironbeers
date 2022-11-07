import { getDefaultNormalizer } from '@testing-library/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

function SingleBeer() {
  const {beerId} = useParams()

  const [details, setDetails] = useState([])

  useEffect(()=> {
    getData()
  }, [])

  const getData = async() => {
    try{
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      console.log(response)
      setDetails(response.data)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>

      <Header/>
      <div >
      <img src={details.image_url} alt="beer" width="100px"/>
      <h2>{details.name}</h2>
      <h3>{details.tagline}</h3>
      <h6>{details.first_brewed}</h6>
      <h5>{details.attenuation_level}</h5>
      <p>{details.description}</p>
      <h4>{details.contributed_by}</h4>

      </div>
        

    </div>
  )
}

export default SingleBeer