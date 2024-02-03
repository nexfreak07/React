import React from 'react'
import { withIncrement } from './HOC'

function HOCComponent() {
  return (
    <h1>HOCComponent</h1>
  )
}
export default withIncrement(HOCComponent);
