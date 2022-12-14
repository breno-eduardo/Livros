import '../assets/css/livro.css'

export default function Livro( ){
    return(
        <>
            <div className="Card-livro">
                <img src="https://http2.mlstatic.com/D_NQ_NP_791801-MLB52850552441_122022-O.webp" alt="" />
                <h3>Sherlock Holmes</h3>
                <p className="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className="btnValor">A PARTIR R$8,90</button>
            </div>

            <div className="Card-livro">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6Tv6k0sk8oyxiJaRNoFaY38fhVVbkQ00aA&usqp=CAU" alt="" />
                <h3>Dracula</h3>
                <p className="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className="btnValor">A PARTIR R$89,90</button>
            </div>

            <div className="Card-livro">
                <img src="https://i0.wp.com/guiadolivro.com/wp-content/uploads/2019/01/Star-Wars-Marcas-da-Guerra-Online-Gr%C3%A1tis.jpg" alt="" />
                <h3>Star Wars</h3>
                <p className="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className="btnValor">A PARTIR R$89,90</button>
            </div>

            <div className="Card-livro">
                <img src="https://recreio.uol.com.br/images/original/2020/04/09/livros-de-aventura-que-todo-fa-do-genero-deveria-conhecer-1221622.jpg" alt="" />
                <h3>Reino Belfront</h3>
                <p className="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className="btnValor">A PARTIR R$89,90</button>
            </div>

            <div className="Card-livro">
                <img src="https://m.media-amazon.com/images/I/81LRk6+p1HL.jpg" alt="" />
                <h3>A Garota do Lago</h3>
                <p className="description-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className="btnValor">A PARTIR R$75,90</button>
            </div>
        </>
    )
}