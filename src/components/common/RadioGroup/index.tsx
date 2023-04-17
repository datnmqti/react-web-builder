import React from 'react'

interface Props {
  children: React.ReactNode
}

const RadioGroup: React.FC<Props> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default RadioGroup
