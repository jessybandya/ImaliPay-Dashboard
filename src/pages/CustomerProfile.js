import React, { useEffect } from 'react';
import './styles.css'
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const theme = createTheme();


const Overview = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <section className='bg-[#e5e7eb] dark:bg-main-dark-bg' id="content">
    <main>
    <div className="head-title">
    <div className="left">
      <ul className="breadcrumb">
        <li>
          <Link to="/customers" style={{fontSize:14,fontWeight:'500',color:'#101010'}}>Go back</Link>
        </li>
       /
        <li>
          <span style={{fontSize:14,fontWeight:'400',color:'#707070'}}>Jessy Bandya</span>
        </li>
      </ul>
    </div>
  </div>

  <div style={{backgroundColor:'#FFFFFF',borderRadius:10,marginTop:32,display:'flex',flexWrap:'wrap'}}>
     <div>
     <ThemeProvider theme={theme}>
     <Container component="main" maxWidth="xs">
       <Box
         sx={{
           marginTop: 0,
           display: 'flex',
           flexDirection: 'column',
         }}
       >
       <div style={{marginBottom:40}}>
       <div>
       <span style={{fontSize:24,fontWeight:'500',color:'#222222'}}>Customer's Profile</span>
     </div>
     <div style={{display:'flex',marginTop:15,alignItems:'center'}}>
     <Avatar {...stringAvatar('Jessy Bandya')} />
       <div style={{marginLeft:10}}>
       <span style={{fontWeight:'500',fontSize:14,color:'#344054'}}>Jessy Bandya</span>
       <p style={{fontWeight:'400',fontSize:12,color:'#667085',marginTop:-4}}>Customer</p>
       </div>
     </div>   
       </div>

         <Box>
           <Grid container spacing={2}>
             <Grid item style={{width:203}} xs={12} sm={6}>
             <label style={{
              fontSize:14,
              fontWeight:'400',
              color:'#808080'
             }}>First name</label>
             <input 
             style={{boxSizing: 'border-box',
             backgroundColor:'#FAFAFA',
             borderRadius:10,
             width: '100%',
             height: 52,
             padding:8
             }}
             type="text" value="Jessy"/>
             </Grid>
             <Grid style={{width:203}} item xs={12} sm={6}>
             <label style={{
              fontSize:14,
              fontWeight:'400',
              color:'#808080'
             }}>Last name</label>
             <input 
             style={{boxSizing: 'border-box',
             backgroundColor:'#FAFAFA',
             borderRadius:10,
             width: '100%',
             height: 52,
             padding:8
             }}
             type="text" value="Bandya"/>
             </Grid>
             
             <Grid item xs={12}>
             <label style={{
              fontSize:14,
              fontWeight:'400',
              color:'#808080'
             }}>Phone number</label>

             <div style={{display:'flex',gap:2,alignItems:'center',
             boxSizing: 'border-box',
             backgroundColor:'#FAFAFA',
             borderRadius:10,
             width: '100%',
             height: 52,
             padding:8            
            }}>
             <img
             loading="lazy"
             width="24"
             height="24"
             src={`https://flagcdn.com/w20/ke.png`}
             style={{borderRadius:5}}
             srcSet={`https://flagcdn.com/w40/ke.png 2x`}
             alt=""
           />
           <span style={{fontSize:16,fontWeight:'400',color:'#222222'}}>+254</span>
           <KeyboardArrowDownIcon />
             <span style={{marginLeft:5,fontSize:16,fontWeight:'400',color:'##101010'}}>746749307</span>
             </div>

             </Grid>
             <Grid item style={{width:203}} xs={12} sm={6}>
             <label style={{
              fontSize:14,
              fontWeight:'400',
              color:'#808080'
             }}>Date of birth</label>
             <input 
             style={{boxSizing: 'border-box',
             backgroundColor:'#FAFAFA',
             borderRadius:10,
             width: '100%',
             height: 52,
             padding:8
             }}
             type="text" value="02 Feb 1990"/>
             </Grid>
             <Grid style={{width:203}} item xs={12} sm={6}>
             <label style={{
              fontSize:14,
              fontWeight:'400',
              color:'#101010'
             }}>State of residence</label>
             <input 
             style={{boxSizing: 'border-box',
             backgroundColor:'#FAFAFA',
             borderRadius:10,
             width: '100%',
             height: 52,
             padding:8
             }}
             type="text" value="Nairobi"/>
             </Grid>

             <Grid style={{width:203}} item xs={12} sm={6}>
             <label style={{
              fontSize:14,
              fontWeight:'400',
              color:'#808080'
             }}>Bank name</label>
             <input 
             style={{boxSizing: 'border-box',
             backgroundColor:'#FAFAFA',
             borderRadius:10,
             width: '100%',
             height: 52,
             padding:8
             }}
             type="text" value="Access Bank PLC"/>
             </Grid>
             <Grid style={{width:203}} item xs={12} sm={6}>
             <label style={{
              fontSize:14,
              fontWeight:'400',
              color:'#808080'
             }}>Bank number</label>
             <input 
             style={{boxSizing: 'border-box',
             backgroundColor:'#FAFAFA',
             borderRadius:10,
             width: '100%',
             height: 52,
             padding:8
             }}
             type="text" value="102045674"/>
             </Grid> 
             
             <Grid item xs={12}>
             <label style={{
              fontSize:14,
              fontWeight:'400',
              color:'#808080'
             }}>Address</label>
             <input 
             style={{boxSizing: 'border-box',
             backgroundColor:'#FAFAFA',
             borderRadius:10,
             width: '100%',
             height: 52,
             padding:8
             }}
             type="text" value="university way, Nairobi Kenya"/>
             </Grid>
           </Grid>
         </Box>
       </Box>
     </Container>
   </ThemeProvider>
     </div>
     <div style={{alignItems:'center',justifyContent:'center',paddingTop:50,paddingBottom:50}}>
     <div style={{borderLeft:'1px solid #E5E5E5',height:'100%'}}></div>
     </div>
     <div>
     <ThemeProvider theme={theme}>
     <Container component="main" maxWidth="xs">
       <Box
         sx={{
           marginTop: 0,
           display: 'flex',
           flexDirection: 'column',
         }}
       >
        <div style={{paddingTop:40}}>
        <span style={{fontSize:14,fontWeight:'500',color:'#808080'}}>Transction history</span>

        <div style={{marginTop:16,display:'flex',alignItems:'center',justifyContent:'space-between',width:418,height:89,border:'1px solid #EAECF0',borderRadius:10,padding:15}}>
           <div>
           <span style={{fontWeight:'400',fontSize:14,color:'#667085'}}>Amount loaned(NGN)</span>
           <p style={{fontWeight:'600',fontSize:24,color:'#101828'}}>404,054</p>
           </div>
           <div style={{borderLeft:'1px solid #E5E5E5',height:'100%'}}></div>
           <div>
           <span style={{fontWeight:'400',fontSize:14,color:'#667085'}}>Amount paid(NGN)</span>
           <p style={{fontWeight:'600',fontSize:24,color:'#101828'}}>201,054</p>
           </div>
        </div>

        <p style={{fontWeight:'500',fontSize:14,color:'#808080',marginTop:20}}>Pending payment</p>

        <div style={{display:'block',width:418,marginTop:15}}>
           <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
             <div style={{display:'flex',gap:5}}>
             <span style={{height:50,width:50,border:'1px solid #000000',borderRadius:50/2,padding:10}}><MonetizationOnOutlinedIcon /></span>
             <span style={{fontWeight:'400',fontSize:14,color:'#101010'}}>1/4 Payment<p style={{fontWeight:'400',fontSize:12,color:'#808080'}}>21 Jul, 2022</p></span>
             <span style={{borderRadius:16,backgroundColor:'#FEF3F2',width:65,height:30,padding:'2px 8px'}}><span style={{color:'#B42318',fontWeight:'500',fontSize:12}}>Overdue</span></span>
             </div>
             <div style={{fontWeight:'500',fontSize:14,color:'#101010'}}>NGN 34,060</div>
           </div>

           <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
           <div style={{display:'flex',gap:5}}>
           <span style={{height:50,width:50,border:'1px solid #000000',borderRadius:50/2,padding:10}}><MonetizationOnOutlinedIcon /></span>
           <span style={{fontWeight:'400',fontSize:14,color:'#101010'}}>1/4 Payment<p style={{fontWeight:'400',fontSize:12,color:'#808080'}}>21 Jul, 2022</p></span>
           <span style={{borderRadius:16,backgroundColor:'#FEF3F2',width:65,height:30,padding:'2px 8px'}}><span style={{color:'#B42318',fontWeight:'500',fontSize:12}}>Overdue</span></span>
           </div>
           <div style={{fontWeight:'500',fontSize:14,color:'#101010'}}>NGN 34,060</div>
         </div>

         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
         <div style={{display:'flex',gap:5}}>
         <span style={{height:50,width:50,border:'1px solid #000000',borderRadius:50/2,padding:10}}><MonetizationOnOutlinedIcon /></span>
         <span style={{fontWeight:'400',fontSize:14,color:'#101010'}}>1/4 Payment<p style={{fontWeight:'400',fontSize:12,color:'#808080'}}>21 Jul, 2022</p></span>
         <span style={{borderRadius:16,backgroundColor:'#FEF3F2',width:65,height:30,padding:'2px 8px'}}><span style={{color:'#B42318',fontWeight:'500',fontSize:12}}>Overdue</span></span>
         </div>
         <div style={{fontWeight:'500',fontSize:14,color:'#101010'}}>NGN 34,060</div>
       </div>

       <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
       <div style={{display:'flex',gap:5}}>
       <span style={{height:50,width:50,border:'1px solid #000000',borderRadius:50/2,padding:10}}><MonetizationOnOutlinedIcon /></span>
       <span style={{fontWeight:'400',fontSize:14,color:'#101010'}}>1/4 Payment<p style={{fontWeight:'400',fontSize:12,color:'#808080'}}>21 Jul, 2022</p></span>
       <span style={{borderRadius:16,backgroundColor:'#FEF3F2',width:65,height:30,padding:'2px 8px'}}><span style={{color:'#B42318',fontWeight:'500',fontSize:12}}>Overdue</span></span>
       </div>
       <div style={{fontWeight:'500',fontSize:14,color:'#101010'}}>NGN 34,060</div>
     </div>


        </div>
        </div>
       </Box>
     </Container>
   </ThemeProvider>
     </div>
  </div>

    </main>
    {/* MAIN */}
  </section>
  );
};

export default Overview;
