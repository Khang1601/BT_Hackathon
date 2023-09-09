import React from 'react'

export default function Addplayer({addList}) {

    return (
        <div className='add_player'>
            <form className='form_input' onSubmit={(e) => {
                addList(e)
            }}>
                <input name='title' type="text" placeholder="Enter a player's name" />
                <button>ADD PLAYER</button>
            </form>
        </div>
    )
}
