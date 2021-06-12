import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



class App extends Component {
    state = { 
        advice:''}

    componentDidMount() {
        this.fetchAdvice();
    } 
    
    fetchAdvice = () => {
        
        axios.get('https://api.adviceslip.com/advice')
            .then(response => {
                const {advice} = response.data.slip;
                console.log(advice);
                this.setState({advice:advice});


                })
            .catch(error => {

                console.log(error);

                });

    }  
    
    render() { 
        const {advice} = this.state;
        return ( 
            
            <div className="app">
                <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="btn" onClick={this.fetchAdvice}>GIVE ME ADVICE</button>
                
                </div>
            </div>

         );
    }
}
 
export default App;