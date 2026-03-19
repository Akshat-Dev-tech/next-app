'use client'
import React from 'react'
import { useParams } from 'next/navigation';
const EventNames = () => {
 const params = useParams();
  return (
    <div>Event Details : {params.eventname}</div>
  )
}

export default EventNames;
