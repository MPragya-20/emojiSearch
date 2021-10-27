import React from 'react'

const EmojiList = (props) => {
    return (
        <div id="emoji_list">
            <div>
                {(props.filtered).map((em)=>(
                    <div key ={em.id}>{em.em}</div>
                ))}
                {/* Note the map operation here */}
            </div>
        </div>
    )
}

export default EmojiList
