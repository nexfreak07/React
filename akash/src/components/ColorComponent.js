import React from 'react'

export default function  (props) {
    const width = 10 * +props.power;

    console.log(props.value)
  return (
    <div style={{width: width, height: '400px', backgroundColor: props.value}}></div>
  )
}
