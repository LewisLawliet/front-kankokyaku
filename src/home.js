//import fond from "./images/fond.svg";
import touriste from "./images/touriste.svg";
//import japan_city_night from "./images/city-night.svg";
import japan_city_night from "./images/tt.jpg";

import './App.css';


function Home() {
  return (
    <div className="App">
      {/*<img className="city" alt="fond city night" src={fond}></img>*/}
      <div className="city"></div>
      <div className="">
        {<img className="japan-city-night" alt="japan-city-night" src={japan_city_night}></img>}
        {/*<div className="imgHomeBackground"></div>*/}
      </div>
      <div className="body-pa"><img className="touriste" alt="touriste" src={touriste}></img></div>
      
    </div>
  );
}

export default Home;

/*function App() {
  return (
    <div className="App">
      <div className="city"></div>
      <div className="">
        <img className="japan-city-night" alt="japan-city-night" src={japan_city_night}></img>
        <div className="texte_centrer">Exemple de texte</div>
      </div>
      <div className="body-pa"><img className="touriste" alt="touriste" src={touriste}></img></div>
      
    </div>
  );
}

export default App;*/
