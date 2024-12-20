import React from 'react'

type Props = {
    children: React.ReactNode;
}

const Button = ({children}: Props) => {
  return ( 
    <a className='bg-transparent border-solid rounded-full border-slate-800 p-4 bg-gray-600 mr-2 cursor-pointer'>{children}</a>
  )
}

export default Button