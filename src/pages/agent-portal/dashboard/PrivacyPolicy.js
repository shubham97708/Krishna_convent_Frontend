import React , { useEffect , useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import { ListItem, List } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },

  root: {
    maxWidth: "95%",
  },
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  
    
  }));

 

export default function PrivacyPolicy(props){


  const classes = useStyles();


return(
<div>





{/* Card For Booking  */}

<div style={{marginTop:"2%" }}>


<Grid container spacing={1} style={{marginTop:"0%"}}>
<Grid item xs={12}>
<Card >


  <div style={{height:"35px",width:"100%",padding:4, backgroundColor:"#FFF",borderRadius:2}}>
  <Typography style={{color:"grey",fontSize:36,textAlign:'center',marginBottom:20,}} >Privacy Policy</Typography>

  </div>  

<CardContent>
<hr/>
<div style={{width:"100%"}}>
    <ul >
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            KAIZEN respects your right to privacy. Any personal information that you share with us, like your name, date of birth, address, marital status, telephone number, credit card particulars and the like, shall be entitled to privacy and kept confidential.

            </Typography>
            </li>
            <br></br>
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            KAIZEN assures you that your personal information shall not be permitted to be used/disclosed, save for the purpose of doing the intended business with you, or if required to be disclosed under the due process of law.
            </Typography>
            </li>
            <br></br>
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            KAIZEN assures you that in the event of your personal information being shared with its subsidiaries, business associates etc., such sharing of information shall be for the purpose of doing the intended business with you.
            </Typography>
            </li>
            <br></br>
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            KAIZEN reserves its rights to collect, analyze and disseminate aggregate site usage patterns of all its visitors with a view to enhancing services to its visitors. This includes sharing the information with its subsidiaries, and business associates as a general business practice.

            </Typography>
            </li>
            <br></br>
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            In the course of its business KAIZEN may hold online contests and surveys as permitted by law and it reserves its right to use and disseminate the information so collected to enhance its services to the visitors. This shall also include sharing the information with its subsidiaries and business associates as a general business practice.

            </Typography>
            </li>
            <br></br>
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            If you have any questions or concerns regarding your privacy issues, please do not hesitate to contact KAIZEN at anandsharmabb20@gmail.com.
            </Typography>
            </li>
            <br></br>
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            While KAIZEN assures you that it will do its best to ensure the privacy and security of your personal information, it shall not be responsible in any manner whatsoever for any violation or misuse of your personal information by unauthorized persons consequent to misuse of the internet environment.
            </Typography>
            </li>
            <br></br>
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            Cookies:- To personalize your experience on our website or to support one of our promotions, we may assign your computer browser a unique random number called a cookie. “Cookies” enhance website performance in important ways like personalizing your experience, or making your visit more convenient. Your privacy and security are not compromised when you accept a “cookie” from our website. KAIZEN does not use “cookies” to collect personal information. “Cookies” cannot read data from your computer’s hard disk or read cookie files from other websites.
            </Typography>
            </li>
            <br></br>
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            KAIZEN reserves its rights to revise this privacy policy from time to time at its discretion with a view to making the policy more user friendly.

            </Typography>
            </li>

            <br></br>
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            By accessing or using this website, you acquiesce to the privacy policy and agree to be bound by the terms and conditions of the website use.
            </Typography>
            </li>

            <br></br>
            <li>
            <Typography style={{color:"grey",fontSize:15,textAlign:'justify'}} >
            In the design of our website, we have taken care to draw your attention to this privacy policy so that you are aware of the terms under which you may decide to share your personal information with us. Accordingly, should you choose to share your personal information with us, KAIZEN will assume that you have no objections to the terms of this privacy policy.
            </Typography>
            </li>

    </ul>

  </div>







</CardContent>




</Card>
</Grid>
</Grid>

</div>









    {/* <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>  */}
    
</div>
  )
}