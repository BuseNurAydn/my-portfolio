import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Button = ({children}: Props) => {
  return (
    <a>{children}</a>
  )
}

export default Button