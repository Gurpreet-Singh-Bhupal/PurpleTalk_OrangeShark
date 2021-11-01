import React from 'react'
import Head from 'next/head';
import NavBar from '../Components/NavBar';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { typography } from '@mui/system';

const LearnMorePage = () => {
    const changeStyle=makeStyles({
        backgroundStyle:{backgroundColor:"#EAEAEA",
        // height:"100vh",
    width:"100vw"
}
    });
    const classes=changeStyle();
    return (
        <Paper className={classes.backgroundStyle}>
            <Head>
                <title>TERMS OF USE | OrangeShark</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Container maxWidth="lg" style={{padding:"20px 15px",margin:"0 11.35% 0 11.35%"}}>
                

            <NavBar/>
            <h2 style={{marginBottom:"0"}}>TERMS OF USE</h2>
            <hr style={{width:"100%",height:"4px",backgroundColor:"black",marginLeft:"0px",marginTop:"0px"}}/>
            <div style={{width:"60%",fontSize:"16px"}}>
            <p>OrangeShark is an online talent marketplace where (“You”) -(User, companies, visitors, anyone) may post open job positions on our platform/website – Orangeshark.com and “Users”- (recruiters, bounty hunter, job seekers, entity, visitors, anyone) can refer suitable candidates, friends or themselves to those open positions on our platform- Orangeshark.com

By using OrangeShark.com, You indicate that you accept the terms of use of Orangeshark.com in its entirety and will be bound by the provisions of these Terms of Use. OrangeShark or OrangeShark.com reserves the right to revise these Terms of Use at any time as per the requirements and the same will be reflected or posted here. You are advised to visit the page- “terms of use” periodically to view the most updated “Terms of Use”. The terms “You” and “User” as used herein refer to any/all individuals and/or entities using, accessing this web site -Orangeshark.com for any reason.

OrangeShark.com acts only as a medium for “Users”- (Companies,recruiters, job seekers, visitors, anyone) to interact and exchange information, resumes for the intention of matching the job seekers, with requirements and open positions from companies.
</p>
<b>GENERAL CONDUCT & USAGE- REGISTERED USERS, VISITORS OR ANYONE</b>
<p>

OrangeShark.com or Orangeshark’s services, products, platform or any other related services or products that are used or availed by “You”- (Users, companies, entities, visitors, anyone) is deemed, meant, intended for the sole and exclusive use by the registered “user”. Copying, recreating our platform, services, products, or any other related services or products in any shape,form or fashion is regarded as a misuse of our platform. Website- “orangeshark.com” hack, data breach, unauthorised download and transmission of any data from our platform is considered a serious breach of trust, misuse and a criminal offence. In such cases Orangeshark reserves its right to pursue any actions we deemed necessary to protect the revenue, business, shareholders, and reputation of the company. We also reserve the right to stop, terminate your access to our platform-orangeshark.com and also claim damages for the impairment, harm, caused. Sharing of “User” credentials including passwords, user IDs are strictly prohibited. Orangeshark will not assume any responsibility or liability in case of lost, misuse, and loss incurred with regard to the user’s credentials.

Orangeshark.com is a free platform, website which anyone with a bona fide intention can access, use. While we do our due diligence on the applicants, bounty hunters ( recruiters, job seekers or anyone) we do not guarantee and assume no liability for the genuineness of respondents to an open position from companies. We have employees do basic background checks of the candidate, but the hiring company, entity should conduct its own thorough background checks on the applicants, candidates, and responses that they get from the platform before the offer letters are released. 
</p>
<b>PERSONAL DATA</b>
<p>
You agree and grant permission to orangeshark.com to use data about you from sign up, interactions and usage/visit to Orangeshark.com with regard to internet, social media ads, online marketing campaigns drives about our services, products and contents without any remuneration or compensation to you. 

We also use the user’s data and information for ad campaigns in every mode or platform we decide to make relevant impressions, recommendations to you and others

The website- orangeshark.com may contain links to third party websites, and entities. They are there for the sole purpose of providing transparency and convenience to the User. We assume no liability or responsibility in any manner in case of harm or loss you may incur as a result of your visit to those third party websites. 

We do not endorse any of the contents that you may come across on those third party websites. You are advised to access those websites with care and at your own risk.

The User of this platform is obligated to provide only true and correct personal information while signing up, interaction, engagement with anyone or entity at any stage, the user also agrees to keep his or her latest information. 

Any untrue, misleading information with the intention to cause harm, loss, deceive, is considered a liable offence, and the matter may be reported to concern authorities of the state. Orangeshark will not be liable or responsible for any inaccuracy of the information of its users. Orangeshark do not guarantee confidentiality of any information of the user on the website /domains owned and operated by Orangeshark

Personally identifiable data of any individual / User is not shared with other companies/entities without obtaining prior permission of the concerned person. OrangeShark is bound to share such information that it has in its possession in response to legal proceedings, such as a court order or subpoena. 

The user undertakes not to duplicate, download, publish, modify and distribute any material/information from OrangeShark.com in any way, shape, form, or fashion unless specifically authorized by OrangeShark.

The user shall not upload, post, transmit, publish, or distribute any material or information that is unlawful, or which may potentially be perceived as being harmful, threatening, abusive, harassing, defamatory, libelous, vulgar, obscene, or racially, ethnically, or otherwise objectionable to any person, party, people, group, community. In case of any false, incorrect, distorted, manipulated, fraudulent or misleading facts or averments OrangeShark expressly disclaims any liability arising out of the said information/ data.  

The User of  Orangeshark.com also expressly and specifically agrees that he/she shall, at all times, comply with the laws/statutes, regulations, guidelines, bye laws of the Information Technology Act, 2000. and notifications made thereunder, while assessing or feeding any resume/ insertion or information/data into the computers, computer systems or computer network of OrangeShark. The User also unequivocally declare that in case he violates any provisions of the Information Technology Act, 2000 and/or rules, regulations, guidelines, byelaws and notifications made thereunder, he shall alone be responsible for all his acts, deeds and things and that he alone shall be liable for civil and criminal liability there under or under any other law being in force.

While we endeavour to protect the data of our users, OrangeShark will not be liable for any loss or damage arising out of lost, theft, breach of personal data from the website accidentally or otherwise.
</p>
<b>

RESTRICTION WHILE USING ORANGESHARK.COM, SERVICES, PRODUCTS OR ANY OTHER RELATED PRODUCTS, SERVICES.
</b>
<ol>
    <li>
Violate any law, statute, rules or regulation of any local, municipal, state, province, national or international as may be applicable.

    </li>
    <li>
Copyright, trademark, patent infringement, violation intellectual property rights or any other proprietary right of Orangeshark, third parties or anyone/entity
        
    </li>
    <li>

Hack, harm or disrupt security infrastructure, computer network, domains connected to Orangeshark.com
    </li>
    <li>

Attempts to illegally obtain the credentials of Orangeshark.com users, breach security or authentication measures in any way, shape, form or fashion.
    </li>
    <li>

Allowing someone to login with your User ID and passwords impersonating as you
    </li>
    <li>
Download, copy, reproduce,modify, distribute data, information from the platform for any derivative commercial purpose or otherwise.

    </li>
    <li>
Impersonating, identity theft, faking to be someone else while signing up or interactions with any user/party at any time,stage

    </li>
    <li>
Giving incorrect, incomplete and distorted information with the purpose of deception toward any user/party

    </li>
    <li>
Using Orangeshark.com in such a manner as to gain unauthorized entry or access to the computer systems of others

    </li>
    <li>
Impersonating as representatives from Orangeshark toward any person, party or entity at any time/stage

    </li>
    <li>
Acts of reverse engineering, decompiling, disassembling, deciphering or otherwise attempting to derive the source code of the website or any related technology of orangeshark.com

    </li>
    <li>
Unauthorised data extraction from Orangeshark.com using any automated process such as spiders, crawlers etc. or through any manual process

    </li>
    <li>

Minors – below 18 years of age are required to get prior permission to use Orangeshark services/products
    </li>
</ol>
<p>
Violation of any of the above restrictions which may cause harm to business, revenue, shareholders, and reputation of the company will result in termination of your access to our platform, and may invite legal action if deemed necessary.

</p>
<b>INTERACTION BETWEEN THE CANDIDATE, REFERRER  AND HIRING COMPANY</b>
<p>
Orangeshark endeavours to ensure complete transparency to all parties involved, we ensure a reasonable degree of effort is made to make sure the companies give genuine job posting, and that the recruiter is referring only genuine candidates. 

However, we do not guarantee the genuineness of the profiles that are submitted and hiring companies. Candidates are to make their own research and determinations that the companies are ideal or suitable. Likewise, companies are responsible for proper background checks, due diligence and any other assessments that they wish to conduct in order to authenticate and verify the profile of the candidates. 

Orangeshark is only a talent marketplace acting only as a medium for interaction between recruiters, candidates, job seekers and companies. Orangeshark does not assume any liability arising in this regard.

Companies shall not collect personal information from candidates beyond what is necessary for applying to an open position. They shall not ask the candidates for personally identifiable information from our users- here recruiters and candidates unless willingly agreed upon by all parties involved.

The data, information collected by the companies at any stage of the interactions should be used, stored as per applicable laws only.  In case of unsuccessful hires, companies must dispose of, destroy all information related to the candidates and cease to make use of them in any way.

The candidate and recruiter/referrer will not gather, collect any information relating to the hiring company during their interaction at any stage. Any data, information about the company the candidate and recruiter/referrer may be privy to or expose to, come to his knowledge during the hiring process, the candidate agrees not to disclose, misuse that information at any time in the future. 

In case of legal proceedings between candidates, recruiter/referrer and companies/employers or any user/visitor of this website, Orangeshark will not be party to any legal proceedings between them. In case OrangeShark Private Limited is dragged, implicated in any legal proceedings, legal costs will be recovered from the party concerned as may be applicable. OrangeShark however will abide by any court order as applicable with the  laws of the Republic of India.

</p>
<b>INDEMNIFICATION</b>
<p>
You agree to indemnify and hold harmless orangeshark, its shareholders, employees, subsidiaries, affiliates and other related partners from any and all direct, indirect, incidental, consequential losses arising out of, relating to, or resulting from your use of the product & services of orangeshark.com or third parties services through orangeshark.com

</p>
<b>JURISDICTION OF ARBITRATION, LEGAL PROCEEDINGS</b>
<p style={{marginBottom:"1000"}}>
In case of any legal dispute arising between a user/users and OrangeShark, the dispute shall be referred to a sole arbitrator who shall be an independent and neutral third party identified by the Company-here Orangeshark. The decision of the arbitrator shall be final and binding on both the parties of the dispute. The jurisdiction and place of arbitration shall be in a court of law in Hyderabad, India. 

These Terms and Conditions shall be governed by the laws of the Republic of India.

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
