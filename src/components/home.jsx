import React, { Component } from 'react';
class Home extends Component {
    state = {  } 
    render() { 
        return (<div className="home">
        <div className="home-content"></div>
        <p className="home-slogan">
          You got the travel plans, we got the travel vans.
        </p>
        <p className="home-text">
        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
        <div>
            <button className="home-button">Find your van</button>
        </div>
      </div>);
    }
}
 
export default Home;