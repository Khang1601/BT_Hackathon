import React from 'react'

export default function Scores({ totalScore, playerCount }) {
    return (

        <div className='scores'>
            <div>
                <div className='player'>
                    <span>Players: </span>
                    <span className='player_number'>{playerCount}</span>
                </div>

                <div className='point'>
                    <span>Total Points: </span>
                    <span className='point_number'>{totalScore}</span>
                </div>
            </div>

            <h1>Bảng điểm</h1>
        </div>

    )
}
