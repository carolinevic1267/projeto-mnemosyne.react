import { useEffect, useState } from "react"
import Footer from "../../src/components/footer/footer"
import Header from "../../src/components/header/header"

import { Link } from "react-router-dom"

import '../home/home.css'

const Home = () => {

    const [memorias, setmemorias] = useState([]);
        
    useEffect(() => {
        const carregarMemoria = async () => {
            try {
                const response = await fetch("http://localhost:3000/memorias");
                const dados = await response.json();
                console.log("memórias carregadas", dados);
                setmemorias(dados)
            } catch (error) {
                console.error("Erro ao carregar memórias", error);
            }
        }
        carregarMemoria();
    }, [])
    
    return (
        <>
    <Header />
    <main className="app-main">
        <h1>Meus momentos</h1>
        <div className="cards-container">
            {memorias.map((memoria) => (
                <div className="card">
                    <div className="imagem"
                        style={{
                            backgroundImage: memoria.imagens[0] ? `url(${memoria.imagens[0]})` : "none",
                        }}
                    ></div>
                    <h2>{memoria.titulo}</h2>
                    <p>{memoria.descticao}</p>
                </div>

            ))}
            <a href="#" className="card-link">
            </a>
            <div className="card">
                <Link to={`/criar`}>
                    <div className="add"></div>
                    <h2>Adicionar memória</h2>
                    <p>Clique aqui para adicionar mais memórias.</p>
                </Link>

            </div>
        </div>
    </main>
    <Footer />
</>

    )
}

export default Home;