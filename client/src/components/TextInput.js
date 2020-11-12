import React from 'react'

export default (props) =>
  props.fieldType === 'textfield' ? (
    <textarea 
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(error) => props.onChange(error)}
    />
  ) : (
    <input 
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(error) => props.onChange(error)}
      autoComplete="false"
    />
  )