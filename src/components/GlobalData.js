import React, { useEffect ,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

const useStylesTypography = makeStyles ({
root:{
  width:'100%',
  maxwidth: 500,
},
});

export default function GlobalData() {
    const classes = useStyles();
   const classTypography = useStylesTypography();

   const [globalData,setGlobalData] =useState();
   const [dataLoading,setDataLoading]  =useState(false);

   useEffect( () => {
   async function fetchGlobalData() {
  setDataLoading(true);
   const apiResponse =  await fetch('https://api.thevirustracker.com/free-api?global=stats');
   console.log(apiResponse);
   const dataFromAPI = await apiResponse.json();
   console.log(dataFromAPI);
   setGlobalData(dataFromAPI);
   setDataLoading(false);
 }
 fetchGlobalData();
},[])

const loading ="loading";

if(dataLoading){
  return (
    <div className={classes.root} >
      <Paper elevation={3} >
        <div className={classTypography.root}>
      <Typography variant="subtitle2" gutterBottom>
        Global Data
      </Typography>
      <Typography variant="h4" gutterBottom>
        {loading}
      </Typography>
      </div>
       </Paper>
       <Paper elevation ={3}>
       <div className={classTypography.root}>
      <Typography variant="subtitle2" gutterBottom>
        Active Cases
      </Typography>
      <Typography variant="h4" gutterBottom>
      {loading}
      </Typography>
      </div>
       </Paper>
       <Paper elevation={3}>
       <div className={classTypography.root}>
      <Typography variant="subtitle2" gutterBottom>
        Recovered
      </Typography>
      <Typography variant="h4" gutterBottom>
      {loading}
      </Typography>
      </div>
       </Paper>
       <Paper elevation ={3}>
       <div className={classTypography.root}>
      <Typography variant="subtitle2" gutterBottom>
        Deaths
      </Typography>
      <Typography variant="h4" gutterBottom>
      {loading}
      </Typography>
      </div>
       </Paper>
    </div>
  );
}

  return (
    <div className={classes.root} >
      <Paper elevation={3} >
        <div className={classTypography.root}>
      <Typography variant="subtitle2" >
      <img src= {require('../components/global.png')} alt="global" width="65" height ="50" align= "center"/>Global Data
      </Typography>
      <Typography variant="h4" gutterBottom>
        <NumberFormat value ={globalData && globalData.results && globalData.results[0].total_cases} thousandSeparator ={true} displayType ={"text"}/>
      </Typography>
      </div>
       </Paper>
       <Paper elevation ={3}>
       <div className={classTypography.root}>
      <Typography variant="subtitle2" gutterBottom>
      <img src= {require('../components/active.png')} alt="global" width="35" height ="30" align= "center"/> Active Cases
      </Typography>
      <Typography variant="h4" gutterBottom>
<NumberFormat value ={globalData && globalData.results && globalData.results[0].total_unresolved + globalData.results[0].total_active_cases} thousandSeparator ={true} displayType ={"text"}/>
      </Typography>
      </div>
       </Paper>
       <Paper elevation={3}>
       <div className={classTypography.root}>
      <Typography variant="subtitle2" gutterBottom>
      <img src= {require('../components/recovered.png')} alt="global" width="50" height ="40" align= "center"/>  Recovered
      </Typography>
      <Typography variant="h4" gutterBottom>
     <NumberFormat value= {globalData && globalData.results && globalData.results[0].total_recovered }thousandSeparator ={true} displayType ={"text"}/>
      </Typography>
      </div>
       </Paper>
       <Paper elevation ={3}>
       <div className={classTypography.root}>
      <Typography variant="subtitle2" gutterBottom>
      <img src= {require('../components/expired.png')} alt="global" width="35" height ="30" align= "center"/>Deaths
      </Typography>
      <Typography variant="h4" gutterBottom >
      <NumberFormat value={globalData && globalData.results && globalData.results[0].total_deaths} thousandSeparator ={true} displayType ={'text'}/>
      </Typography>
      </div>
       </Paper>
    </div>
  );
}
