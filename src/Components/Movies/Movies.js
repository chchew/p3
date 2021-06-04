import React, { Component } from 'react';
import './Movies.scss';

class Movies extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const { title } = this.props

        return(
            <div className='main-divider'>
                <div className='lotr'>
                    <div className='lotr-text'>

                    </div>
                    <div className='lotr-background-image'>

                    </div>
                </div>
                <div className='spiderman'>                    
                    <div className='spiderman-comic'>
                    </div>
                    <div className='spiderman-text-background'>
                        <div className='spiderman-text'>

                        </div>
                    </div>                    
                </div>
                <div className='rick-morty'>
                    <div className='rick-morty-text'>

                    </div>
                    <div className='rick-morty-background'>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies