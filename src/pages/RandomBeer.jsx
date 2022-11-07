import { useState, useEffect } from "react"
import axios from 'axios'
import Header from "../components/Header"

function RandomBeer() {
  const [beer, setBeer] = useState({})

  useEffect(()=> {
    getData()
  },[])

  const getData = async() => {
    try{
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      console.log(response)
      setBeer(response.data)
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <Header/>

    <div>

    <img src={beer.image_url} alt="beer" width="100px"/>
    <h2>{beer.name}</h2>
    <h3>{beer.tagline}</h3>
      <h6>{beer.first_brewed}</h6>
      <h5>{beer.attenuation_level}</h5>
      <p>{beer.description}</p>
      <h4>{beer.contributed_by}</h4>
    </div>
    </div>
  )
}

export default RandomBeer