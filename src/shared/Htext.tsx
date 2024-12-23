import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Htext = ({children}: Props) => {
  return (
    <h1 className='italic mb-8 ml-2 uppercase font-semibold text-2xl text-cyan-900'>{children}</h1>
  )
}

export default Htext;