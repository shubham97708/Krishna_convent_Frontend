import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      input: {
        display: 'none',
      },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    img:{width:60,height:60,padding:5}
  }));
  

export default function MultipleImageUploadComponent(props) {

const classes=useStyles()
    const [file,setFile]=useState([])
    const [fileU,setFileU]=useState([null])
    let fileArray = [];
    let fileObj=[]

    function uploadMultipleFiles(e) {
        fileObj.push(e.target.files)
        let arr=[]
        for (let i = 0; i < fileObj[0].length; i++) {
            console.log(URL.createObjectURL(fileObj[0][i]))
            fileArray.push(URL.createObjectURL(fileObj[0][i]))
            arr.push(e.target.files[i])
        }
        // this.setState({ file: this.fileArray })
        console.log(fileArray)
        setFile(fileArray)
        console.log("Arr",arr)
        setFileU(arr)
    }
    function removeitem(url){
        console.log(url)
        let rslt=[]
        let up=[]
        console.log("Array",fileArray)
        file.map((result,key)=>{
            if(url!=result){
                rslt.push(result)
                up.push(fileU[key])
            }
            console.log(result)
        },{})
        
        console.log(rslt)
        console.log(up)
         setFile(rslt)
         setFileU(up)
    }

        return (
            <React.Fragment>
                <div className="form-group multi-preview">
                    {(file).map(url => (<React.Fragment>
                        <img style={{position:'absolute',width:20,height:20}} src='../../crs.png'  onClick={()=>removeitem(url)} ></img>
                        <img src={url} className={[classes.img]} alt="..." />
                        </React.Fragment>
                    ))}
                </div>

                <div className="form-group">
                    {/* <input type="file" className="form-control" onChange={uploadMultipleFiles} multiple /> */}
                    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        onChange={uploadMultipleFiles}
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      
    </div>
                </div>
                </React.Fragment>
        )
}