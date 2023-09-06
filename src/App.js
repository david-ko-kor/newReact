import React,{useEffect,useState} from 'react'

export default function App() {
   const [data,setData]=useState({members:[]})
     useEffect(()=>{
        fetch('/api').then(res =>res.json()).then(items=>setData(items))

    },[])
    console.log(data)
    console.log(data.members)
    const submitHandler=()=>{
      fetch('/data',{
       method:'POST',
       body:JSON.stringify({
        user:'goremi',
       }),
       headers:{
        'Content-Type': 'application/json' 
       }
      }).then(res=>res.json()).then(data=>console.log(data))
    }
     
  return (
    <>  
    <div onClick={submitHandler} style={{display:'flex', justifyContent:'center',alignItems:'center',height:'100vh',}}>
     {data && data.members.length > 0 &&
      data.members.map((item,index)=> <p style={{ paddingRight:'20px',position:'relative'}} key={index}>{item}</p>)
    }
       <button style={{position:'absolute',top:'400px'}}>클릭</button>
</div>



    </>
  )
}
