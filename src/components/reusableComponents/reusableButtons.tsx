import React from 'react'

export const ReusableButtons = (props: any) => {
    const ownStyle = {
        backgroundColor: props.bg,
        height: props.height,
        width: props.width,
        color: props.color
    }
  return (
    <div>
        <button onClick={props.func} style={{...ownStyle, borderRadius: '10px'}}>{props.title}</button>
    </div>
  )
}

export const ReusableModal = () => {
  return (
    <>
    </>
  )
}
