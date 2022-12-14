import '../assets/css/Footer.css'

export default function Footer(){
    return(
        <footer>
            <div class="main-content">
                    <div class="left box">
                        <h2> Sobre nós</h2>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste facilis harum eos vel incidunt distinctio corrupti iure? Rem</p>
                        
                            <div class="social">
                                <a href="#"><span class="fab fa-facebook-f"></span></a>
                                <a href="#"><span class="fab fa-twitter"></span></a>
                                <a href="#"><span class="fab fa-instagram"></span></a>
                                <a href="#"><span class="fab fa-youtube"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="center box">
                        <h2>Endereço</h2>
                        <div class="content">
                                <div class="place">
                                    <span class="fas fa-map-marker"></span>
                                    <span class="text">Senac, Bonsucesso </span>
                                </div>
                    
                                <div class="phone">
                                    <span class="fas fas fa-phone-alt"></span>
                                    <span class="text">+55 21 9999-9999</span>
                                </div>
                    
                                <div class="email">
                                    <span class="fas fa-envelope"></span>
                                    <span class="text">exemplo@exemplo.com</span>
                                </div>
                        </div>
                    </div>
                    <div class="right box">
                        <h2>Contato</h2>
                        <div class="content">
                            <form action="#">
                                <div class="email">
                                    <div class="text">Email *</div>
                                        <input type="email" required></input>
                                </div>

                                <div class="msg">
                                    <div class="text">Mensagem *</div>
                                    <textarea rows="2" cols="25" required></textarea>
                                </div>
                                    
                                <div class="btn">
                                    <button type="submit">Enviar</button>
                                </div>

                            </form>
                        </div>
                    </div>
            </div>
                
                    <div class="bottom">
                        <div class="center">
                            <span class="far fa-copyright">2022 Todos os diteitos reservados</span>
                        </div>
                    </div>   
           
       
        </footer>

    )


    
}