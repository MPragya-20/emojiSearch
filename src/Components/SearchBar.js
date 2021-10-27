import React, { useState } from 'react'
import EmojiList from './EmojiList'
const SearchBar = (props) => {
    const[input, setInput] = useState("");

    const filtered_emojis = props.emojistoSearchbar.filter((emoji)=>{
        return(
            emoji.em.toLowerCase().includes(input.toLowerCase())
        )
    })
    
    //Note the filter operation here

    return (
        <div>
            <br />
            <div>Emoji Search App by <strong>Pragya Mukherjee</strong></div>
            <input type="search" name="searchbar" id="search" placeholder="🔍Search emojis " onChange={e=>setInput(e.target.value)}/>
            <EmojiList filtered = {filtered_emojis}/>
        </div>
    )
}

export default SearchBar
