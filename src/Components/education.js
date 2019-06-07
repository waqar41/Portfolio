import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Education extends Component{
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                   <p>{this.props.startYear}-{this.props.endYear}</p>
                   </Cell>
                   <Cell col={8}>
                   <p>Master Information and Communication Technology</p>
                   <p>University of Agder, Grimstad</p>
                   </Cell>
               </Grid>
            </div>
        );
    }
    }
export default Education;