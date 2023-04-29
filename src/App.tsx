import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Card from './components/card/card'
import CardOptions from './components/card/cardOptions'

const TAP_CHAMPION_DESCRIPTION = 'My Github with source code files Introduction Tap Champion is my clone of “Guitar Hero” mixed with “Osu!” and “Genshin Impact”s event-mini game.The project is designed and coded entirely by myself. I want to focus on usability andthe backend side of it.In the future I plan to work on the general appearance and aesthetics (UI,… '


function App() {
  return (
    <div className="App">
      <div id="AppHeader">
          <button className="cvButton vsButton">Cv</button>
          <button className="linkedInButton vsButton">LinkedIn</button>
          <button className="githubButton vsButton">GitHub</button>
          <button className="customzieButton vsButton">Customize</button>
      </div>
      <div id="AppContent">
        <Card 
          imageSource='/images/menu.png'
          title='Tap Champion'
          description={TAP_CHAMPION_DESCRIPTION}
          UID='tap'
          />

        <Card 
          imageSource='/images/veggies.png'
          title='Find All Vegies'
          description={TAP_CHAMPION_DESCRIPTION}
          UID='veggies'
          />
      </div>
      <div id="AppContentDebug">
        <CardOptions gameName='Tap Champion'/>
        <CardOptions gameName='Find All Veggies'/>
      </div>
      {/* <footer>
        <a href="https://icons8.com/icon/EhGBqlGKPOmj/play">Play icon by Icons8</a>
      </footer> */}
    </div>
  );
}

export default App;
