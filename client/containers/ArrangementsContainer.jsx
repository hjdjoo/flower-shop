import React from 'react';
import Arrangement from '../components/Arrangement.jsx';



const ArrangementsContainer = (props) => {
  // create array of image divs to render.
  const images = [];
  const arrangementInfo = [
    {
      name: 'Summer Vibes',
      price: 120,
      src: '../docs/assets/images/1.jpg'
    },
    {
      name: 'Garden View',
      price: 150,
      src: '../docs/assets/images/2.jpg'
    },
    {
      name: 'Peonies in Pink',
      price: 150,
      src: '../docs/assets/images/3.jpg'
    },
    {
      name: 'Celebration',
      price: 105,
      src: '../docs/assets/images/4.jpg'
    },
    {
      name: 'Winter Dreams',
      price: 200,
      src: '../docs/assets/images/5.jpg'
    },
    {
      name: 'Snow White',
      price: 175,
      src: '../docs/assets/images/6.jpg'
    }
  ]
  // using a for loop, let's load up 6 images from our docs.
  // we'll make <Arrangement/> components, and pass in the src of each as the image directory, appending the i+1 to the end of the directory.
  for (let i = 0; i < 6; i++) {
    // const source = arrangementInfo[i].src
    // console.log(source)
    images.push(<Arrangement src={require(`../docs/assets/images/${i + 1}.jpg`)} className='image' id={`img${i + 1}`} text={arrangementInfo[i].name} price={arrangementInfo[i].price} onClick={props.onClick} />)
  }
  return (
    <div className='arrangementsContainer'>
      {images}
    </div>
  )
}


export default ArrangementsContainer;