import React from 'react'
import "./Card.css"
type Props = {}

const Card = (props: Props) => {
    return (
        <div className='card'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="img" />
            <div className='details'>
                <h2>Bit Coin</h2>
                <p>20$</p>
                
            </div>
            <div className='info'><button>Купить</button></div>
        </div>
        
    )
}

export default Card