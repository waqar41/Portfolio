import React, {Component} from 'react';
import {Grid , Cell} from 'react-mdl';
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js';

const particlesOption = {
            		particles: {
                        number:{
                        value:100,
                        density:{
                         enable:true,
                         value_area:800
                        }		
            		}
            	}
         	}
            

class LandingPage extends Component {
    
    render(){
        return(
            <div style={{width: '100%' , height: '100%'}} >
               
                <Grid className="landing-grid">
                    <Cell col={12}>
                     
                     
                     {/*   <img  
                            src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png"
                            alt="avt" className="avatar"
                         /> */} 
                         
                            <div className="developer">
                            <Particles className="particles"
                            params={particlesOption} />
                                <h1>Full Stack Developer</h1>
                                <hr/>
                                <p>HTML | CSS | Bootstrap    | JavaScript| TypeScript | React | VueJS  | NodeJs | Express </p>
                                
                                <div className="social">
                                    {/*linkedin icon */}
                                    <a href="https://www.linkedin.com/in/waqar-hassan-25a79079/" target="_blank" style={{color:'white'}}>
                                        <i className="fa fa-linkedin-square"  aria-hidden="true"/></a>

                                    {/*Github icon */}
                                    <a href="https://github.com/waqar41/" target="_blank" style={{color:'white'}}>
                                        <i className="fa fa-github-square" aria-hidden="true"/></a>
                                    
                                </div>
                            </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default LandingPage;