import React, { useState , useEffect  } from 'react';
import axios from 'axios';


function FunctionComponent () {
    let movis=[];
     const [movies, setMovies] = useState(movis);
     useEffect(()=>{
         async function getmovies(){
          let res = await fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=EL60qpjMJbSG8Gi3c7ozM9h4GRpInBwR")
          let mov = await res.json()
          console.log(mov.results)
          setMovies(mov.results)
         }
         getmovies()
        

     },[])
    return (
        <div>
                <h1>All movies fetched by function component</h1>
                {
                movies.map((movi)=>{
                        return (
                            <div key={movi.id} style={{ border: '1px solid black',marginLeft:'20rem',marginRight:'20rem',marginTop:'1rem',paddingTop:'1rem' }}>
                               <img src={movi.multimedia.src} /> 
                                <div>{movi.display_title}</div>
                                <div>{movi.critics_pick}</div>
                                <div>{movi.byline}</div>
                            </div>
                        )

                    })
                }
            </div>
    );
}

export default FunctionComponent;


