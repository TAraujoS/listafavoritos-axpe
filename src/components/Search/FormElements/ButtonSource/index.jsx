import React from 'react'

// styles
import { Button } from './styles'

function ButtonSource(props) {
  return (
    <Button {...props}>{props.children}</Button>
  )
}

export default ButtonSource
