import React from 'react'
import Button from './primitive/Button'

export default function Main() {
    return (
        <div>
            Main Display
            <Button buttonType="button"
                onClickAction={() => alert("Hello!")}
                displayText="Click Me"
            />
        </div>
    )
}
