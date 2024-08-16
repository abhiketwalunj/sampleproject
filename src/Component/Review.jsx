import React from 'react'
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import R1 from '../Images/home-page(4) (1)-16.jpeg'
import R2 from '../Images/home-page(4) (1)-15.jpeg'
import R3 from '../Images/home-page(4) (1)-19.jpeg'
import R4 from '../Images/home-page(4) (1)-17.jpeg'
import card1 from '../Images/home-page(4) (1)-59.jpeg'
import R5 from '../Images/home-page(4) (1)-16.jpeg'
import R6 from '../Images/home-page(4) (1)-15.jpeg'
import R7 from '../Images/home-page(4) (1)-19.jpeg'
import R8 from '../Images/home-page(4) (1)-17.jpeg'
import star1 from '../Images/home-page(4) (1)-154.jpeg'
import i1 from '../Images/lastpg.jpeg'
import f1 from '../Images/home-page(4) (1)-364.jpeg'

const Review = () => {
  const images = Array(18).fill(star1);

  const columns = [
    { title: 'Top 5 public figures', images: images.slice(0, 6) },
    { title: 'Top 5 public figures', images: images.slice(6, 12) },
    { title: 'Top 5 public figures', images: images.slice(12, 18) }
  ];
  return (
    <div className='body'>        
        <div className='review2'>
      <p>Your stories. Behind every review is an experience that matters</p>
      </div>
      <div className='review3'>
        <p>Trustpilot is the world's most powerful review platform. 
          We aim to continually improve, and every heart-felt review helps 
          us provide ever-better experiences for both people and companies.</p>
      </div>
      <div className='reviewimg1'>
      <img src={R1} alt=''/>
      <img src={R2} alt=''/>
      <img src={R3} alt=''/>
      <img src={R4} alt=''/>
      </div>
      <div className='reviewcard'>
        <img src={card1} alt=''/>
      </div>
      <div className='reviewimg2'>
      <img src={R5} alt=''/>
      <img src={R6} alt=''/>
      <img src={R7} alt=''/>
      <img src={R8} alt=''/>
      </div>
      <div className='addreview'>
        <h5>Read reviews. Write reviews</h5>
      </div>
      <div className='btn'>
      <button><FontAwesomeIcon icon={faPlus} /> Add a Review</button>
      </div>
      <div className='rating'>
        <p>YouGov Ratings</p>
      </div>
      <div className='ratingqry'>
        <p>Based on millions of responses and growing daily, YouGov Ratings 
          continually measures the popularity of everything from pop stars to
           politicians, sports teams to snack foods, and almost anything in between.
            <u>Find out more</u></p>
      </div>
      <div className='politicsbth'>
      <button>Politics <FontAwesomeIcon icon={faCaretDown} /></button>
      </div>
      <div className='pltaffair'>
        <p>Politics & current affairs</p>
        <p>
          <a>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ALL</a></p>
        
      </div>
      <div className='star-rating-container'>
      <div className='star-grid'>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className='star-column'>
            <h3>{column.title}</h3>
            <div className='star-images'>
              {column.images.map((src, imgIndex) => (
                <img key={imgIndex} src={src} alt={`Star ${colIndex * 6 + imgIndex + 1}`} />
              ))}
            </div>
            <div className='column-button'>
                <button>view full list (339) </button>
              </div>
          </div>
        ))}
      </div>
    </div>
    <div className='ignitechg'>
      <img src={i1} alt=''/>
    </div>
    <div className='footer'>
    <img src={f1} alt=''/>
    </div>
    </div>
  )
}

export default Review
