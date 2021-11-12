import logo from './images/logo.svg';
import chevron from './images/chevron.svg';
import login from './images/login.svg';
import register from './images/register.svg';

 const Header =()=>{
const test =()=>{
    console.log("eeez")
}
    return (
        
          <div className="bandeau">
            <div className="nav">
              <img src={logo} alt="logo" className="logo"></img>
              <div className="article">
                <p className="navMenu" onClick={test}>Articles</p>
                <img src={chevron} alt="chevron" className="chevron"></img>
              </div>
              <div className="quiz">
                <p className="navMenu">Quiz</p>
                <img src={chevron} alt="chevron" className="chevron"></img>
              </div>
              <div className="connexion">
                <img src={login} alt="logo connexion" className="login"></img>
                <img src={register} alt="logo inscription" className="register"></img>
              </div>  
            </div>
          </div>
          
       
      );

}

export default Header