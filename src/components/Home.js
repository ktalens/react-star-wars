//CSS import
import "../css/components/Home.css";
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from './common/Spinner'
import Page from './Page'

const Home = () => {

  const [starship, setStarship]=useState([])

  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    axios.get('https://swapi.dev/api/starships/')
    .then((res)=>{
      setStarship(res.data.results)
    })
    .then(
        setLoading(false))
  },[])
  
  const display = ()=>{
    if(loading){
      return <Spinner />
    } else {
      return starship.map((ship,i)=>(

      <div key={i} className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{ship.name}</span>
            <button><Link to={{pathname: `/Starships/${i}`, state: {ship}, component: {Page} }}>{ship.name}</Link></button>
          </div>
          <div className="card-action">
            <button onClick={ ()=>{console.log(ship)}}>Data</button>

          </div>
        </div>
      </div>
      ))
    }
  }

  return(
    <div className="container">
      <h2>Star Wars React</h2>
      <div className="row">{display()}</div>

    </div>
  );
};

export default Home;
