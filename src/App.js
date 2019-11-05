import './App.css';

import rdata from "./data.json";


import React, { Component } from 'react';
 
import './App.css';

class App extends Component {
  constructor() {
    //you must call the Component constructor function using super(), before setting any properties in this class - this is a react standard
    super();

    //this is a react standard, you must call this.state
    this.state = {
      data: rdata,
      score : 0,
      topscore: 0,
    }

  }

  checkImage = (event) => {
    
     

    var imageId = event.target.getAttribute('data-id');

    let bool = false;

    for (let i=0; i<this.state.data.length; i++){
      if (this.state.data[i].id == imageId) bool = true;
    }

    if (bool){

 

      let data = this.state.data.map(item => {
        if (item.id == imageId) item.clicked = true;
        return item;
      })

      //shuffle the data array
      data.sort(() => Math.random() - 0.5);
      
      let score = this.state.score + 1;

      this.setState({
        data,
        score
      }, ()=>{
        if (this.state.score == this.state.data.length){
          this.setState({
            topscore: this.state.score,
            score: 0
          })
        }
      }) 

    }else{
      this.setState({
        topscore: this.state.score,
        score: 0
      }) 
    }
  }

  render() {
    return (
      <div className="App">

        <h2>Score: {this.state.score} | Top Score: {this.state.topscore}</h2>

        <div className="imageContainer">
          {this.state.data.map(item => ( <img key={item.id} data-id={item.id} onClick={this.checkImage} src={item.image} alt="logo"/>))}
        </div>

        

        
      </div>
    );
  }
}

export default App;
