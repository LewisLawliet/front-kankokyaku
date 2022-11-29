//import logo from './images/logo.svg';
import logo from './images/New logo.svg';
import lieux from './images/Group 2.svg';
import gastronomie from './images/Group 3.svg';
import fun from './images/Group 4.svg';
import chevron from './images/chevron.svg';
import login from './images/login.svg';
import out from './images/logout.png';
import register from './images/register.svg';
import successLogin from './images/Group 10.png';
import logged from './images/logged.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router';
import quizLieux from './images/quizLieux.svg';
import quizFun from './images/quizFun.svg';
import quizGastronomie from './images/quizLieux.svg';

 const Header =()=>{
    //const [cookies, setCookie] = useCookies(["auth-cookie"]);
    const [cookies, setCookie] = useCookies("auth_cookie");
    //const { getAllCookies } = useCookies();
    const [formRegister, setFormRegister]=useState(false)
    const [value, setValue]=useState("")
    const [valuePassword, setValuePassword]=useState("")
    const [valueEmail, setValueEmail]=useState("")

    const [formLogin, setFormLogin]=useState(false)
    const [valuePasswordLogin, setValuePasswordLogin]=useState("")
    const [valueEmailLogin, setValueEmailLogin]=useState("")
    const [articles, setArticles]=useState(false)
    const [quiz, setQuiz]=useState(false)
    const [placeSound, setPlaceSound]=useState(false)
    const [get, setGet]=useState(false)
    const [isregistered, setIsRegistered]=useState(false)
    const [failed, setFailed]=useState(false)
    const [errorAuth, setErrorAuth]=useState("")
    const [isLogged, setIsLogged]=useState(false)
    const [role, setRole]=useState("")

    useEffect(()=>{
        console.log("useeee",cookies)
        console.log("useeee",isLogged)
        axios({
          method: 'get',
          url: 'http://localhost:3002/users',
          withCredentials: true
          
        })
        .then(res => {
          console.log("res",res)
          console.log("res.data",res.data[0].role)
          setRole(res.data[0].role)
        })
        .catch(res => {
          console.log("get user doesn't work")
        })
        
        axios({
          method: 'get',
          url: 'http://localhost:3002/users/me',
          withCredentials: true
          
        })
        .then(res => {
          console.log("users me cookie",res)
          setIsLogged(true)
          localStorage.setItem("logged", "true")
          //window.location.reload();
        })
        .catch(res => {
          console.log("users me cookie doesn't work")
        })

    },[get, cookies])

    let navigate = useNavigate();
    const handleSubmitHome=(event)=>{
        
        event.preventDefault();
        navigate("/");
    }

    const handleSubmitBack=(event)=>{
        
      event.preventDefault();
      navigate("/");
  }


    const handleChange=(e)=>{
      //e.preventDefault()
      setValue(e.target.value)
    }

    const articlesLieux =()=>{
      navigate("/myArticles")
      setArticles(false)
    }

    const myQuizzes =()=>{
      navigate("/myQuizzes")
      setArticles(false)
    }

    const setAppCookie = () => cookies.auth().currentUser &&
    cookies.auth().currentUser.getToken().then(token => {
        cookies.set('token', token, {
            domain: window.location.hostname,
            expire: 1 / 24, // One hour
            path: '/',
            secure: true // If served over HTTPS
     });
});


    const handleChangePassword=(event)=>{
        setValuePassword(event.target.value)
        //console.log(event.target.value)
    }
    const handleChangeEmail=(event)=>{
      setValueEmail(event.target.value)
      //console.log(event.target.value)
  }

  const handleChangePasswordLogin=(event)=>{
    setValuePasswordLogin(event.target.value)
    //console.log(event.target.value)
}
const handleChangeEmailLogin=(event)=>{
  setValueEmailLogin(event.target.value)
  //console.log(event.target.value)
}
    
    //let navigate = useNavigate()
    const handleSubmit=(event)=> {
        event.preventDefault()

          console.log("payload création :",value, valueEmail, valuePassword)
          axios({
            method: 'post',
            url: 'http://localhost:3002/users',
            data: {
              name: value,
              email: valueEmail,
              password: valuePassword
            },
            withCredentials: true
          }).then(res => {
            console.log(res,"création work")
            setIsRegistered(true) 
          })
          .catch(res => {
            console.log(res.response.data.message)
            setFailed(true)
            setErrorAuth(res.response.data.message)
          })
        setFormRegister(false)
    }

    const handleSubmitLogin=(event)=> {
      event.preventDefault()

        //console.log("payload connexion :", valueEmailLogin, valuePasswordLogin)
        axios({
          method: 'post',
          url: 'http://localhost:3002/users/authenticate',
          data: {
            email: valueEmailLogin,
            password: valuePasswordLogin
          },
          withCredentials: true
        }).then(res => {
          //setCookie("auth-cookie", res)
          console.log("reees cookie",res)
          if(res.status === 200){
           axios({
              method: 'get',
              url: 'http://localhost:3002/users/me',
              withCredentials: true
            })
            .then(res => {
              console.log("users me cookie",res)
            })
            .catch(res => {
              console.log("users me cookie doesn't work")
            })
            console.log("useeee",cookies)
            console.log("success")
            setGet(true)
          }
        })
        .catch(res => {
          console.log("Login user doesn't work",res)
          setFailed(true)
          setErrorAuth(res.response.data.message)
        })
        console.log("cookies",cookies)
      setFormLogin(false)
  }

  const logout =()=>{
    axios({
      method: 'post',
      url: 'http://localhost:3002/users/logout',
      withCredentials: true
    })
    .then(res => {
      console.log("logout",res)
      setIsLogged(false)
      localStorage.removeItem("logged")
      
      window.location.reload();
    })
    .catch(res => {
      console.log("logout doesn't work")
    })
  }

    const handleClick=()=>{
      setFormLogin(true)
    }

    const handleClickRegister=()=>{
      setFormRegister(true)
    }

    const articlesMenu=()=>{
      setArticles(!articles)
    }

    const quizMenu=()=>{
      setQuiz(!quiz)
    }

    const closeForm=()=>{
      setFormRegister(false)
      setFormLogin(false)
      setIsRegistered(false)
      setFailed(false)
    }



    return (
        
          <div className="bandeau">
            <div className="nav">
              <img src={logo} alt="logo" onClick={handleSubmitHome} className="logo"></img>
              <div className="article">
                <p className="navMenu" >Articles</p>
                <img src={chevron} onClick={articlesMenu} alt="chevron" className="chevron"></img>
              </div>
              {articles ? <div className="my-articles">
              <img src={lieux}  onClick={articlesLieux} alt="lieux" className="lieux"></img>
              <img src={gastronomie} alt="gastronomie" className="gastronomie"></img>
              <img src={fun} alt="fun" className="fun"></img>
                <div className="themes">
                  <p className="theme_article lieux-title">LIEUX</p>
                  <p className="theme_article gastronomie-title">GASTRONOMIE</p>
                  <p className="theme_article fun-title">FUN</p>
                </div>
              </div> : null}
              <div className="quiz">
                <p className="navMenu">Quiz</p>
                <img src={chevron} onClick={quizMenu} alt="chevron" className="chevron"></img>
              </div>
              {quiz ? <div className="my-articles">
              <img src={quizLieux} alt="lieux" onClick={myQuizzes} className="lieux my-quiz"></img>
              {/*placeSound ? <audio controls autoPlay>
                    <source src="https://www.youtube.com/watch?v=TyH_PNFCd48&ab_channel=CarFeatures.mp3" type="audio/mpeg" />
              </audio> : null*/}
              <img src={quizGastronomie} alt="gastronomie" className="gastronomie my-quiz"></img>
              <img src={quizFun} alt="fun" className="fun my-quiz"></img>
                <div className="themes">
                  <p className="theme_article lieux-title">QUIZ LIEUX</p>
                  <p className="theme_article gastronomie-title">QUIZ GASTRONOMIE</p>
                  <p className="theme_article fun-title">QUIZ FUN</p>
                </div>
              </div> : null}
              <div className="connexion">
              {isLogged ? null : <img src={login} alt="logo connexion" onClick={handleClick} className="login"></img>}
                {isregistered ? <div className="success-msg">
                <div className="moncercle register-cercle" onClick={closeForm}>
                  <div className="cross-container">
                        <div className="mdiv">
                          <div className="md"></div>
                        </div>
                      </div>
                    </div>  			   
                  <img src={successLogin} alt="successLogin"></img>
                  <h1 className="msg-login">TU ES DES NÔTRES !</h1>
                </div> : null }
                {failed ? <div className="success-msg">
                <div className="moncercle register-cercle" onClick={closeForm}>
                  <div className="cross-container">
                        <div className="mdiv">
                          <div className="md"></div>
                        </div>
                      </div>
                    </div>  			   
                  {/*<img src={successLogin} alt="successLogin"></img>*/}
                  <h1 className="msg-login error">{errorAuth}</h1>
              </div> : null }
                {formLogin ? <form className="contourForm"  onSubmit={handleSubmitLogin}>
                <div className="moncercle connexion-cercle" onClick={closeForm} >
                <div className="cross-container">
                        <div className="mdiv">
                          <div className="md"></div>
                        </div>
                      </div>
                </div>
                  <h3>Connecte-toi !</h3>
                <input type="email" name="email" placeholder="email"
                    onChange={handleChangeEmailLogin} value={valueEmailLogin} className = "champsForm" required /><br />			   
                    <input type="password" name="password" placeholder="Your password" autoComplete="current-password"
                      onChange={handleChangePasswordLogin} value={valuePasswordLogin} className = "champsForm" required minLength="4" /><br />

                    <button className = "champsForm envoyer submit-login">Envoyer</button>
			            </form> : null}

                {isLogged ? null : <img src={register} alt="logo inscription" onClick={handleClickRegister} className="register"></img>}
                {isLogged && role !== "ADMIN" ? <img src={logged} alt="logo inscription"  className="register" onClick={handleSubmitBack}></img>: null}
                {isLogged && role === "ADMIN" ? <img src={logged} alt="logo inscription"  className="register" onClick={handleSubmitBack}></img>: null}
                {isLogged ? <img src={out} onClick={logout} className="logout" alt="logout"></img>: null}
                  
                  {formRegister ? <form className="contourForm" onSubmit={handleSubmit}>
                  <div className="moncercle register-cercle" onClick={closeForm}>
                  <div className="cross-container">
                        <div className="mdiv">
                          <div className="md"></div>
                        </div>
                      </div>
                    </div>  			   
                  <h3>Inscris-toi !</h3>
                  <input type="text" name="username" placeholder="Name" 
                  onChange={handleChange} value={value} className = "champsForm" required minLength="4" /><br />    	

                  <input type="password" name="password" placeholder="Your password" autoComplete="current-password"
                    onChange={handleChangePassword} value={valuePassword} className = "champsForm" required minLength="4" /><br />

                  <input type="email" name="email" placeholder="email"
                  onChange={handleChangeEmail} value={valueEmail} className = "champsForm" required /><br />

                  <button className = "champsForm envoyer submit-register">Envoyer</button>
                 </form> : null}
                 
              </div>  
            </div>
          </div>
          
       
      );

}

export default Header