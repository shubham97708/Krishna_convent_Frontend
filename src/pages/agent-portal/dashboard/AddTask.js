import React from 'react';

import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {postData, getData} from '../../../services/FetchServices'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import ChipInput from 'material-ui-chip-input';
import { OutlinedInput } from '@material-ui/core';
import swal from 'sweetalert';


const useStyles = makeStyles(theme => ({
  '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(2),
      // display: 'flex',
      // flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.

      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    formControl: {
      marginBottom:19,
      minWidth: 100,
    },
    textField:{
      marginBottom:20,
      marginTop: theme.spacing(0),
    },
    button:
    {
      backgroundColor:'green',
      marginBottom: '5%' ,
  },
}));

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};



export default function AddTask(props) {
  const classes = useStyles();
  const [getCategoryid, setCategoryid] = React.useState('')
  const [getSubCategoryid,setSubCategoryid] = React.useState('')
  const [getAreainterest, setAreainterest]=React.useState([])
  const [getMinimum, setMinimum]=React.useState('')
  const [getMaximum, setMaximum]=React.useState('')
  const [getDescription, setDescription]=React.useState('')
  const [getMessages, setMessages ]=React.useState('')
  const [getList,setList]=React.useState([])
  const [getSCList,setSCList]=React.useState([])

  const inputLabel = React.useRef(null);
  const [labelWidth, setlabelWidth] = React.useState(0);
  const [getOpen, setOpen]=React.useState(false)
  const [values, setValues] = React.useState({
    //textmask: '(1  )    -    ',
    numberformat: '',
  });

  

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };



  React.useEffect(() => {
    readAllRecords()
    readAllSCRecords()
    setlabelWidth(inputLabel.current.offsetWidth);
  }, []);


  

  const onCategoryChange=(event)=>{
    setCategoryid(event.target.value)
  }

  const readAllRecords=async()=>{
    var list=await getData('category/displayall')
    setList(list)
    }
    const menuList=()=>{
      return getList.map((item,index)=>{
       return( <MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>)
      })
       }



 const onSubCategoryChange=(event)=>{
  setSubCategoryid(event.target.value)
  }

  const readAllSCRecords=async()=>{
  var list=await getData('subcategory/displayall')
   setSCList(list)
   }
    const menuSCList=()=>{
    return getSCList.map((item,index)=>{

    return( <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>)
    })
    }


  const handleClickOpen =async () => {
    setOpen(true);
  };

  const handleClickClose =async () => {
    setOpen(false);

  };


  const handleSubmit=async()=>{
    var formData=new FormData()
    if(getCategoryid != '' && getSubCategoryid != '' && getAreainterest != '' && getMinimum != '' && getMaximum != '' && getDescription != ''){
    formData.append('categoryid',getCategoryid)
    formData.append('subcategoryid',getSubCategoryid)
    formData.append('areainterest',getAreainterest)
    formData.append('minimum',getMinimum)
    formData.append('maximum',getMaximum)
    formData.append('description',getDescription)


    let result=await postData('addcontact/addnewrecord',formData)
    console.log(formData)
    if(result){
      swal("Enviar", "Tarea y contacto agregados con éxito", "success");
      props.addtaskclose() 
      props.addcontactclose()
      // await setMessages("Record Submitted")
      // await setCategoryid('')
      // await setSubCategoryid('')
      // await setAreainterest('')
      // await setMinimum('')
      // await setMaximum('')
      // await setDescription('')

    }
    else{
      swal("Enviar", "Error al agregar información", "error");
     // setMessages("Faild to Submit")
    }
  }else {
    swal("Enviar", "Por favor llene toda la columna", "error");
  }
    }

return(<Container maxWidth="xs">
   <Paper className={classes.paper}>
   <Grid container spacing={0}>

   <Grid container xs={12}>
   <Grid item sm={6}>
      <Typography>
    <h2> Agregar tarea </h2>
      </Typography>
</Grid>

<Grid item sm={6} align='Right'>
  <Button  onClick={props.addtaskclose} >
  <HighlightOffIcon/>
  </Button>
</Grid>
</Grid>




 <Grid item xs={12}>
 <FormControl variant="outlined" className={classes.formControlState} className={clsx(classes.textField, classes.dense)} fullWidth>
     <InputLabel ref={inputLabel} htmlFor="outlined-houses-simple">Subcategoría</InputLabel>
     <Select

      value={getSubCategoryid}
      onChange={(event)=>onSubCategoryChange(event)}
      input={<OutlinedInput labelWidth={95} name="houses" id="outlined-houses-simple"/>}
      
     >
       {menuSCList()}
     </Select>
   </FormControl>
 </Grid>


 <Grid item xs={12}>
<FormControl variant="outlined" className={classes.formControlState} className={clsx(classes.textField, classes.dense)} fullWidth>
     <InputLabel ref={inputLabel}  htmlFor="outlined-houses-simple">Categoría</InputLabel>

     <Select
      value={getCategoryid}
      onChange={(event)=>onCategoryChange(event)}
      input={<OutlinedInput labelWidth={labelWidth} name="houses" id="outlined-houses-simple"/>}
     >
      {menuList()}
     </Select>
   </FormControl>
 </Grid>

 <Grid item xs={12}>
 <TextField
        id="outlined-dense"
        label="Area For Interest"
        multiline
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={getAreainterest}
        margin="normal"
        variant="outlined"
        onChange={(event)=>setAreainterest(event.target.value)}
        fullWidth
      />
 </Grid>

 <Grid item xs={6}>
 <TextField
          id="outlined-number"
          label="Minimum"
          // value={values.numberformat}
          className={clsx(classes.textField, classes.dense)}
          // onChange={handleChange('numberformat')}
          id="formatted-numberformat-input"
style={{padding:1}}
          value={getMinimum}
          onChange={(event)=>setMinimum(event.target.value)}
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
          margin="normal"
          variant="outlined"
        />
</Grid>
            <Grid item xs={6} >
            <TextField
          id="outlined-number"
          label="Maximum"
          className={clsx(classes.textField, classes.dense)}
        //   value={values.numberformat1}
        // onChange={handleChange('numberformat1')}
        id="formatted-numberformat-input"
        style={{padding:1}}
        value={getMaximum}
        onChange={(event)=>setMaximum(event.target.value)}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
          margin="normal"
          variant="outlined"
        />
            </Grid>

<Grid item xs={12}>
 <TextField
        id="outlined-dense"
        label="Description"
        multiline
        rows="2"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        value={getDescription}
        margin="normal"
        variant="outlined"
        onChange={(event)=>setDescription(event.target.value)}
        fullWidth
      />
 </Grid>

 <Grid item xs={12} align='Right'>
 
 <Button variant="contained"  onClick={handleSubmit}color="primary" className={classes.button}>
 Salvar
      </Button>

   <Typography>
    {getMessages}
    </Typography>

 </Grid>
</Grid>
</Paper>
</Container>)
}

