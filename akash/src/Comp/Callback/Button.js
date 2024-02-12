import React from 'react'

function Button(props) {

    console.log(`${props.children} rendered`)
  return (
    <div>
        <button onClick={props.onClick}>{props.children}</button>
    </div>
  )
}

// React. Memo is used to memoize a component and do not rerender if nothing (props, state) has changed It is a HOC
export default React.memo(Button)
