import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class Contacts extends Component {
    render(){
        return(
            <div className="content">
                <Grid className="grid-content">
                <Cell col={6}>
                    <h2>Waqar Hassan</h2>
                    <img style={{height:'230px'}}alt="avatar" src="https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png" />
                    <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>Full stack web developer with a vast array of knowledge in many
                        different front end and back end languages, responsive frameworks,
                        databases and best code practices. Passion for designing, developing,
                        and managing complex sites and internal frameworks. Specializes in
                        ReactJS and NodeJS. Experience with JavaScript to build responsive
                        websites, mobile apps, and interactive features that drive business
                        growth and improve UX
                    </p>
                </Cell>
                <Cell col={6}>
                <h2>Contact ME</h2>
                <hr/>
                <div className="List-content">
                <List >
                    <ListItem style={{fontFamily:'Anton', fontSize:'30px'}}>
                        <ListItemContent ><i className="fa fa-phone-square" aria-hidden="true"/>+47-40094846</ListItemContent>
                    </ListItem>
                    <ListItem style={{fontFamily:'Anton', fontSize:'25px'}}>
                        <ListItemContent ><i className="fa fa-envelope" aria-hidden="true"/>waqar271990@gmail.com</ListItemContent>
                    </ListItem>
                    </List>
                </div>
                </Cell>

                </Grid>
            </div>
        );
    }
}
export default Contacts;