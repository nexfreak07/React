import React from 'react'
import { UserContext } from './ComponentC'
import ComponentF from './ComponentF'

export default function ComponentE() {
  return (
    <div>
    <UserContext.Consumer>
        {user => <div>User Context Value = {user}</div>}
    </UserContext.Consumer>
    <ComponentF/>
    </div>
  )
}
