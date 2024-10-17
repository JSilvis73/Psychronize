import React from 'react'
import Button from './primitive/Button'

export default function Main() {
    return (
        <div className='relative text-center border-2 h-screen mb-2 border-black flex flex-col justify-center'>
            <div>
                Main Display
                <Button buttonType="button"
                    onClickAction={() => alert("Hello!")}
                    displayText="Click Me"
                />
            </div>
        </div>
    )
}
