import React from 'react'
import Error from 'next/error'
import 'isomorphic-fetch'

import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'

export default class extends React.Component{
    
    static async getInitialProps({ res }) {

        try {
            const req = await fetch('https://api.audioboom.com/channels/recommended')
            const { body : channels } = await req.json() 
            return { channels, statusCode: 200 }
        } catch(e) {
            res.statusCode = 503
            return { channels: null, statusCode: 503 }
        }

    }
    
    render(){

        const { channels, statusCode } = this.props


        if( statusCode !== 200){
            return <Error statusCode= { statusCode } />
        }
        return <Layout title="Podcasts App">
            <ChannelGrid channels= { channels } />
        </Layout>
    }
}