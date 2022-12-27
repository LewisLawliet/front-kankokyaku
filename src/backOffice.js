import { useEffect } from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';

const BackOffice =()=>{
    const [article, setArticle]= useState("");
    const [contenuArticle, setContenuArticle]= useState("");
    const [image, setImage]= useState("");
    const [category, setcategory]= useState("");
    const [gastronomieId, setGastronomieId]=useState("")
    const cat = useRef(null)
    

    useEffect(()=>{
        console.log("id: ",document.getElementById('category').value)
        console.log("ref: ", cat.current.value)
        console.log("gastronomieId", gastronomieId)
        axios({
          method: 'get',
          url: 'http://localhost:3002/categories/gastronomie',

        }).then(res => {
          console.log("categories", res.data.id)
 
          setGastronomieId(res.data.id)
        })
        .catch(res => {
          console.log(res.response.data.message)
          //setFailed(true)
          //setErrorAuth(res.response.data.message)
        })

    },[cat, image, gastronomieId])

    const handleChangeArticle=(event)=>{
    setContenuArticle(event.target.value)
    }
    const handleChangeTitle=(event)=>{

        setArticle(event.target.value)
    }
    /*const handleChangeCategory=(event)=>{
        setcategory(event.target.value)
    }*/

    /*const send = event =>{
        const data = new FormData()
        data.append("name", image)
        data.append("file", file)
    }*/

    const fileName =(event)=>{
        const file = event.target.files[0]
        setImage(file)
        console.log("file", file)
        console.log("image", image)
    }

    const handleSubmit=(event)=> {
        event.preventDefault()
        console.log("gastronomieId.length",gastronomieId.length)
        let i;
        if(gastronomieId.length > 1){
          console.log("il est lààààà")
          setcategory(gastronomieId)
          let i = gastronomieId
        }
        //setcategory(cat.current.value)
        console.log("article:",article)
        console.log("contenuArticle:",contenuArticle)
        console.log("category:",category)
          axios({
            method: 'post',
            url: 'http://localhost:3002/articles',
            data: {
              title: article,
              content: contenuArticle,
              categorie_id: i,
              image: image
            },
            withCredentials: true
          }).then(res => {
            console.log(res,"création work")
            //setIsRegistered(true) 
          })
          .catch(res => {
            console.log(res.response.data.message)
            //setFailed(true)
            //setErrorAuth(res.response.data.message)
          })
          console.log("image", image)
          const data = new FormData()
          data.append("name", image)
          //data.append("file", file)
    }
    return(

    <div className ="postArticle">
			
				
    <form className="conteneurBack" onSubmit={handleSubmit}>
        <input type="text" name="titleArticle" placeholder="titleArticle" 
        onChange={handleChangeTitle} className="title input-office"/><br />
        
        <textarea rows="30" name="contenuArticle" placeholder="contenuArticle" 
        onChange={handleChangeArticle} className="contenu input-office"></textarea><br />

        <p>
       <label htmlFor="category">CATEGORIE</label><br />
       <select name="category" id="category" ref={cat}>
       <option value="choose" >choose category</option>
           <option value="51427243-696d-46fe-89aa-ae2d2061ad1e">lieux</option>
           <option value="c4187086-6751-4555-b8ac-ed925cc3b42b">fun</option>
           <option value={gastronomieId}>gastronomie</option>
       </select>
   </p>
   <label htmlFor="name">NAME</label><br />
   <input type="name" id="file" /><br />
  <label htmlFor="file">FILE</label><br />
   <input type="file" id="file" accept=".jpg, .svg"  onChange={fileName} className="title input-office"/><br /> 
        <button>ENVOYER ARTICLE</button>
    </form>

        

    </div> 
    )
}

export default BackOffice