import React from 'react'
function ChampIMG(props){
    let champ = props.champ
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
    return(
        <div  >
            <img style={{height: "2em", width:"2em"}} src= {`${props.api}img/champion/splash/${champ}_0.jpg`} alt=""/>
        </div>
        
    )
}
export default ChampIMG