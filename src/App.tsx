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
      <div className='logo'>
        <img src="/fonts/logo.png" alt="Pac-Man"/>
      </div>
      <div className="intro">
        <div className="introHeader">
          <h1>Portfolio
            <img style={{justifySelf: "center", paddingLeft: "3%", paddingTop: "25%"}} src='/fonts/icons8-game-controller-64.png' />
          </h1>
          <h2>Jan Kilar</h2>
        </div>
        <div className="introDescription">
          <p>Welcome to my portfolio! My name is [your name], and I am a [your profession] with a passion for game development. In this portfolio, you will find a collection of my projects that showcase my skills and experience in game development using various tools and programming languages.
            I have always been fascinated by games and the ability to create unique and engaging experiences for players.</p>
        </div>
      </div>
      <div id="AppContent">
        <div className='section'>
          <Card
            imageSource='/images/menu.png'
            title='Tap Champion'
            description={TAP_CHAMPION_DESCRIPTION}
            UID='tap'
          />

          {/* <CardOptions gameName='Tap Champion' /> */}
        </div>
        <div className='section'>
          <Card
            imageSource='/images/veggies.png'
            title='Find All Vegies'
            description={TAP_CHAMPION_DESCRIPTION}
            UID='veggies'
          />

          {/* <CardOptions gameName='Find All Veggies' /> */}
        </div>
        
      </div>
      {/* <footer>
        <a href="https://icons8.com/icon/EhGBqlGKPOmj/play">Play icon by Icons8</a>
      </footer> */}
    </div>
  );
}

export default App;
