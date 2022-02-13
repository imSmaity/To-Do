import React, { useContext } from 'react'
import { listContext } from '../App'

export default function List() {
    const {list}=useContext(listContext)

    function _delete(index){
        list.splice(index,1)
        console.log(list)
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
