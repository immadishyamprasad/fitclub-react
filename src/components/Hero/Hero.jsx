
import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import Calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className="Hero">
        <div className="left-h">
            <Header/>
            {/*hero  add*/}
            <div className="the-best-add">
                <div></div>
                <span>The Best Fitness club in the town</span>
            </div>
            {/*hero heading*/}
            <div className="hero-heading">
                <div>
                    <span className='stroke-text'>Shape</span>
                    <span> Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>
            </div>
            {/* hero figures */}
            <div className="figures">
                <div>
                    <span>+ 140</span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                    <span>+ 978</span>
                    <span>Members Joined</span>
                </div>
                <div>
                    <span>+ 50</span>
                    <span>Fitness Programs</span>
                </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="right-h">
            <button className="btn">Join Now</button>
            <div className="heart-rate">
                <img src={heart} alt="" className="heart" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>

            <img src={hero_image} alt="" className="hero-image" />
            <img src={hero_image_back} alt="" className="hero-image-back" />
        </div>
    </div>
  )
}

export default Hero