import React from 'react'
import { useContext } from 'react'
import { SkillContext } from './ComponentC'



export default function ComponentF() {

    const skill = useContext(SkillContext); 
  return (
    <div>
        Akash has Skills - {skill}
    </div>
  )
}
