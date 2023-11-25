import React, { useRef, useState } from 'react'
import Camera from './Camera/Camera'
// import Database from './Database.json'
import Style from './Catalogo.module.css'
import Touca from './Camera/Roupas/Chapeus/Touca.png'
import Cowboy from './Camera/Roupas/Chapeus/Cowboy.png'
import Fedora from './Camera/Roupas/Chapeus/Fedora.png'
import Coelinho from './Camera/Roupas/Chapeus/Coelinho.png'

import OculosVermelho from './Camera/Roupas/Oculos/oculosVermelho.png'
import OculosAzul from './Camera/Roupas/Oculos/oculosAzul.png'
import OculosBranco from './Camera/Roupas/Oculos/oculosBranco.png'

import CamisaAzul from './Camera/Roupas/Camisas/CamisaAzul.png'
import CamisaBranca from './Camera/Roupas/Camisas/CamisaBranca.png'
import CamisaPreta from './Camera/Roupas/Camisas/CamisaPreta.png'

import MoletomBranco from './Camera/Roupas/Moletons/MoletomBranco.png'
import MoletomLaranjaVerde from './Camera/Roupas/Moletons/MoletomLaranjaVerde.png'
import MoletomPreto from './Camera/Roupas/Moletons/MoletomPreto.png'

