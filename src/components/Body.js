import React from 'react'

class Body extends React.Component{
    constructor(){
        super()
        this.state = {
            val : "",
            api: "http://ddragon.leagueoflegends.com/cdn/",
            data: null
            
            
        }
    }

    handleChange=(event)=>{     
        const{name, value} = event.target
        let champ = value
        
        this.setState({   
            [name] : value,
            data: null
        })
        
        fetch(`${this.state.api}9.21.1/data/en_US/champion/${champ}.json`)
            .then(response=>{
                return response.json()
            }).then(data=>{
                this.setState(prevState=>{
                    prevState.data= data.data
                    console.log(prevState.data[champ].id)
                    return prevState
                })
                
            }).catch(err=>{
                console.log(err)
            })
        
   
    }
    
    render(){
        //turns value to first letter cap and rest lower case and makes 
        //Dr. mundo and master yi work no matter what
        let champ = this.state.val.replace(/\./g,'')
        if(champ.length > champ.replace(/\s/g, '').length){
            var stringArray = champ.split(/(\s+)/);
            stringArray[0].toLowerCase();
            champ = stringArray[0].charAt(0).toUpperCase()+stringArray[0].slice(1);
            stringArray[2].toLowerCase();
            champ += stringArray[2].charAt(0).toUpperCase()+stringArray[2].slice(1);
            
        }
        else{
            champ = champ.toLowerCase();
            champ = champ.charAt(0).toUpperCase()+champ.slice(1);
        }
        
        return(
            <div>
                <input name="val" value={this.state.val} onChange={this.handleChange}/>
                <img src= {`${this.state.api}img/champion/splash/${champ}_0.jpg`} alt=""/>
                <p>{this.state.data===null?"":this.state.data[this.state.val].id}</p>
            </div>   
        )
    }
}

export default Body