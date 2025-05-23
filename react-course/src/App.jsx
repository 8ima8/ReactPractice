import { useState , useEffect} from 'react'

import './App.css'
import React from 'react'
import { Post } from './components/Post'
import { UserCard } from './components/UserCard'
import { Button } from './components/Button'
import { PostApi } from './components/PostApi'
import { UserArray } from './components/UserArray'
import {  UseStateHook } from './components/UseStateHook'
import { UseEffectHooks } from './components/UseEffectHook'


function App() {



  return (
    <>
      <Button text='Click me'/>
      <Button text='Pay'/>
      <Button text='click' name='Pepe'/>
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
        <PostApi/>
        <UserArray/>
        <UseStateHook/>
        <UseEffectHooks/>
    </>
  )
}

export default App
