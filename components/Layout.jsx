import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress'
import { Router } from 'next/router'

Router.onRouteChangeStart = (url) =>{
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default class Layout extends React.Component{
    render() {

        const { children, title } = this.props

        return <>

            <Head>
                <title>{ title }</title>
            </Head>

            <header>
                <Link href="/">
                    <a>
                        Podcasts
                    </a>
                </Link>
            </header>

            { children }

            <style jsx>{`
                header{
                    color: #fff;
                    background: #8756ca;
                    padding: 15px;
                    text-align: center;
                }

                header a{
                    color: #fff;
                    text-decoration: none;
                }

            `}</style>

            <style jsx global>{`
                body{
                    margin: 0;
                    font-family: system-ui;
                    background: #f6f6f6;
                }
            `}</style>
        </>
    }
}