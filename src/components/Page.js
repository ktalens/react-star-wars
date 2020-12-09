 import React, {useEffect, useState} from 'react'
 import {Link} from 'react-router-dom'
 import Spinner from './common/Spinner'
 import Home from './Home'
 
 const Page = (ship) => {
    //  console.log(ship)
    //let shipInfo = location.location.ship.info
    const [loading,setLoading] = useState(true)
    const [details,setDetails] =useState([])
   
    useEffect(()=>{
        console.log(ship)
        setLoading(false)
    },[])

   const display = ()=>{
     if(loading){
       return <Spinner />
     } else {
       return (
       <div className="col s12 m6">
         <div className="card blue-grey darken-1">
           <div className="card-content white-text">
             <span className="card-title">{ship.name}</span>
             <p>
                 NAME: {ship.name}
                 MODEL: {ship.model}
             </p>
             <Link to ={Home}>RETURN</Link>
           </div>
           <div className="card-action">
             {/* Card Action */}
           </div>
         </div>
       </div>
       )
     }
   }
 
   return(
     <div className="container">
       <h2>{ship.name}</h2>
       <div className="row">{display()}</div>
 
     </div>
   );
 };
 
 export default Page;
 