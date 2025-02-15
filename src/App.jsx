import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
    <>
      <div className='App'>
        <h1>Puppy Pals</h1>
        { 
          puppies.map((puppy) => {
            function handleClick() {
              setFeatPupId(puppy.id)
            }
          return <p onClick={handleClick} key={puppy.id}>{puppy.name}</p>
          })
        }
        {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
    </>
  )
}

export default App
