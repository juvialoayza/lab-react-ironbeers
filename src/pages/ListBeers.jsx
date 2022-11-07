import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import {Link} from 'react-router-dom';


function ListBeers() {

  const [beerList, setBeerList] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      console.log(response)
      setBeerList(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    
    <div>
      <Header/>

    
    {beerList.map((eachBeer, index)=>{
      return(
        <div key={eachBeer._id} className="cardBeer">
          <img src={eachBeer.image_url} alt="beer" width="50px"/>
          <Link to ={`/beers/${eachBeer._id}`}>{eachBeer.name}</Link>
          <h4>{eachBeer.tagline}</h4>
          <p><b>Created by: </b>{eachBeer.name}</p>
          {/* <p>{eachBeer.contributed_by}</p> */}
          <hr />
        </div>

      )
    })}

    
     </div>


    
  )
}

export default ListBeers