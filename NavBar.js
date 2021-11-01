import React from 'react';
import Image from 'next/image';
// import { Button, buttonBaseClasses } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import Link from 'next/link';
// import { ThemeProvider,createMuiTheme } from '@mui/private-theming';
// import MuiThemeProvider from '@mui/material';


// const buttonStyle=makeStyles({
//     root:{
//         borderRadius:0,
//         background:"black",
//         // // marginLeft:"100",
//         width:"150px",
//         padding:"10px 5px",
        
//     }
// })


// const theme=createMuiTheme({
//     typography:{
//         fontFamily:{
//             main:"MADE TOMMY"
//         }
//     },
//     palette:{
//         primary:{
//             main:yellow[500],
//         }
//     }
// })
const NavBar = () => {
    // const buttonClass=buttonStyle();
    return (
        <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                
            <Link href="/" ><Image src="/Images/orangesharklogo.png" width="170" height="66" className="Logo"></Image></Link>            
{/*             
            <Button variant="contained"
            className={`${buttonClass.root} transitionClass`}
            >Login</Button> */}
            <button className="transitionClass">LOGIN</button>
           
            
            </div>
        </div>
    )
}

export default NavBar
