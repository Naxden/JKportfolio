import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Card from './components/card/card'
import CardOptions from './components/card/cardOptions'
import GameFooter from './components/engine/GameFooter';

const TAP_CHAMPION_DESCRIPTION = 'My Github with source code files Introduction Tap Champion is my clone of “Guitar Hero” mixed with “Osu!” and “Genshin Impact”s event-mini game.The project is designed and coded entirely by myself. I want to focus on usability andthe backend side of it.In the future I plan to work on the general appearance and aesthetics (UI,… '


function App() {
  return (
    <div className="App">
      <div id="AppHeader">
          <button className="cvButton vsButton">CV</button>
          <button className="linkedInButton vsButton">LinkedIn</button>
          <button className="githubButton vsButton">GitHub</button>
          <button className="customzieButton vsButton">Customize</button>
      </div>
      <div className='logo'>
        <img src="/JKportfolio/fonts/logo.png" alt="Pac-Man"/>
      </div>
      <div className="intro">
        <div className="introHeader">
          <h1>Portfolio
            <img style={{justifySelf: "center", paddingLeft: "5%"}} src='/JKportfolio/fonts/icons8-game-controller-64.png' />
          </h1>
          <h2>Jan Kilar</h2>
        </div>
        <div className="introDescription">
          <p>Welcome to my portfolio! My name is Janek, and I am a game developer with a passion for game development. In this portfolio, you will find a collection of my projects that showcase my skills and experience in game development using various tools and programming languages.
            I have always been fascinated by games and the ability to create unique and engaging experiences for players.</p>
        </div>
      </div>
      <div id="AppContent">
        <div className='section'>
          <Card
            imageSource='/JKportfolio/images/menu.png'
            title='Tap Champion'
            description={TAP_CHAMPION_DESCRIPTION}
            UID='tap'
          />
        </div>
        <div className='section'>
          <Card
            imageSource='/JKportfolio/images/veggies.png'
            title='Find All Vegies'
            description={TAP_CHAMPION_DESCRIPTION}
            UID='veggies'
          />
        </div>
        <GameFooter/>
      </div>
    </div>
  );
}

export default App;
