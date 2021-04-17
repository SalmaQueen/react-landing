import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
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
    marginTop:"3rem",
    padding: "30px 50px 10px 50px",
    width:"100%",
    color:"black",
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
      {/* <div>
        <span>Name of Company </span>
        <Input style={{ width: 300 }} id="standard-adornment-amount" />
      </div> */}

      <GridContainer justify="center" alignItems="center">
        <GridItem xs={7} sm={7} md={7}>
          <TextField
            id="standard-textarea"
            label="email"
            placeholder="e.g queens@holding.com"
            multiline
            fullWidth
          />
          {/* <span>email</span>
          <Input id="standard-adornment-amount" /> */}
        </GridItem>
        <GridItem xs={5} sm={5} md={5}>
          <TextField
            id="standard-textarea"
            label="Tel No"
            placeholder="e.g +9855855"
            multiline
            fullWidth
          />
          {/* <span>Tel No</span>
          <Input id="standard-adornment-amount" /> */}
        </GridItem>
      </GridContainer>
      <div className={classes.input}>
        <TextField
          id="standard-textarea"
          label="Property Name"
          placeholder="e.g 3 bedroom flat"
          multiline
          fullWidth
        />
      </div>
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
{/* 
    <div className="input-group bg-dark">
  <span className="input-group-text">First and last name</span>
  <input type="text" aria-label="First name" className="form-control"/>
  <input type="text" aria-label="Last name" className="form-control"/>
</div> */}



<hr/>

<Image/>
<Image/>
<hr/>


</div>

<Footer/>
</>
  );
}
