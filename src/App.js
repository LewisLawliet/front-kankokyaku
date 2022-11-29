import { useNavigate  } from 'react-router-dom';
import Home from './home';
import {Route, Routes} from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apropos from './apropos';
import Mentions from './mentions-legales';
import ArticlesLieux from './articlesLieux';
import BackOffice from './backOffice';
import MyArticles from './myArticles';
import MyQuizzes from './MyQuizzes';


const App=()=> {
  
    return (
        
         
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/apropos" element={<Apropos />}/>
            <Route path="/mentions-legales" element={<Mentions/>}/>
            <Route path="/lieu" element={<ArticlesLieux/>}/>
            <Route path="/backoffice" element={<BackOffice/>}/>
            <Route path="/myArticles" element={<MyArticles/>}/>
            <Route path="/myQuizzes" element={<MyQuizzes/>}/>
          </Routes>
        
        
    );
  }

  export default App