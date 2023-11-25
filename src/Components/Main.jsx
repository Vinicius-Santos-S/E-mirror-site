// eslint-disable-next-line no-unused-vars
import React from "react"
import Style from './Main.module.css'
import logo from '../assets/Logo.png'
import backgroundImg from '../assets/BackgroundImg'
import { Link } from "react-router-dom";
const Main = () => {
    const contents = [
        {
            img: logo,
            img2: "",
            title: "Bem-Vindo!",
            text: "texto1",
            link: "",
            imgBack: backgroundImg
        },
        {
            img: "",
            img2: "src/assets/phone.png",
            title: "Sobre nós",
            text: "Somos estudantes do ceap e com o nosso projeto temos o objetivo de mostrar o conceito de loja/provador virtual para o mundo",
            link: "",
            imgBack: "/E-mirror-site/assets/BackgroundImg2.jpg"

        },
        {
            img: "",
            img2: "",
            title: "Sobre o projeto",
            text: "Com a imagem da câmera do dispositivo, nosso algoritmo detecta o corpo humano e desenha a roupa desejada pelo usuário",
            link: "/Catalogo",
            imgBack: "/E-mirror-site/assets/ugabuga.png"
        }
    ]

    const createSections = (img, img2, title, text, link, imgBack) => {
        return (
            <div key={title} className={Style["section-div"]} style={{ backgroundImage: "url(" + imgBack + ")" }}>
                {img && (
                    <div className={Style["section-div-header"]}>
                        <img src={img} />
                        <h2>{title}</h2>
                    </div>
                )
                }
                {img2 &&
                    <div className={Style["section-div-aboutUs"]}>
                        <h2>{title}</h2>
                        <div></div>
                        <p>{text}</p>
                        <img src={img2} />
                    </div>
                }
                {link &&
                    <div className={Style["section-div-aboutProject"]}>
                        <h2>{title}</h2>
                        <div className={Style["bar"]}></div>
                        <p>{text}</p>
                        <a href="/Catalogo"></a>
                        <div className={Style["link-access-div"]}>
                            <Link to="/Catalogo" relative="path">
                                Acessar o catálogo!
                            </Link>
                        </div>
                    </div>
                }
            </div>
        )
    };

    return (
        <>
            <main className={Style["main-class"]}>
                {contents.map(content => createSections(content.img, content.img2, content.title, content.text, content.link, content.imgBack))}
            </main>
            <footer className={Style["footer-class"]}>
                <img src={logo} alt="" />
                <ul>
                    <h2>Contato</h2>
                    <li>santossilvavinicius0@gmail.com</li>
                    <li>erickcapassi5@gmail.com</li>
                </ul>
            </footer>
        </>
    )
}

export default Main