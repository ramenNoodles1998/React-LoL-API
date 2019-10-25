import React from 'react'
import Spell from './Spell'
import ChampIMG from './ChampIMG'
import ItemPic from './ItemPic'
class Body extends React.Component{
    constructor(){
        super()
        this.state = {
            val : "",
            api: "http://ddragon.leagueoflegends.com/cdn/",
            spells: null,
            qCooldown: null,
            wCooldwon: null,
            eCooldown:null,
            rCooldown: null,
            data: null
            
            
        }
    }

    handleChange=(event)=>{     
        const{name, value} = event.target
        let champ = value
        if(champ.length > champ.replace(/\s/g, '').length){
            champ = champ.charAt(0).toUpperCase()+champ.substring(1).toLowerCase()
            champ= champ.substring(0,champ.indexOf(" "))+champ.charAt(champ.indexOf(" ")+1).toUpperCase()+champ.substring(champ.indexOf(" ")+2)
            champ = champ.replace(/\./g,'')
            champ = champ.replace(/\s/g,'')
            champ = champ.replace(/\'/g,' ') 
        }
        else if(champ.length>champ.replace(/\'/g,'').length){
            champ = champ.charAt(0).toUpperCase()+champ.substring(1).toLowerCase()
            champ= champ.substring(0,champ.indexOf("'"))+champ.charAt(champ.indexOf("'")+1).toUpperCase()+champ.substring(champ.indexOf("'")+2)
            champ = champ.replace(/\'/g,' ')
        }
        else{
            
            champ = champ.charAt(0).toUpperCase()+champ.substring(1).toLowerCase()
            if(champ.length>champ.replace(/\./g,'').length){
                champ= champ.substring(0,champ.indexOf("."))+champ.charAt(champ.indexOf(".")+1).toUpperCase()+champ.substring(champ.indexOf(".")+2)
                champ = champ.replace(/\./g,'')  
            }
            
            
        }
        this.setState({   
            [name] : value,
            spells: null,
            qCooldown:null,
            wCooldown: null,
            eCooldown: null,
            rCooldown: null,
            itemIMG: null,
            data: null,
            placeHolder: ""

        })
        console.log(champ)
        fetch(`${this.state.api}9.21.1/data/en_US/champion/${champ}.json`)
            .then(response=>{
                return response.json()
            }).then(data=>{
                this.setState(prevState=>{
                    prevState.data= data.data
                    prevState.spells = prevState.data[champ].spells
                    prevState.qCooldown =prevState.data[champ].spells[0].cooldown
                    prevState.wCooldown =prevState.data[champ].spells[1].cooldown
                    prevState.eCooldown =prevState.data[champ].spells[2].cooldown
                    prevState.rCooldown =prevState.data[champ].spells[3].cooldown
                    prevState.placeHolder = " "
                    return prevState
                })
                
            }).catch(()=>{
                this.setState({
                    placeHolder: "Could not find Champion"
                })
            })
        
   
    }
    render(){

        return(
            <div>
                <div>
                    <input name="val" value={this.state.val} onChange={this.handleChange}/>
                    <p>{this.state.placeHolder}</p>
                </div>
                <ChampIMG
                    api={this.state.api}
                    champ={this.state.val}
                />
                <ItemPic 
                    spells={this.state.spells===null? null : this.state.spells}
                    num="0" 
                />
                <Spell 
                    name={this.state.spells===null? "" : this.state.spells[0].name} 
                    description={this.state.spells===null? "" : this.state.spells[0].description}
                    cooldown={this.state.qCooldown===null? null : this.state.qCooldown}
                />
                <ItemPic 
                    spells={this.state.spells===null? null : this.state.spells}
                    num="1" 
                />
                <Spell 
                    name={this.state.spells===null? "" : this.state.spells[1].name}
                    description={this.state.spells===null? "" : this.state.spells[1].description}
                    cooldown={this.state.wCooldown===null? null : this.state.wCooldown}
                />
                <ItemPic 
                    spells={this.state.spells===null? null : this.state.spells}
                    num="2" 
                />
                <Spell 
                    name={this.state.spells===null? "" : this.state.spells[2].name}
                    description={this.state.spells===null? "" : this.state.spells[2].description}
                    cooldown={this.state.eCooldown===null? null : this.state.eCooldown}
                />
                <ItemPic 
                    spells={this.state.spells===null? null : this.state.spells}
                    num="3" 
                />
                <Spell 
                    name={this.state.spells===null? "" : this.state.spells[3].name}
                    description={this.state.spells===null? "" : this.state.spells[3].description}
                    cooldown={this.state.rCooldown===null? null : this.state.rCooldown}
                />
                
            </div>   
        )
    }
}

export default Body