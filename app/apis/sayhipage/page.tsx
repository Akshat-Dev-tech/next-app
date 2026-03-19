'use client' 
import React, { use, useEffect, useState } from 'react'

const SayHi = () => {
const [data , setData] = useState<{ message: string } | null>(null)
useEffect(() => {
    fetch('/apis/sayhi').then(res=>res.json()).then(data=>setData(data)).then(data=>console.log(data)).catch(err=>console.log(err))
}, [])
  return (
    <div>
    <div>Response from /apis/sayhi</div>
    {data && (<div>{data.message}</div>)}
    </div>
  )
}

export default SayHi;
