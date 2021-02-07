import React from "react"

export default class extends React.Component{
    render(){
        return (
            <>
                <img src="/static/devzamse.png" alt="devzamse" />
                <h1>Creado por devzamse</h1>
                <p>Curso de NextJS</p>

                <style jsx>{`

                    body{
                        align:center
                    }

                    h1{
                        color: #f6f6f6
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



            </>
        )
    }
}