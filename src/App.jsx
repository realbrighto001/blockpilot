import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'
import Pricing from './pages/pricing/Pricing'
import Blog from './pages/blog/Blog'
import BlogDetail from './pages/blog/BlogDetail'
import SignUp from './pages/Signup/SignUp'
import Login from './pages/Signup/login'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/coin/:coinId' element={<Coin/>}/>
         <Route path="/pricing" element={<Pricing />} />
         <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App