import React from 'react'
import '../App.css'
import { Button } from './Button'
import'./HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <img className="hero-img" src={require('../images/mtk-spotlight [22].jpg').default} alt="" style={{height:500,width: '100%'}}/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you looking for</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn---large'>GET STARTED</Button>

                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn---large'>
                    WATCH TRAILER <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
