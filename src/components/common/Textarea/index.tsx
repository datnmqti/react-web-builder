import React from 'react'
import styled from 'styled-components'

const TextareaContainer = styled.textarea`
  width: 100%;
  min-height: 50px;
  padding: 2px 5px;
  font-size: 14px;
  border: 1px solid #f1f1f1;
  resize: vertical;
`

interface Props {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<Props> = ({name, value, onChange}) => {
  return (
    <TextareaContainer name={name} value={value} onChange={onChange} rows={5} />
  )
}

export default Textarea
