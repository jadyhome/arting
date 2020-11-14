import React from 'react'

export default ({ children, ...rest }) => {
  return (
    <div className="board" {...rest}>
       {children}
    </div>
  )
}