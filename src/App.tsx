import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Card from './components/card/card'

const TAP_CHAMPION_DESCRIPTION = 'My Github with source code files Introduction Tap Champion is my clone of “Guitar Hero” mixed with “Osu!” and “Genshin Impact”s event-mini game.The project is designed and coded entirely by myself. I want to focus on usability andthe backend side of it.In the future I plan to work on the general appearance and aesthetics (UI,… '


function App() {
  return (
    <div className="App">
      <div id="AppHeader">
          <h1>Site contains information about my game projects</h1>
      </div>
      <div id="AppContent">
        <Card 
          imageSource='/images/menu.png'
          title='Tap Champion'
          description={TAP_CHAMPION_DESCRIPTION}
          />

      <Card 
          imageSource='/images/veggies.png'
          title='Tap Champion'
          description={TAP_CHAMPION_DESCRIPTION}
          />
      </div>
    </div>
  );
}

export default App;
