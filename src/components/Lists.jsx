import React, { useContext } from 'react'
import { listContext } from '../App'

export default function Lists() {
    const {list,setList}=useContext(listContext)
    

    function _delete(index){
        let updateList=list
        updateList.splice(index,1)
        setList([...updateList])
        
    }
    
  return (
    <div>
    {
        list.length!==0?
        list.map((val,index)=>{
            return(
                <div key={index} style={{marginTop:'1vh'}}>
                    {val}
                    <button type='button' style={{marginLeft:'1vh'}} >edit</button>
                    <button type='button' onClick={()=>_delete(index)}>delete</button>
                </div>
            )
        }):
        <div>List is empty! yet</div>
    }
    </div>
  )
}
