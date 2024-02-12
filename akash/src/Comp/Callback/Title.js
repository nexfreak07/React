import React from 'react'

function Title() {
    console.log("Title Rendered")
  return (
    <div>useCallback</div>
  )
}
// React. Memo is used to memoize a component and do not rerender if nothing (props, state) has changed It is a HOC

export default React.memo(Title)
