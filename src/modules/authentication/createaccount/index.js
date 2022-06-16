import React from "react";
import "./scss/index.scss";
import { InputField, Button } from "../../../components";
import mainlogo from "../../../assests/images/mainlogo.svg";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from '@mui/material/InputLabel';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const CreateAccount = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState("");
  // const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };
  const handleChange = (event) => {
    setPersonName(event.target.value)
    // setOpen(event.target.value);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen">
      <div className="my-2">
        <img src={mainlogo} alt="logo" />
      </div>
      <div className="create-cont py-2">
        <div className="resp-input text-input py-1 ">
          <InputField
            placeholder="Enter Your Email"
            type="email"
            height="50px"
            //  icons={ <img src={vector} alt="message" className="absolute top-5 right-4" /> }
            labeluse="email"
            label={"Email"}
            desc="(where you want to recieve confirmation)"
          />
        </div>
        <div className="password-input py-1">
          <InputField
            placeholder="Enter Your Password"
            type="password"
            height="50px"
            //  icons={ <img src={key} alt="key" className="absolute top-5 right-4" /> }
            label="Password"
            labeluse={"password"}
          />
        </div>
        <div className="text-input py-1">
          <InputField
            placeholder="Enter Your Store Name"
            type="text"
            height="50px"
            label="Store Name"
            labeluse={"store"}
            //  icons={ <img src={phone} alt="message" className="absolute top-5 right-4 z-30" /> }
          />
        </div>
        <div className="twobox flex justify-between gap-2">
          <div className="text-input py-1">
            <InputField
              placeholder="Country"
              type="text"
              height="50px"
              //  icons={ <img src={flag} alt="message" className="absolute top-5 right-4 z-30" /> }
              label="Country"
              labeluse={"country"}
            />
          </div>
          <div className="text-input py-1">
            <InputField
              placeholder="Enter City"
              type="text"
              height="50px"
              //  icons={ <img src={flag} alt="message" className="absolute top-5 right-4 z-30" /> }
              label="City"
              labeluse={"city"}
            />
          </div>
        </div>
        {/* Another flex  */}
        <div className="twobox flex justify-between gap-2">
          <div className="text-input py-1">
            <InputField
              placeholder="Enter Code"
              type="number"
              height="50px"
              //  icons={ <img src={flag} alt="message" className="absolute top-5 right-4 z-30" /> }
              label="Zip Code"
              labeluse={"zipcode"}
            />
          </div>
          <div className="text-input py-1">
            <InputField
              placeholder="+91-7527037746"
              type="number"
              height="50px"
              //  icons={ <img src={flag} alt="message" className="absolute top-5 right-4 z-30" /> }
              label="Phone Number"
              labeluse={"phonenumber"}
            />
          </div>
        </div>



        {/* Category */}
        <div className="text-input py-2">
          <FormControl sx={{  width: '100%'}}>
          {/* <InputLabel>Age</InputLabel> */}
          <label htmlFor="demo-controlled-open-select" className="labels" >Choose Your Category</label>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={personName}
          displayEmpty
          // label="Select Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            Select Category
          </MenuItem>
          <MenuItem value={"gentstailor"}>Gents Tailor</MenuItem>
          <MenuItem value={"ladiestailor"}>Ladies Tailor</MenuItem>
          <MenuItem value={"Designer"}>Designer</MenuItem>
          <MenuItem value={"gentstailorandladiestailor"}>Gents Tailor and Ladies Tailor</MenuItem>
          <MenuItem value={"alteration"}>Aleration</MenuItem>
          <MenuItem value={"handwave"}>Hand Wave</MenuItem>
        
        </Select>
          </FormControl>
        </div>

        <div className="buttons flex items-center  gap-2">
          <div className="btn my-4">
            <Button value={"Reset"} type="submit" />
          </div>
          <div className="button my-4 ">
            <Button value={"Submit"} type="submit" />
          </div>
        </div>
        {/* <div className="break py-2 cursor-pointer">
          or
        </div>
        <div className="social-link justify-center flex gap-2 my-2">
           <div className="facebook cursor-pointer"><img src={facebook} alt="facebook" /></div>
           <div className="gmail cursor-pointer"><img src={gmail} alt="gmail" /></div>
        </div> */}
      </div>
    </div>
  );
};
