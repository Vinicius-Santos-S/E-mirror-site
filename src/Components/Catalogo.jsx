import React, { useRef, useState } from 'react'
import Camera from './Camera/Camera'
import Database from './Database.json'
import Style from './Catalogo.module.css'


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