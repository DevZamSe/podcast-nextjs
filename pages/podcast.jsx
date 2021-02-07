import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

import Layout from '../components/Layout'
import Player from '../components/Player'

export default class extends React.Component{

    static async getInitialProps({query}) {
        let id = query.id
        // const fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
        const fetchClip = await fetch(`https://api.audioboom.com/audio_clips/4950586.mp3`)
        const dataClip = await fetchClip.json()
        const clip = dataClip.body.audio_clip
        return {clip}
    }

    render() {

        const { clip } = this.props

        return <Layout title={clip.title}>
            <Player clip={ clip } />
        </Layout>
    }
}