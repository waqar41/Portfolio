import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
class Experience extends Component{
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                   <p>Freelancing</p>
                   </Cell>
                   <Cell col={8}>
                   <p>  Build a website using React, Successfully made the
SignIn and Registration form to register the users in database and fetch the Clarify API to detect the face on any image using Image URL. For the back-end and database. </p>
                   
                   <p>Build and deploy the website for the customer to display their products.</p>
                   </Cell>
               </Grid>
            </div>
        );
    }
    }
export default Experience;