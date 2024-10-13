import React from 'react'
import Button from './primitive/Button'

export default function Main() {
    return (
        <div className='relative text-center border-2 w-full h-96 border-black flex flex-col justify-center'>
            Main Display
            <Button buttonType="button"
                onClickAction={() => alert("Hello!")}
                displayText="Click Me"
            />
        </div>
    )
}
