import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Animals from '../public/animals.json'
import Animal from './src/Animal'


export default function Home() {

  const animalMaker = p => <Animal type = {p.type} state = {p.state} img = {p.img} adoption_fee = {p.adoption_fee}/>
  const names = Animals.map(animalMaker)

  const chillAnimalsOnly = p => p.state = "chill"
  const chillAnimals = Animals.filter(chillAnimalsOnly)
  


  return (
    <html>
      <div>
        <h1>Animal Summary</h1>
      </div>
  
      <div>
        {chillAnimals.map(animalMaker)}
      </div>
    </html>
  )
}
