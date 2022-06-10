import React,{useState} from "react"

const Counter=()=>{
//   let a = 10
   let [gold, setGold] = useState(0)
   
//    function setGold(gold){
//        ....
//    }
    //   function increseGold(){
            // setGold(gold+1)
    //   }
   
      return(
        <div>
            <h1> Gold is = {gold} </h1>
            <button onClick={()=>{setGold(gold+1)}}>Increment</button>
            <button onClick={()=>{setGold(gold-1)}}>Decrement</button>
            <button onClick={()=>{setGold(0)}}>Reset</button>
        </div>
      )

}

export default Counter