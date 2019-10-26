import React from 'react'
class ItemPic extends React.Component{
    constructor(props){
        super(props)
        this.state={
            spells: this.props.spells,
            num: this.props.num,
            Img: null
        }
    }
    componentDidUpdate(prevProps){
            
        if(prevProps.spells !== this.props.spells){
            this.setState(prevState=>{
                prevState.spells = this.props.spells
                if(prevState.spells !== null){
                    prevState.num= this.props.num
                    prevState.Img= this.props.spells[parseInt(this.props.num)].image.full
                }
                else{
                    prevState.spells=null
                }
                
                    
                return prevState
            })
        }
    }
    render(){
        
        return(
            <div className="itemPic">
                <img style={{border: "solid grey 5px", borderRadius: "5px"}}src={this.state.spells===null? "":`http://ddragon.leagueoflegends.com/cdn/9.21.1/img/spell/${this.state.Img}`} alt=""/>
            </div>
        )
    }
}

export default ItemPic