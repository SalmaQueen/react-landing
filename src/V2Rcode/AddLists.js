import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import {Link} from "react-router-dom"
// import Navbar from '../Landing/components/Navbar'
import GridContainer from "./GridContainer";
import GridItem from "./GridItem";
import { makeStyles } from "@material-ui/core/styles";
import CheckBox from "./CheckBox";
// import CheckBox2 from "./CheckBox2";
import Paper from "@material-ui/core/Paper";
import PropertyCheckboxes from './PropertyCheckboxes'
// import "./styles.css";
import Image from './Image'
import Footer from './Footer'
import Navbar from './Navbar'

const styles = makeStyles((theme) => ({
  paper: {
    margin: "30px 0px",
    marginTop:"10rem",
    padding: "30px 50px 10px 50px",
    width:"100%",
    color:"blue",
    // opacity:"0.5",
  },

  center: {
    textAlign: "center",
    // backgroundColor:"black"
  },
  checkBox: {
    textAlign: "center",
    padding: "15px 0px",
    backgroundColor:"blue",
    color:"white"
  },
  margin: {
    margin: theme.spacing(1)
  },
  input: {
    textAlign: "center",
    padding: "15px 0px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function AddLists() {
  const classes = styles();

  return (
    <>
    <Navbar/>
    <div >
    <Paper elevation={0} className={classes.paper} className=" container ">
      <Typography variant="h5" className={classes.center}>
        Add Property
      </Typography>
      <div className={classes.checkBox}>
        <CheckBox />
      </div>
      <div className={classes.input}>
        <TextField
          id="standard-textarea"
          label="Name of Company"
          placeholder="e.g  queens holding"
          multiline
          fullWidth
        />
      </div>
      <div className={classes.input}>
        <TextField
          id="standard-textarea"
          label="Property Name"
          placeholder="e.g 3 bedroom flat"
          multiline
          fullWidth
        />
      </div>

      <GridContainer justify="center" alignItems="center">
        <GridItem xs={4} sm={4} md={4}>
          <TextField
            id="standard-textarea"
            label="Enter Location"
            placeholder=" "
            multiline
            fullWidth
          />
          
       
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
        <TextField
            id="standard-textarea"
            label="Doors & windows"
            placeholder=" "
            multiline
            fullWidth
          />
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
          <TextField
            id="standard-textarea"
            label="Number of bathrooms"
            placeholder=""
            multiline
            fullWidth
          />
       
        </GridItem>
      </GridContainer>

      <GridContainer justify="center" alignItems="center" style={{color:"blue"}}>
        <GridItem xs={4} sm={4} md={4}>
          <TextField
            id="standard-textarea"
            label="Exterior Construction"
            placeholder=" "
            multiline
            fullWidth
          />
          
       
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
        <TextField
            id="standard-textarea"
            label="Lot size"
            placeholder=" "
            multiline
            fullWidth
            
          />
        </GridItem>
        <GridItem xs={4} sm={4} md={4}>
          <TextField
            id="standard-textarea"
            label="Nearby Amenities"
            placeholder=""
            multiline
            fullWidth
          />
       
        </GridItem>
      </GridContainer>


     
      <div>
        <GridContainer alignItems="center">
         
          <GridItem xs={10} sm={10} md={10}>
          <Typography variant="subtitle1" >Location</Typography>

            <FormControl variant="outlined" className={classes.formControl} >
              <InputLabel id="demo-simple-select-outlined-label" className=" text-dark">
                Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="country"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label" className=" text-dark">
                Area
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="country"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            
            
          </GridItem>
          
        

        </GridContainer>
        
       
          
      
      </div>

      
 
    </Paper>
    
    <PropertyCheckboxes/>




<hr/>

<Image/>
<Image/>
<Image/>
<Image/>
<Image/>


<Link type="button" to="/pay" className="btn text-center" style={{width:"30%", backgroundColor:"orange",
 marginLeft:"25rem", padding:"1%", borderRadius:"30px"}}>Submit</Link>
<hr/>


</div>

<Footer/>
</>
  );
}
