import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
        }

    }
    componentDidMount() {
        fetch("https://api.nytimes.com/svc/movies/v2/critics/all.json")
        .then((res)=>res.json())
        .then((movie)=>{
            console.log("movie:",movie )
            this.setState({movies: movie})
        })
        .catch((Error)=>console.log(Error));
    }
    render() {
        return (
            <div>
             <h1>All movies</h1>
             {this.state.movies.map((mov,id)=>{
                 return
                 <h3>{}</h3>
             })}
            </div>
        );
    }
}

export default ClassComponent;
