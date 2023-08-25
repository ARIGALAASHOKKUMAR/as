import React,{useEffect, useState} from 'react'

const App = () => {
  const [data,setdata]=useState([]);

  

  useEffect(()=>{
    apidata()
  },[])
  const apidata=async()=>{
    const url="https://api.dexscreener.com/latest/dex/tokens/:tokenAddreses"
    const response=await fetch(url);
    const data=await response.json()
    console.log(data.pairs)
  }
return (
        <div>
          <h1>Hello</h1>
        </div>
  )
}

export default App
