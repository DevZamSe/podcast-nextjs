import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <>
        <h1>Hola Mundo!</h1>
        <p>Bienvenido al curso de Next.js</p>
        <img src="https://lh3.googleusercontent.com/4M4aeaq4LQwNoL7BkfnGD_BDQCUuVA2JWYXqEtuRbTnMK1kVgJcbE1KcPjHo-fDPHg" alt="Torre Eiffel" />
        <img src="/static/devzamse.png" alt="Devzamse" />

        <style jsx>{`
            h1{
                color: red
            }

            :golbal(div p){
                color: blue
            }

            img{
                max-width: 50%;
                diplay: block;
                margin: 0 auto;
            }

        `}</style>

        <style>{`
            body{
                background: yellow
            }
        `}</style>
      
      </>
    )
  }
}