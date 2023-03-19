import React from 'react'
import Navbar from '../Navbar/Navbar'
import Users from '../User/Users'
import './home.css'


const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='Home'>
        <div className="homeLorem">
            <h1>Welcome to react</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi perspiciatis facilis optio quae, labore officiis vitae consectetur! Molestiae nam deserunt accusamus obcaecati numquam reprehenderit, repudiandae culpa quas quasi corrupti?             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, accusamus ducimus quia illo explicabo labore repellendus numquam mollitia adipisci perferendis ipsa a nemo sapiente temporibus perspiciatis excepturi, odio harum dolores!</p>
            <button>Explore More!!!</button>
        </div>
    </div>
    </>
  )
}

export default Home