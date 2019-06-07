import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Bachelor from './bachelor';
import Experience from './experience';
import Skills from './Skills';
class Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            < img style={{height:'200px'}}alt='avatar' src='https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png'/>
                        </div>    
                        <div>
                            <h2 style={{paddingTop:'.5em'}}> Waqar Hassan</h2>
                            <h4 style={{color:'grey'}}>Full-Stack Developer</h4>
                            <hr style={{borderTop:'3px solid grey', width:'100%' }} /> 
                            <p>Full stack web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases and best code practices. Passion for designing, developing, and managing complex sites and internal frameworks. Specializes in ReactJS and NodeJS. Experience with JavaScript to build responsive websites, mobile apps, and interactive features that drive business growth and improve UX</p>
                            <hr style={{borderTop:'3px solid grey', width:'100%' }} /> 
                            <h5>Address</h5>
                            <p>Jon Lilletuns Vei 2a Lovas 1</p>
                            <hr style={{borderTop:'3px solid grey', width:'100%' }} /> 
                            <h5>Moblie</h5>
                            <p>+47-40094846</p>
                            <hr style={{borderTop:'3px solid grey', width:'100%' }} /> 
                            <h5>Email</h5>
                            <p>waqar271990@gmail.com</p>
                        </div>
                    </Cell>
                    <Cell className="right-content" col={8} >
                        <h2>Education</h2>
                        <Education
                            startYear={2017}
                            endYear={2019}
                        />
                        <Bachelor/>
                        <hr style={{borderTop:'3px solid #e22974'}} />
                        <h2>Experience</h2>
                        <Experience/>
                        <hr style={{borderTop:'3px solid #e22974'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="JavaScript"
                            progress={95}
                        />
                        <Skills 
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills 
                            skill="REACT"
                            progress={80}
                        />
                        <Skills 
                            skill="C#"
                            progress={40}
                        />
                        <Skills 
                            skill="VUE.JS"
                            progress={40}
                        />
                        <Skills 
                            skill=".NET"
                            progress={65}
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Resume;