import React from 'react'
function Spell(props){

    return(
        <div>
            <p>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.cooldown === null||props.cooldown === undefined? " ": props.cooldown[0]}</p>
            <p>{props.cooldown === null||props.cooldown === undefined? " ": props.cooldown[1]}</p>
            <p>{props.cooldown === null||props.cooldown === undefined? " ": props.cooldown[2]}</p>
            <p>{props.cooldown === null||props.cooldown === undefined? " ": props.cooldown[3]}</p>
            
        </div>
    )
    
}
export default Spell