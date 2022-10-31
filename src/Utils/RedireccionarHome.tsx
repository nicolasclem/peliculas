
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';



const RedireccionarHome = () => {
    
    
    
    const navigate=useNavigate();
    const volver=()=>navigate('/');
    useEffect(()=>{
        const redirectTO =setInterval(()=>{
        volver()
        },2500);
        return ()=> clearInterval(redirectTO);
        })




    return (
        <>
        <h4>Pagina no encontrada....</h4>        
        </>
        ) 
}

export default RedireccionarHome