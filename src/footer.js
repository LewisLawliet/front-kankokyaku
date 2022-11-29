import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

const Footer =()=>{
    useEffect(()=>{
        
    },[])
    let navigate = useNavigate();
    const handleSubmit=(event)=>{
        
        event.preventDefault();
        navigate("/apropos");
    }
    const handleSubmitMentions=(event)=>{
        
        event.preventDefault();
        navigate("/mentions-legales");
    }
    return(
        <div>
            <div className ="menuF">
				
            <ul className ="ulFooter">
                <li onClick={handleSubmit}>Apropos</li>
                <li onClick={handleSubmitMentions}>Mentions légales</li>
                <li><a href ="mailto:gaidjin.informe@gmail.com" target="_blank" 
                     className="contact"   rel="noopener noreferrer">Contact</a>
                </li> 
            </ul>
    </div>
        </div>
    )
}

export default Footer