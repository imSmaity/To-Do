import React, { useContext, useState } from 'react'
import { listContext } from '../App'
import Lists from '../components/Lists'

const style={
  width:'50vh',
  padding:'1vh'
}
export default function Home() {
  const [currentText,setCurrentText]=useState("")
  const {list,setList}=useContext(listContext)

  function handleInput(e){
    setCurrentText(e.target.value)
  }
  function addToList(){
    if(currentText!==""){
      setList([...list,currentText])
      setCurrentText("") 
    }
    else{
      alert("Empty!")
    }
  }

  return (
    <div>
      <input type={'text'} placeholder={"Type here"} value={currentText} onChange={(e)=>handleInput(e)} style={style}/>
      <button type='button' style={{padding:'1vh'}} onClick={addToList}>Add</button>
      <Lists/>
    </div>
  )
}
