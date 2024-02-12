import React, { useState } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'

import { useCallback } from 'react'

export default function ComponentCallback() {


  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);



  // The handle age func are rerendered again, thats beacuse react creates a new func evertime, to tell react that do not create it just create when theres a change in
  // A dependency we use useCallback

  const handleAge = useCallback(() => {
    setAge(age+1);
  }, [age])


  const handleSalary = useCallback(() => {
    setSalary(salary+10000)
  }, [salary])


  return (
    <div>
        <Title></Title>
        <Count text="age" count={age}></Count>
        <Button onClick={handleAge}>Increment Age</Button>
        <Count text="salary" count={salary}></Count>
        <Button onClick={handleSalary}>Increment salary</Button>
    </div>
  )
}
