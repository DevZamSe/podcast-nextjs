import React from 'react'
import Link from 'next/link'

export default class Series extends React.Component{
    render() {

        const { series } = this.props

        return <>
            { series.length > 0 && 
                <>
                    <h2>Series</h2>
                    <div className="series">
                        { series.map((serie) => (
                            <Link href={`/channel?id=${serie.id}`} prefetch>
                                    <a className="channel">
                                        <img src={serie.urls.logo_image.original} alt="image" />
                                        <h2>{serie.title}</h2>
                                    </a>
                            </Link>
                        )) }
                    </div>
                </> 
            }
            
            <style jsx>{`
                .series{
                    display: grid;
                    grid-gap: 15px;
                    padding: 15px;
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                }

                .banner {
                    width: 100%;
                    padding-bottom: 25%;
                    background-position: 50% 50%;
                    background-size: cover;
                    background-color: #aaa;
                }

                .channels {
                    display: grid;
                    grid-gap: 15px;
                    padding: 15px;
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                }
                a.channel {
                    display: block;
                    margin-bottom: 0.5em;
                    color: #333;
                    text-decoration: none;
                }
                .channel img {
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                    width: 100%;
                }
                h2 {
                    padding: 5px;
                    font-size: 0.9em;
                    font-weight: 600;
                    margin: 0;
                    text-align: center;
                }
            `}</style>

        </>
    }
}