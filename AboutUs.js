import React from 'react'
import Head from 'next/head';
import NavBar from '../Components/NavBar';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { typography } from '@mui/system';

const AboutUs = () => {
    const changeStyle=makeStyles({
        backgroundStyle:{backgroundColor:"#EAEAEA",
        height:"100vh",
    width:"100vw"
}
    });
    const classes=changeStyle();
    return (
        <Paper className={classes.backgroundStyle}>
            <Head>
                <title>About Us | OrangeShark</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            </Head>
            <Container maxWidth="lg" style={{padding:"20px 15px",margin:"0 11.35% 0 11.35%"}}>
                

            <NavBar/>
            <h2 style={{marginBottom:"0"}}>About Us</h2>
            <hr style={{width:"100%",height:"4px",backgroundColor:"black",marginLeft:"0px",marginTop:"0px"}}/>

            <div style={{width:"60%",fontSize:"14px"}}>
            <b>ABOUT ORANGE</b>
                <p>It is a talent marketplace where the best talents and companies get matched.</p>
                            
                <b>LOOKING TO HIRE THE BEST PEOPLE FOR YOUR COMPANY?</b>
                <p>Don’t pay a consultant, propose a bounty instead. Our bounty hunters will hunt and fetch the best talents for you, anytime, anywhere.</p>
                <b>LOOKING TO HIRE THE BEST PEOPLE FOR YOUR COMPANY?</b>
                <p>Apply or refer yourself to open positions and claim the bounty</p>
                <b>KNOW SOMEONE WHO IS A GREAT FIT FOR AN OPEN POSITION?</b>
                <p style={{marginBottom:"1000"}}>Refer them and claim the bounty</p>
            </div>
            
            
            <hr style={{width:"100%",height:"4px",backgroundColor:"black",marginTop:"150px",marginLeft:"0"}}/>
            <div>
            	&copy; 2021 OrangeShark Private Limited. All Rights Reserved &emsp; |&emsp;<Link href="/AboutUs" style={{display:"inline"}}>About Us</Link>&emsp;|&emsp;<Link href="/TermsOfUse" >Terms of Use</Link> &emsp; |&emsp; <Link href="/PrivacyPolicy" >Privacy Policy</Link> &emsp; | &emsp;Need help? Email 
                <a href="mailto:support@orangeshark.com" style={{fontSize:"12px",color:"gray"}}>support@orangeshark.com</a>
            </div>
            
            </Container>
            
        </Paper>
    )
}

export default AboutUs
