import React, { useContext } from 'react'
import  './Navbar.css'
import logo from '../../assets/logo.png'
import icon_arrow from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandle = (event)=>{
    switch (event.target.value){
      case "usd": {
        setCurrency({name:"usd", symbol: "$"});
        break
      }
      case "eur": {
        setCurrency({name:"eur", symbol: "€"});
        break
      }
        case "ngn": {
        setCurrency({name:"ngn", symbol: "₦"});
        break
      }
      default : {
        setCurrency({name:"usd", symbol: "$"});
        break
      }
    }
  }
  return (
    <div className='navbar'>
      <Link to={''}>
        <img src={logo} alt=''/>
        </Link>
        <ul>
            <Link to={'/'}><li>Home</li></Link>
            
            <Link to={'/Pricing'}><li>Pricing</li></Link>
            <Link to={'/blog'}><li>Blog</li></Link>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandle}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="ngn">NGN</option>
            </select>
          <Link to="/signup" className="signup-btn">Sign Up</Link>

        </div>
    </div>
  )
}

export default Navbar