import React from 'react'

interface ButtonProps {
    buttonType:'button' | 'submit' | 'reset';
    onClickAction: () => void;
    displayText: string;
}


export default function Button({buttonType, onClickAction,displayText}: ButtonProps) {
  return (
    <div>
      <button className='p-1 border-2 bg-slate-500 rounded-xl text-white' type={buttonType} onClick={onClickAction}>{displayText}</button>
    </div>
  )
}
