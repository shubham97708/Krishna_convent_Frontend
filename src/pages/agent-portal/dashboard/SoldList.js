import React ,{useEffect,useState} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PieChartIcon from '@material-ui/icons/PieChart';
import DeleteIcon from '@material-ui/icons/Delete';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EditIcon from '@material-ui/icons/Edit';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { deepOrange} from '@material-ui/core/colors';
import BaseUrl from '../../../services/BaseUrl'
import {getData } from '../../../services/FetchServices'
import {postData} from '../../../services/FetchServices';
import EditPostAdd from './EditPostAdd';
import GotoEnd from './GotoEnd'
import { Carousel } from 'react-responsive-carousel';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // For Image Slider
import Pagination from 'pagination-react-hooks';
import ClientViewList from './ClientViewList';
import CardContent from '@material-ui/core/CardContent';
import swal from 'sweetalert';


const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 250,
    minHeight:120,
    marginBottom:15,
    
    border:'0.5px solid green'
  },
  root: {
  // background:'#fff5cc',
  padding:'30px',
  align:'center',
  //marginLeft:'200px',
  //marginRight:'200px',
  marginTop:'10px',
  width:'100%',
  border:'0.5px solid green'
 },
 textField: {
   marginLeft: theme.spacing(1),
   marginRight: theme.spacing(1),
  // marginBottom:'-10px',
   marginTop:'10px',
 },
 dense: {
   marginTop: 19,
 },
 menu: {
   width: 200,
 },
 formControl: {
   marginTop:'30px',
   marginLeft:'2px',
   marginBottom:'-30px',
 },
 formControlState: {
   margin: theme.spacing(1),
   minWidth: 120,
   marginBottom:'-10px'
 },
 button: {
  margin: theme.spacing(1),
  //background:'#fff0b3',
},

button1: {
 margin: theme.spacing(1),
color:'black',
  fontWeight:'bold',  
},

soldbutton:{
 margin: theme.spacing(1),
color:'red',
  fontWeight:'bold',  
},

button2: { 
 backgroundColor: 'green',

 color:'white',
   fontWeight:'bold',  
   '&:hover': {
       backgroundColor: '#01a3a4',
     color:'white',
   fontStyle:"bold"},
},

 input: {
   display: 'none',
 },
 
 square: {
   color: '#fff',
   backgroundColor: deepOrange[500],
 },
 container:{
   marginLeft:'-30px',
   padding:'0px',
 },
 group: {
   margin: theme.spacing(1, 1),
 },
 bigAvatar:{
  padding: '2%',
  width: 'auto',
  height: 'auto'
 },


 text:{
   marginTop: theme.spacing(1)
 }
}));

function SoldList(props)
{  const classes = useStyles();
    const [getDataList,setDataList]=useState([])
    const [getMessage,setMessage]=React.useState('')
    const [getTrue,setTrue]=useState(false) 

  const setuserdata = async ()  =>{
    let rec=  JSON.parse(localStorage.getItem('AGENT'))
     console.log("Agent Image",rec)
     let body ={
      "agentid":rec[0].id
    }

     let result = await  postData('postadd/displaySoldList',body)    
     setDataList(result)
     console.log("Agent data",result)
   }


   


      const handleActivateList=async(id)=>{        
        var body={'id':id}
        let result=await postData('postadd/updateActivateList1',body)
        if(result)
        {
          swal("Enviar", "Post activado con éxito", "success");     
        }
        else
        {
          swal("Enviar", "Error en la publicación activada", "error");
        }   
        setuserdata() 
    }

    



    const deleteDataPost=async(body)=>{
     
      let result=await postData('postadd/deleteSoldList',body)
   
    if(result)
    {
      swal("Enviar", "Publicación eliminada con éxito", "success"); 
    }
    else
    {
      swal("Enviar", "Errron en la publicación eliminada con éxito", "error");
    }
    setuserdata()
   setTrue(true)
    }










   const handleSubmitDelete=async(id)=>{
    var body={id:id}
    
    swal({
      title: "Estas seguro",
      text: "Una vez eliminado, no podrás recuperar esto!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        deleteDataPost(body)
      }else{
        swal("La tarea es segura!");
      }
    });
   
  }


   const handleClick=(view)=>{  
    props.changeView(view) 
    } 
  

    useEffect(()=>{
      setuserdata(); 
    },[]) 
    
     useEffect(function(){
       setuserdata(); 
       setTrue(false)
       },[getTrue])
    

       function ShowImage(picture){
        var Picture=[]
        var Pic =picture.split(' ')
        for(var i=0;Pic[i];i++){
          Picture[i]=Pic[i]
        }
        return(Picture.map(item=>( <div>
          <img src={`${BaseUrl}/images/${item}` } height={250} width="100%" />
       </div>))
         
        )
      }

    
      const show = (item) => (   
    
   <Card className={classes.card}>
     <CardContent>

   <Grid container >

   <Grid item xs={12} sm={5}>
          <Carousel showThumbs={false}>
          {ShowImage(item.picture)}
            </Carousel> 
          {/* <Avatar variant="square" alt="image"  src={`${BaseUrl}/images/${item.picture}`} className={classes.bigAvatar} /> */}     
          </Grid>

          <Grid item xs={12} sm={7}>
          <Typography variant="body1" variant="h6" component="h4" color="primary" style={{marginLeft:10}}>
                <b> { item.title} </b>

                 <Typography className={classes.text} variant="h7" component="h4" color="textSecondary">
               <b>Añade un número:</b> {item.id}
              </Typography>
              </Typography>         

          

          <Typography className={classes.text} variant="h7" component="h4" color="textSecondary" style={{marginLeft:10}}>
               <b>Habla a:</b>  {item.mapaddress}
              </Typography>

              
              <Typography className={classes.text} variant="h7" component="h4">
                 <b>Fecha:</b> { 
                  item.register_date
                 }
              </Typography>

              <Divider/><Divider/>

<Grid container spacing={2}>
<Grid item xs={12} sm={6}>
<Button
color="Primary"
className={classes.button}
startIcon={<VisibilityIcon />}
onClick={()=>handleClick(<ClientViewList history={props.history}  postid={item.id} />)}
>
Visitar
</Button>
{item.visit}
</Grid>

<Grid item xs={12} sm={6}>                 
<Button
color="Default"
className={classes.button}
startIcon={<PieChartIcon />}
>
Estática
</Button>
</Grid>
</Grid>

</Grid>

 </Grid>


   <Divider/><Divider/>
   <Grid container xs={12}>

   
   <Button
        color="Default"
        className={classes.button1}
        startIcon={<PlayArrowIcon />}
        onClick={()=> handleActivateList(item.id)}
      >
        Volver a publicar
      </Button>


      <Button
        color="Default"
        className={classes.button1}
        startIcon={<DeleteIcon />}
        onClick= {()=>handleSubmitDelete(item.id)}
      >
        Eliminar
      </Button>


      <Button
        color="Primary"
        className={classes.soldbutton}
        startIcon={<VisibilityIcon />} 
        onClick={()=>handleClick(<GotoEnd history={props.history}  postid={item.id} />)}
      >
      Explorar
      </Button>

     </Grid>
     </CardContent>
  </Card>
      
 
   )
 
   
    return(
   <div style={{marginLeft:-40}}>

{getDataList==''?<center><img src='/images/nodata.jpg'/></center>:<Pagination
      data={getDataList}
      Show={show}
      displayNumber="4"
      previousText="Prev"
      nextText="Next"
  />}
   </div>
  )
}
export default SoldList