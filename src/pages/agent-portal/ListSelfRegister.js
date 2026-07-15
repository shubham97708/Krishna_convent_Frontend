import React,{useEffect,useState} from "react"

import {getData} from '../../services/FetchServices';
import {postData} from '../../services/FetchServices';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import StarRateIcon from '@material-ui/icons/StarRate';
import Pagination from 'pagination-react-hooks';

const useStyles = makeStyles(theme => ({

    card: {
      minWidth: 100,
      minHeight:120,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    root: {
      background:'#CCD1D1',
      padding:'30px',
      marginLeft:'75px',
      marginRight:'75px',
      marginTop:'10px'
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    bigAvatar: {
      margin: 10,
      width: 200,
      height:200,
    },
    
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    icon:{
      color:'#ffcc00',
    }
  }));

export default function ListSelfRegister(props)
{   const classes = useStyles();
    const [getList,setList]=useState([])
    const [getMessage,setMessage]=React.useState('')
    const [getId,setId]=React.useState('')
    const [getFirstName,setFirstName]=useState('')
    const [getLastName,setLastName]=useState('')    
    const [getDate,setDate]=useState('')
    const [getEmailId,setEmailId]=useState('')
    const [getPhone,setPhone]=useState('')     



    const handleSubmitDelete=async()=>{
        var body={'Id':getId}
        let result=await postData('selfregister/deleteRecord',body)
        if(result)
        {setMessage("Record Deleted..")
        clearValues()
      }
        else
        {
         setMessage("Fail to Delete Record...")
        }
        fetchAllSelfRegister()
      
      }








      
const fetchAllSelfRegister=async()=>{
 let list=await getData('selfregister/displayAll')
  setList(list)
}



const clearValues=()=>{ 
    setFirstName('')
    setLastName('')   
    setDate('')
    setEmailId('')
    setPhone('')    
}


const show = (item) => (  
    

<Card className={classes.card}>
    <CardContent>
    

      
   <Grid container xs={12} >

   <Grid item xs={3}>
    <Avatar alt="User image" src="/static/images/avatar/1.jpg" className={classes.bigAvatar} />
    </Grid>

    <Grid item xs={9} >
    <TextField
      id="outlined-password-input"
      value={item.id}
      label="User Id"
      className={classes.textField}
      type="User Id"
      autoComplete="User Id"
      margin="normal"
      variant="outlined"
    />

<TextField
      id="outlined-password-input"
      value={item.firstname}
      label="First Name"
      className={classes.textField}
      type="First Name"
      autoComplete="First Name"
      margin="normal"
      variant="outlined"
    />

<TextField
      id="outlined-password-input"
      value={item.lastname}
      label="Last Name"
      className={classes.textField}
      type="Last Name"
      autoComplete="Last Name"
      margin="normal"
      variant="outlined"
    />

    
    <TextField
     id="outlined-password-input"
      value={item.date}
      label="User Since"
      className={classes.textField}
      type="User Since"
      autoComplete="User Since"
      margin="normal"
      variant="outlined"
    />
    
    <TextField
      id="outlined-password-input"
      value={item.phone}
      label="Phone Number"
      className={classes.textField}
      type="Phone Number"
      autoComplete="Phone Number"
      margin="normal"
      variant="outlined"
    />

    
    <TextField
      id="outlined-password-input"
      value={item.emailid}
      label="Email Id"
      className={classes.textField}
      type="E-mail"
      autoComplete="E-mail"
      margin="normal"
      variant="outlined"
    />
    
    <Grid >
    <Button variant="contained" color="primary" className={classes.button}>Aprobar</Button>
    <Button onClick={handleSubmitDelete} variant="contained" color="primary" className={classes.button}>Desaprovado</Button>
    </Grid>
    
    </Grid>
    </Grid>
  

 </CardContent>
  </Card>
)








  
  
  
  


return(<div>

<Pagination
            data={getList}
            Show={show}
            displayNumber="4"
            previousText="Prev"
            nextText="Next"
        />

</div>)

}