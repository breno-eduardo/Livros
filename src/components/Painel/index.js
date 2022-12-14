import '../assets/css/Header.css'
import { Link } from "react-router-dom";
import '../assets/css/Footer.css'
import Footer from '../Footer'


export default function Painel(){
    return(
        <>
            <nav id="menu-h">
                <ul>
                    <li><a href='#'>CONSULTAR(GET)</a></li>  
                    <li><a href='#'>CADASTRAR(POST)</a></li>
                    <li><a href='#'>DELETAR(DELETE)</a></li>
                    <li><a href='#'>UPDATE(PUT)</a></li>
                </ul>
                <Footer/>
                
                <div className="btnEntrar">
                    <Link to="/">Sair</Link>
                </div>
            </nav>
        </>
    )   
}