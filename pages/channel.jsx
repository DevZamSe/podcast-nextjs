import React from 'react'

import Error from './_error'
import Layout from '../components/Layout'
import PodcastList from '../components/PodcastList'
import Series from '../components/Series'

export default class extends React.Component{

    constructor(props){
        super(props)
        this.state = { openPodcast: null }
    }

    static async getInitialProps({query}) {

        try{
            let idChannel = query.id

            const [reqChannel, reqAudios, reqSeries] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
            ])

            if( reqChannel.status >= 400 ) {
                return {channel: null, audioClips: null, series: null, statusCode: reqChannel.status}                
            }

            const dataChannel = await reqChannel.json()
            const channel = dataChannel.body.channel
            
            const dataAudios = await reqAudios.json()        
            const audioClips = dataAudios.body.audio_clips

            const dataSeries = await reqSeries.json()
            const series = dataSeries.body.channels

            return { channel, audioClips, series, statusCode:200 }
        } catch(e){
            return {channel: null, audioClips: null, series: null, statusCode: 503}
        }
    
    }

    openPodcast = (event, podcast) => {
        event.preventDefault()
        this.setState({
            openPodcast: podcast
        })
    }

    render() {

        const { channel, audioClips, series, statusCode } = this.props
        const { openPodcast } = this.state

        if( statusCode !== 200 ){
            return <Error statusCode = {statusCode} />
        }

        return <Layout title={channel.title}>
            <h1>{channel.title}</h1>

            { openPodcast && <div>Hay un podcast abierto</div> }

            <Series series= {series} />

            <PodcastList audioClips={ audioClips } />

        </Layout>
    }
}