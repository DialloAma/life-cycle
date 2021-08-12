import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
        }

    }
    componentDidMount() {
        fetch( "https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=EL60qpjMJbSG8Gi3c7ozM9h4GRpInBwR")
            .then((res) => res.json())
            .then((movie) => {

                
                this.setState({ movies: movie.results })
            })
            .catch((Error) => console.log(Error));
    }
    render() {
        return (
            <div>
                <h1>All movies fetched by class component</h1>
                {
                    this.state.movies.map((mov, id) => {
                        return (
                            <div key={id} style={{ border: '1px solid black',marginLeft:'20rem',marginRight:'20rem',marginTop:'1rem',paddingTop:'1rem' }}>
                               <img src={mov.multimedia.src} alt="my_movies" /> 
                                <div>{mov.display_title}</div>
                                <div>{mov.critics_pick}</div>
                                <div>{mov.byline}</div>
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}

export default ClassComponent;
