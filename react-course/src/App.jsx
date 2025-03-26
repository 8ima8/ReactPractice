import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Post } from './components/Post'
import { UserCard } from './components/UserCard'


function App() {


  return (
    <>
      <p>Hola Mundo</p>
      <Post postNumber={1} />
      <Post postNumber={2}/>
      <UserCard 
        name='Felipe'
        amount={2000} 
        married={false} 
        array ={[22,44,6.6]} 
        address={{street: 'Los Pinos', houseNumber:120, city:'La Paz'}}  />
        <UserCard 
        name='Maria'
        amount={100000} 
        married={true} 
        array ={[90,95.5,80]} 
        address={{street: 'Obrajes', houseNumber:200, city:'Santa Cruz'}}  />
    </>
  )
}

export default App
