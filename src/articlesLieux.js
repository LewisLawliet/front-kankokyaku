import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {propsTitle} from "./myArticles"

const ArticlesLieux =({propsTitle})=>{
    const [legend, setlegend]=useState("")
    const [content, setContent]=useState("")
     const mulan = "Mulan"
     const myTitle = localStorage.getItem("title")
     console.log("myArticles", propsTitle)
    useEffect(()=>{
        axios({
            method: 'get',
            url: `http://localhost:3002/articles/${myTitle}`,
            withCredentials: true
            
          })
          .then(res => {
            console.log("res",res)
            console.log("res.data",res.data.title)
            setlegend(res.data.title)
            setContent(res.data.content)
          })
          .catch(res => {
            console.log("get user doesn't work")
          })
          console.log("myArticles", propsTitle)
    },[])
    return(
        <div className="pageArticles article-position">
            <div className="article-cadre">
                <div className="space">
                    <h1>{legend}</h1><br />
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default ArticlesLieux
