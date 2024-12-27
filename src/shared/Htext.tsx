import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Htext = ({children}: Props) => {
  return (
    <h1 className='italic pb-4 uppercase font-semibold text-xl text-cyan-900'>{children}</h1>
  )
}

export default Htext;