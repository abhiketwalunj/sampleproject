import React from 'react'
import "./Header.css"
import img1 from '../Images/home-page(4) (1)-28.jpeg'
import img4 from '../Images/home-page10.jpeg'
import img5 from '../Images/home-page11.jpeg'
import img6 from '../Images/home-page12.jpeg'
import img7 from '../Images/home-page13.jpeg'
import img8 from '../Images/home-page14.jpeg'
import img9 from '../Images/home-page15.jpeg'
import img10 from '../Images/home-page16.jpeg'
import Review from './Review'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <div>
        <body>
        <div className='Container'>
            <div className='headerimg'>
                <img src={img1} alt="" />
            </div>
            <div className='headername'>
                <h1>NAME</h1>
                <h4>Ratings</h4>
                <h4>Topics</h4>
                <h4>Politics</h4>
                <h4>2019 Elections</h4>
                <h4>Watch Video</h4>
                <h5>Login <FontAwesomeIcon icon={faUser} /> </h5>
            </div>
            <div className='searchbox'>
              <input type='text' placeholder='Search for music artists, politicians, brands and more'/>
              <button className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
            </div>
            <div className='cards'>
              <img src={img4} alt=''/>
              <img src={img5} alt=''/>
              <img src={img6} alt=''/>
            </div>
            <div className='cards1'>
            <img src={img7} alt=''/>
              <img src={img8} alt=''/>
              <img src={img9} alt=''/>
            </div>
            <div className='lastname'>
              <p>Meet your candidates</p>
              <p>Join trending debate</p>
              <p>Date a company</p>
            </div>
            <div className='name'>
              <p>TAKE ACTION</p>
            </div>
            <div className='name1'>
              <p>A community of more than five million. Over 900 election victories including every single Latina, African American,
                 and Asian American Democratic congresswoman currently serving in Congress. All with a single focus - progressive
                 change that matters</p>
            </div>
            <div className='name2'>Are you with us?</div>
            <div className='candidatespage'>
              <img src={img10} alt='' />
            </div>
        </div>
        
        </body>
        <Review />
      
    </div>
  )
}

export default Header
