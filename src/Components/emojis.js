import React from 'react'
import SearchBar from './SearchBar'

const Emojis = () => {
    const emojis = [
        {id:'1','em':'Smiling face 😊'},
        {id:'2','em':'Sleeping face 😴'},
        {id:'3','em':'Grinning face 😀'},
        {id:'4','em':'Smiling face with sunglasses 😎'},
        {id:'5','em':'Smiling face with heart eyes 😍'},

        {id:'6','em':'Face with tears of joy 😂'},
        {id:'7','em':'Face savoring food / Delicious / Yummy😋'},
        {id:'8','em':'Face blowing a kiss😘'},
        {id:'9','em':'Winking Face with Tongue 😜'},
        {id:'10','em':'Crying / Upset / Unhappy / Depressed  Face 😢'},

        {id:'11','em':'Angry / Pouting Face 😡'},
        {id:'12','em':'Face screaming in fear / Afraid 😱'},
        {id:'13','em':'Laughter / Rolling on the floor laughing🤣'},
        {id:'14','em':'Skull 💀'},
        {id:'15','em':'Hugging Face🤗'},

        {id:'16','em':'Monkey Face 🐵'},
        {id:'17','em':'Lughing cat with tears of joy 😹'},
        {id:'18','em':'Face with hand over mouth 🤭'},
        {id:'19','em':'Family 👨‍👩‍👧‍👧'},
        {id:'20','em':'Eyes 👀'},
    ]



    return (
        <div>
            <SearchBar emojistoSearchbar = {emojis}/>
            {/* <EmojiList emoji={emojis}/> */}
        </div>
    )
}

export default Emojis