const Database = {
  "Chapeus" : [
     {
        "parte": "Chapeu",
        "img" : Touca,
        "SizeAdjustValue" : 100,
        "nome" : "Touca vermelha",
        "modelo" : "Touca normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     },
     {
        "parte": "Chapeu",
        "img" : Cowboy,
        "SizeAdjustValue" : 150,
        "nome" : "Chapeu de Cowboy",
        "modelo" : "Chapeu normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     },
     {
        "parte": "Chapeu",
        "img" : Coelinho,
        "SizeAdjustValue" : 100,
        "nome" : "Tiara de Coelinho",
        "modelo" : "Tiara normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     },
     {
        "parte": "Chapeu",
        "img" : Fedora,
        "SizeAdjustValue" : 200,
        "nome" : "Fedora Preta",
        "modelo" : "Fedora normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     }
  ],
  "Oculos" : [
     {
        "parte": "Oculos",
        "img" : OculosVermelho,
        "nome" : "Oculos Vermelho",
        "modelo" : "Oculos normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     },
     {
        "parte": "Oculos",
        "img" : OculosBranco,
        "nome" : "Oculos de armação fina",
        "modelo" : "Oculos normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     },
     {
        "parte": "Oculos",
        "img" : OculosAzul,
        "nome" : "Oculos Azul",
        "modelo" : "Oculos normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     }

  ],
  "Camisas" : [
     {
        "parte": "Camisa",
        "img" : CamisaPreta,
        "nome" : "Camiseta Preto",
        "modelo" : "Camiseta Normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     },
     {
        "parte": "Camisa",
        "img" : CamisaAzul,
        "nome" : "Camiseta Azul",
        "modelo" : "Camiseta Normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     },
     {
        "parte": "Camisa",
        "img" : CamisaBranca,
        "nome" : "Camiseta Branca",
        "modelo" : "Camiseta Normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     }
     
  ],
  "Moletons" : [
     {
        "parte": "Moletom",
        "img" : MoletomBranco,
        "nome" : "Moletom Branco",
        "modelo" : "Moletom Normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     },
     {
        "parte": "Moletom",
        "img" : MoletomLaranjaVerde,
        "nome" : "Moletom Laranja",
        "modelo" : "Moletom Normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     },
     {
        "parte": "Moletom",
        "img" : MoletomPreto,
        "nome" : "Moletom Preto",
        "modelo" : "Moletom Normal",
        "descricao" : "Descrição...",
        "preco" : "R$ --,--"
     }
  ]
}

const Catalogo = () => {
  const bodyUsingClothes = useRef({
    Chapeu: "",
    Oculos: "",
    Camisa: "",
    Moletom: ""
  })
  const [update, setUpdate] = useState(false)

  const [states, setStates] = useState({
    Chapeu: false,
    Oculos: false,
    Camisa: false,
    Moletom: false
  })

  return (
    <>
      <h1>Catálogo</h1>
      <section className={Style['catalog-class']}>
        <div className={Style['camera-clothes-container']}>
          <Camera item={bodyUsingClothes} />
          <div className={Style['active-clothes-container']}>
            <div className={Style['active-chapeu']}>
              <img onClick={() => { bodyUsingClothes.current.Chapeu = "", setUpdate(!update) }} src={bodyUsingClothes.current.Chapeu.img} />
            </div>
            <div className={Style['active-Oculos']}>
              <img onClick={() => { bodyUsingClothes.current.Oculos = "", setUpdate(!update) }} src={bodyUsingClothes.current.Oculos.img} />
            </div>
            <div className={Style['active-torso']}>
              <img onClick={() => { bodyUsingClothes.current.Moletom = "", bodyUsingClothes.current.Camisa = "", setUpdate(!update) }} src={bodyUsingClothes.current.Camisa.img || bodyUsingClothes.current.Moletom.img} />
            </div>
            <button onClick={() => {
              bodyUsingClothes.current = {
                Chapeu: "",
                Oculos: "",
                Camisa: "",
                Moletom: ""
              }
              setUpdate(!update)
            }
            }>Remover todas as roupas</button>
          </div>
        </div>
        <div className={Style['catalog-container-class']}>
          <div className={Style['buttons']}>
            <div className={Style['buttons-div']} onClick={() => !states.Chapeu && setStates(states => ({
              ...states,
              Chapeu: !states.Chapeu,
              Oculos: false,
              Camisa: false,
              Moletom: false,
            }))}>
              <h2>Chapeu</h2>
            </div>
            <div className={Style['buttons-div']} onClick={() => !states.Oculos && setStates(states => ({
              ...states,
              Chapeu: false,
              Oculos: !states.Oculos,
              Camisa: false,
              Moletom: false,
            }))}>
              <h2>Oculos</h2>
            </div>
            <div className={Style['buttons-div']} onClick={() => !states.Camisa && setStates(states => ({
              ...states,
              Chapeu: false,
              Oculos: false,
              Camisa: !states.Camisa,
              Moletom: false,
            }))}>
              <h2>Camisa</h2>
            </div>
            <div className={Style['buttons-div']} onClick={() => !states.Moletom && setStates(states => ({
              ...states,
              Chapeu: false,
              Oculos: false,
              Camisa: false,
              Moletom: !states.Moletom,
            }))} >
              <h2>Moletom</h2>
            </div>
          </div>
            <div className={Style[`catalog-menu-${!states.Chapeu ? "fechado" : "aberto"}`]}>
              <h2>Chapeus</h2>
              <div className={Style['catalog-itens']}>
                {Database.Chapeus.map((dado, key) =>
                  <div key={key} className={Style['item-class']} onClick={() => {
                    bodyUsingClothes.current = {
                      ...bodyUsingClothes.current,
                      [dado.parte]: dado
                    }
                    setUpdate(!update)
                  }
                  }>
                    <img src={dado.img} alt={"imagem " + dado.nome} />
                    <div className={Style['item-info']}>
                      <h2>{dado.nome}</h2>
                      <p>{dado.modelo}</p>
                      <p>{dado.descricao}</p>
                      <h3>{dado.preco}</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={Style[`catalog-menu-${!states.Oculos ? "fechado" : "aberto"}`]}>          
              <h2>Oculos</h2>
              <div className={Style['catalog-itens']}>
                {Database.Oculos.map((dado, key) =>
                  <div key={key} className={Style['item-class']} onClick={() => {
                    bodyUsingClothes.current = {
                      ...bodyUsingClothes.current,
                      [dado.parte]: dado
                    }
                    setUpdate(!update)
                  }
                  }>
                    <img src={dado.img} alt={"imagem " + dado.nome} />
                    <div className={Style['item-info']}>
                      <h2>{dado.nome}</h2>
                      <p>{dado.modelo}</p>
                      <p>{dado.descricao}</p>
                      <h3>{dado.preco}</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={Style[`catalog-menu-${!states.Camisa ? "fechado" : "aberto"}`]}>
              <h2>Camisas</h2>
              <div className={Style['catalog-itens']}>
                {Database.Camisas.map((dado, key) =>
                  <div key={key} className={Style['item-class']} onClick={() => {
                    bodyUsingClothes.current = {
                      ...bodyUsingClothes.current,
                      [dado.parte]: dado, ["Moletom"]: ""
                    }
                    setUpdate(!update)

                  }
                  }>
                    <img src={dado.img} alt={"imagem " + dado.nome} />
                    <div className={Style['item-info']}>
                      <h2>{dado.nome}</h2>
                      <p>{dado.modelo}</p>
                      <p>{dado.descricao}</p>
                      <h3>{dado.preco}</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={Style[`catalog-menu-${!states.Moletom ? "fechado" : "aberto"}`]}>
              <h2>Moletons</h2>
              <div className={Style['catalog-itens']}>
                {Database.Moletons.map((dado, key) =>
                  <div key={key} className={Style['item-class']} onClick={() => {
                    bodyUsingClothes.current = {
                      ...bodyUsingClothes.current,
                      [dado.parte]: dado, ["Camisa"]: ""
                    }
                    setUpdate(!update)
                  }
                  }>
                    <img src={dado.img} alt={"imagem " + dado.nome} />
                    <div className={Style['item-info']}>
                      <h2>{dado.nome}</h2>
                      <p>{dado.modelo}</p>
                      <p>{dado.descricao}</p>
                      <h3>{dado.preco}</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Catalogo