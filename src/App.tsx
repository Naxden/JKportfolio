import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Card from './components/card/card'
import CardOptions from './components/card/cardOptions'
import GameFooter from './components/engine/GameFooter';
import { useNavigate } from 'react-router'

const TAP_CHAMPION_DESCRIPTION = 'PC music game'

const VEGGIES_DESCRIPTION = "Mobile arcade game. Authors: Jan Kilar, Jakub Kurc, Adrian Sarna"



function App() {
  const navigate = useNavigate()
  const links : { [key :string] :string } = {
    "CV": "https://www.linkedin.com/in/jan-kilar-260398244/",
    "GITHUB": "https://github.com/Naxden?tab=repositories",
    "LINKEDIN": "https://www.linkedin.com/in/jan-kilar-260398244/"
  }


  const OnLinkClick = (type :string) => {
    const link = document.createElement('a');
        link.href = links[type];
        link.target = '_blank';
        link.click();
  }



  return (
    <div className="App">
      <div id="AppHeader">
          <button className="cvButton vsButton" onClick={()=> OnLinkClick('CV')}>CV</button>
          <button className="linkedInButton vsButton" onClick={()=> OnLinkClick('LINKEDIN')}>LinkedIn</button>
          <button className="githubButton vsButton" onClick={()=> OnLinkClick('GITHUB')}>GitHub</button>
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
            imageSource='/JKportfolio/images/tap.png'
            title='Tap Champion'
            description={TAP_CHAMPION_DESCRIPTION}
            UID='tap'
            linkSource='https://github.com/Naxden/TapChampion/tree/master'
            linkToRun=''
          />
        </div>
        <div className='section'>
          <Card
            imageSource='/JKportfolio/images/veggies.png'
            title='Find All Vegies'
            description={VEGGIES_DESCRIPTION}
            UID='veggies'
            linkSource='https://github.com/Naxden/FindAllVeggies'
            linkToRun='https://play.google.com/store/apps/details?id=com.Gammaelo.FindAllVeggies'
          />
        </div>
        <GameFooter/>
      </div>
    </div>
  );
}

export default App;
