import React, { Component } from 'react';
import './disneystyle.scss';

class Disney extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const { title } = this.props

        return(
            <div className='disney'>                
                <div className='tittleText'> 
                    Proyecto Chat
                    <div className='button-cover'>
                        <div className='overall-button' />
                        <div className='overall-button' />
                    </div>                    
                </div>  
                <div className='disney-park'>
                
                </div> 
            </div>
        )
    }
}

export default Disney