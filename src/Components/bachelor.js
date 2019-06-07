import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Bachelor extends Component{
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                   <p>2009-2013</p>
                   </Cell>
                   <Cell col={8}>
                   <p>Bachelor In Telecommunication</p>
                   <p>The Superior Universiy, Lahore</p>
                   </Cell>
               </Grid>
            </div>
        );
    }
    }
export default Bachelor;