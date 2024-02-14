import { useEffect, useState } from 'react';
import './App.css';
import image2 from './images/WhatsApp Image 2024-02-14 at 22.20.41_1e7b3e87.jpg'
import image1 from './images/WhatsApp Image 2024-02-14 at 22.44.28_04953a1f.jpg'
import image3 from './images/WhatsApp Image 2024-02-14 at 22.48.15_d9a8a3d2.jpg'
import image4 from './images/WhatsApp Image 2024-02-14 at 22.50.25_c6e99d28.jpg'
import image5 from './images/WhatsApp Image 2024-02-14 at 22.50.58_875dfe1e.jpg'
import image6 from './images/WhatsApp Image 2024-02-14 at 22.51.31_5dc2c1f9.jpg'
import image7 from './images/WhatsApp Image 2024-02-14 at 22.54.54_48d96909.jpg'
import styled from 'styled-components'

function App() {
  const [answer,setAnswer] = useState(false)
  const [size,setSize] = useState(1)
  const [loop,setLoop] = useState(0)
  const array = ["No","are you sure","think again","don't lie","check once","please🥹"]
  const images = [image2,image3,image4,image5,image6,image7]

  const handleNo = ()=>{
    setAnswer(false);
    setSize(size+1)
    if(loop===5){
      setLoop(0)
    }
    else{
      setLoop(loop +1)
    }
    console.log(loop)
  }

  const handleYes = ()=>{
    setAnswer(true)
  }

  return(
    <Container>
      {answer?(
        <div className="image">
          <img src={image1} alt="" />
          <h1>Love Uuuuuuuuuuu 😍😘🎊</h1>
        </div>
      ):(
        <div className="div">
          <img src={images[loop]} alt="" />
          <h1>Will You 🐝 my Valentine ? 👉👈</h1>
          <div className="buton">
          <button style={{padding:`${size*4}px`}} className='yes' onClick={handleYes}>Yes</button>
          <button className='no' onClick={handleNo}>{array[loop]}</button>
          </div>
        </div>
      )}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .div{
    display: flex;
    flex-direction: column;
    align-items: center;
    .buton{
      button{
        padding:0.4rem 1.5rem;
        margin: 1rem;
      }
      .yes{
        background-color:green;
        color: white;
      }
      .no{
        background-color: red;
        color: white;
      }
    }
  }
`
export default App;
