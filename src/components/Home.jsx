// import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import '../index.css'
import { Box } from "@mui/material";
import { Prints } from "./Prints";
export const Home = () => {
  
  
  return (
    <>
      {/* <Navbar /> */}
      <Sidebar ss={<Prints/>}/>
      <Box position={"relative"}>
        

     
      </Box>
      
    </>
  );
};
