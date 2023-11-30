import React from "react"
import {Link } from 'react-router-dom'
import { Outlet } from "react-router-dom"
import MoonLight from "./components/Moonlight.jsx"
import Instagram from "./components/Instagram.jsx"
import {useState, useRef} from 'react'
import data from "./data.js"
import CakeFairy from "./components/CakeFairy.jsx"


 
export default function Hero(props) {   
    
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    let intervalRef = useRef(null)
    const styles = props.moody ? {background: "#040303", color: "#9cfffa"} :  {background: ""}
   
    
  
    
const shuffle = data.map(meme => {
    return <CakeFairy
            key={meme.id} 
            coverImg={meme.image}
            name={meme.title}
            price={meme.price}
            location={meme.location}
            />
     })
   

    function handleStart() {
       
        setStartTime(Date.now());
        setNow(Date.now());
       
        clearInterval(intervalRef.current) 
        intervalRef.current = setInterval(()=> {
          setNow(Date.now())
        }, 10)
       }
        function handleStop() {
           clearInterval(intervalRef.current)
        }
        let completeSeconds = 0
        if (startTime != null && now != null) {
           completeSeconds = (now - startTime)/ 1000 
        }
         
    
    return(
        <div style = {styles}>
            <header>
                    <nav></nav>
                    <MoonLight toggle={props.resolver} mode={props.moody}/>
                    <h1>The Cake Fairy Treats</h1>   
            </header>
           
            <div className="container" style ={props.moody ? {background: "#040303", color: "#9cfffa"} :  {background: ""}} >
                <h1>Introducing <br/> The Cake Fairy </h1>
                <h3>Having the best pastries for your events is our priority</h3>
                <img className="hero" src="./images/hero.png"/>
                <h3 className="word">When it comes to deserts, cake probably "takes the trophy",<br/> for being the champion
                    of sweetness and goodness. A chocolate cake should be easy and fun to make at home with friends, family, or even 
                    your children. It could be a perfect cake for a birthday party, friends to come over, or a Thanksgiving and Christmas party dessert.
                    The decadent dessert is great for chocolate lovers and will hit at your next party. Cake, as we think of it is generally round, frosted,
                     and serves to celebrate something in our lives. This is true in different cultures as well.
                     <strong>I love it; you love it; everyone loves it!</strong>
                </h3>
            </div>
            <div  className="wrap-paparazii">{shuffle}</div>
        <div className="stopTimer">
            <h2 className="bake-head">Baking Timer</h2>
            <h4>Just to remind you that time is the most valueable asset. Evrey successful person has got the same amount
                of time as everyone else.
            </h4>
            <h2>Time passed: {completeSeconds.toFixed(3)}</h2>
            <div className="button-stoop">
                <button className="stoop" onClick={handleStart}>Start</button>
                <button className="stoop" onClick={handleStop}>Stop</button>
            </div> 
        </div>
        <div className="baker">
            <h3>Meet our tremendous Baker</h3>
            <h4>Miss SANDRA SOMTOCHUWKU IGWEGBE fondly known as SANDIQWIN.</h4>
            <img className="sandiqwin"src="./images/sandiqwin.jpg"/>
            <h5>She is a graduate of Madonna University Elele, a Medical Scientist and a renowed bakery. She's the brain behind <b>the cake fairy treat</b>. She hails from Anambra State, Nigeria 
            currently residing in Lagos. you can follow the bakers personal<a href="https://instagram.com/sandiqwenn?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><b className="bold"> instagram</b></a></h5>
        </div>
     <footer className="footer" style ={styles}>
         <div >
             <a href="https://instagram.com/thecakefairy_treats?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
             <h2>Follow us on!</h2>
                <Instagram />
                <h4 className="instagram">Instagram</h4> 
            </a> 
            <nav>
                <Link to='terms'><h4>Terms of Use</h4></Link>
                <Outlet/>
                <Link><h4>Privacy Policy</h4></Link>
                <Link><h4>Cookie Policy</h4></Link>
                <Link><h4>Web Accessiblity</h4></Link>
            </nav>
        </div>
    </footer>
</div>
    )
}