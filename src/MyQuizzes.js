import imgQuestion from './images/Questions.svg';
import notLogged from './images/not-logged.svg';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';


const MyQuizzes =()=>{

    const [titleQuiz, setTitleQuiz]=useState([])
    const [isLogged, setIsLogged]=useState(false)
    const logged = localStorage.getItem("logged")

    useEffect(()=>{
    const check=()=>{
      console.log(logged)
    }
      
      

      axios({
        method: 'get',
        url: 'http://localhost:3002/users/me',
        withCredentials: true
      })
      .then(res => {
        console.log("beaucoup gosse ! Fais les quizzes",res)
        console.log("logged",logged)
        //if(logged==="true"){
          console.log("looooged")
          setIsLogged(true)
        //}
        
        axios({
          method: 'get',
          url: 'http://localhost:3002/quizzes',
          withCredentials: true
          
        })
        .then(res => {
          console.log("res",res)
          console.log("res.data",res.data)
          setTitleQuiz(res.data)
        })
        .catch(res => {
          console.log("get user doesn't work")
        })
      })
      .catch(res => {
        if(logged === null){
          setIsLogged(false)
        }
        
        console.log("imposteur !!!!!")
      })

    return      

    },[isLogged, logged])

    let navigate = useNavigate();
    let idRef = useRef()
    

 

    const map = titleQuiz.map((quiz) => (

        <div className="conteneurSystemeSco" key={quiz.id}>
          {<h1 className="cont"ref={idRef} id= "rrr">{quiz.name}</h1>}
          
          <div className="cadre" onClick={(event)=>{
        console.log("quiz.title", quiz.title)
        setTitleQuiz(quiz.title)
        console.log("localStorage",localStorage.getItem("title"))
        if(localStorage.getItem("title")!== null){
            localStorage.removeItem("title")
            localStorage.setItem("title", quiz.title)
        }
        if(localStorage.getItem("title")=== null){
            localStorage.setItem("title", quiz.title)
        }       
        event.preventDefault();
        navigate("/lieu");
    } } ></div>
        
         </div>
         
    ));
    



    return(
        <div className="imgDenied">
          {isLogged ?
            <div>
                <div className="imgDeco">
                  <img src={imgQuestion} alt="articlesLieux" className="articlesLieux"></img>
                </div>
                <div className="articles">
                  <h1 className="middle-title">Teste tes connaissances !</h1>
                      <div className="img-place-containt">
                          {map}
                      </div>     
                </div>
            </div> :
             <div className="notLogged">
               <h1 className="middle-title">Connecte-toi pour participer !</h1>
              <img src={notLogged} alt="notLogged" className="imgDenied"></img>
              </div>}
        </div>
    )
}

export default MyQuizzes
