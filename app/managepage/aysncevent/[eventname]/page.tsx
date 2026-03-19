import React from 'react'
// {params}:{params:{eventname:string}}
const asyncevents = async({params}:{params:{eventname:string}}) => {
  //if driectky acess props
  // const params = await props.params
  const id = await params
  console.log(id)
  // console.log(params)
  return (
    <div>Async read events : {id.eventname}</div>
  )
}

export default asyncevents;
