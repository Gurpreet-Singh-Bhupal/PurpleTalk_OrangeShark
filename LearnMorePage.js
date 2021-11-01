import React from 'react'
import Head from 'next/head';
import NavBar from '../Components/NavBar';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { typography } from '@mui/system';

const LearnMorePage = () => {
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
                <title>How it works | OrangeShark</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            </Head>
            <Container maxWidth="lg" style={{padding:"20px 15px",margin:"0 11.35% 0 11.35%"}}>
                

            <NavBar/>
            <h2 style={{marginBottom:"0"}}>How It Works</h2>
            <hr style={{width:"100%",height:"4px",backgroundColor:"black",marginLeft:"0px",marginTop:"0px"}}/>
            <div style={{width:"60%",fontSize:"14px"}}>
            <p>
            <b>For companies:</b> If you are looking for great talent, put a bounty on that role. We have a large database of “talent bounty hunters” who will find people you don’t see on the job portals. We will only forward profiles to you after thorough vetting. Bounties are paid only after a selected candidate joins the company – Additionally, you will be able to rate both bounty hunters as well as the profiles.


            </p>
            <p style={{marginBottom:"1000"}}>
            <b>For Bounty Hunters:</b> If you know anyone who would be perfect for the roles listed, please refer them to us and get paid for it. You will also be rated based on the profiles you recommend so we suggest, you send our way only the great ones.
            </p>
            
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

export default LearnMorePage
