import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Htext = ({children}: Props) => {
  return (
    <h1>{children}</h1>
  )
}

export default Htext;