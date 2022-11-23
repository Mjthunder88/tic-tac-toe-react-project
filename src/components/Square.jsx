import React from 'react'

const Square = (props) => {
    console.log(props.squares, props.player)
    // console.log(props.player)

    const handleClick = () => {
        return !props.squareValue ? 
        (props.squares.splice(props.index, 1, 'X'), props.setSquares(props.squares), props.setPlayer(!props.player)) : 
        (props.squares.splice(props.index, 1, 'O'), props.setSquares(props.squares), props.setPlayer(!props.player)) 
    }

    return (
        <div className='square' onClick={handleClick}>
            {props.squareValue === 'O' ? <img src='https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png' alt='dev_mountain_logo' /> : props.squareValue}
        </div>
    )
}


export default Square