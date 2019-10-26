import React from 'react'
function Spell(props){

    return(
        <div className="spell">
            <div className="spellName">{props.name}</div>
            <div className="spellDescription">{props.description}</div>
            <div className="spellCooldowns">
                {props.cooldown === null||props.cooldown === undefined? " ": "Cooldowns: "}
                {props.cooldown === null||props.cooldown === undefined? " ": props.cooldown[0]+", "}
                {props.cooldown === null||props.cooldown === undefined? " ": props.cooldown[1]+", "}
                {props.cooldown === null||props.cooldown === undefined? " ": props.cooldown[2]+", "}
                {props.cooldown === null||props.cooldown === undefined? " ": props.cooldown[3]}
            </div>
            
        </div>
    )
    
}
export default Spell