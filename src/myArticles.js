import imgArticles from './images/imgArticles.svg';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import ArticlesLieux from './articlesLieux';

const MyArticles =()=>{

    const [titleArticle, setTitleArticle]=useState([])
    const [idTest, setIdTest]=useState(null)


    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://localhost:3002/articles',
            withCredentials: true
            
          })
          .then(res => {
            console.log("res",res)
            console.log("res.data",res.data)
            setTitleArticle(res.data)
          })
          .catch(res => {
            console.log("get user doesn't work")
          })

    },[])

    let navigate = useNavigate();
    let idRef = useRef()

    /*const handleSubmitLieu=(event,monMot)=>{
        console.log("idRef",idRef.current.id);
        console.log("document.getElementById('rrr')", document.getElementById("rrr").textContent)
        console.log("cont", document.getElementsByClassName("cont"))
        console.log("titleArticle", titleArticle[1].title)
        //localStorage.setItem("content", titleArticle.content)
        console.log("indexof", titleArticle.indexOf(document.getElementById("rrr")))
 
        console.log("monMot", monMot) 
        event.preventDefault();
        navigate("/lieu");
    }*/ 
    
    

    let r = []
    r.push(titleArticle)
    console.log("r",r)
    console.log("titleArticle", titleArticle)

 

    const map = titleArticle.map((article) => (
        //console.log("titleArticle", titleArticle);
        <div className="conteneurSystemeSco" key={article.id}>
          {/*<h1 className="cont"ref={idRef}id= "rrr">{article.title}</h1>*/}
          {/*<input type="text" className="cont"ref={idRef}id= "rrr" value={article.title} onChange={article.title} onClick={()=>console.log("yes")}/>*/}
          {<h1 className="cont"ref={idRef} id= "rrr">{article.title}</h1>}
          
          <div className="cadre" onClick={(event)=>{
        console.log("article.title", article.title)
        setTitleArticle(article.title)
        console.log("localStorage",localStorage.getItem("title"))
        if(localStorage.getItem("title")!== null){
            localStorage.removeItem("title")
            localStorage.setItem("title", article.title)
        }
        if(localStorage.getItem("title")=== null){
            localStorage.setItem("title", article.title)
        }       
        event.preventDefault();
        navigate("/lieu");
    } } ></div>
        
         </div>
         
    ));
    
    /*const map = r.forEach(
        element => <h1>{element}</h1>
        );*/


    return(
        <div className="pageArticles">
            <div className="imgDeco">
            <img src={imgArticles} alt="articlesLieux" className="articlesLieux"></img>
            </div>
            <div className="articles">
                <h1 className="middle-title">LIEUX A VISITER</h1>
                    <div className="img-place-containt">
                        {map}
                    </div>     
            </div>
        </div>
    )
}

export default MyArticles
