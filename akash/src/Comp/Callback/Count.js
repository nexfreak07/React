import React from 'react'

function Count(props) {
    console.log(`${props.count} Rendered`)
  return (
    <div>{props.text} - {props.count}</div>
  )
}
// React. Memo is used to memoize a component and do not rerender if nothing (props, state) has changed It is a HOC
export default React.memo(Count)
