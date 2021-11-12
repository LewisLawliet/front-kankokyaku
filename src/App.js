import fond from "./images/fond.svg";
import touriste from "./images/touriste.svg";

import './App.css';


function App() {
  return (
    <div className="App">
      {/*<img className="city" alt="fond city night" src={fond}></img>*/}
      <div className="city"></div>
      <div className="body-pa"><img className="touriste" alt="touriste" src={touriste}></img></div>
      
    </div>
  );
}

export default App;
