import React, { useState , useEffect  } from 'react';
import axios from 'axios';


const FunctionComponent = () => {
     const [movis, setMovis] = useState([]);
     useEffect(()=>{
         axios.get("https://api.nytimes.com/svc/movies/v2/critics/all.json")
         .then((res)=>{
             console.log(res)
             setMovis(res.data)
         }).catch((error)=>console.log("error"))

     })
    return (
        <div>
           <h1>All movies in Funtions</h1>
             {movis.map((mov,id)=>{
                 return
                 <h3>{}</h3>
             })} 
        </div>
    );
}

export default FunctionComponent;


