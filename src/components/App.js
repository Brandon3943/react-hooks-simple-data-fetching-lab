import React, { useEffect, useState } from 'react'

function App() {
    const [dogImg, setDogImg] = useState("")
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then(resp => resp.json())
          .then(data => setDogImg(data.message))
    }, [])

    if(!dogImg) {
      return <p>Loading Image...</p>
    }

  return (
    <div>
        <img src={dogImg} alt="A Random Dog" />
    </div>
  )
}

export default App
