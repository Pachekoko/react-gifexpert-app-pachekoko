import React from 'react'

const ShowIncrement = React.memo(({increment}) => {
    console.log('me volvi a generar');
    return (
        <button type="button" 
        name="" id="" 
        className="btn btn-primary btn-lg btn-block"
        onClick={()=>{increment(5)}}>

            Increment
        </button>
    )
})

export default ShowIncrement
