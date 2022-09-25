import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import Lottie from "lottie-react";
import BrainAnim from "../../assets/6741-brain.json"

export default function App() {
  const [variant, setVariant] = React.useState("static");

  const variants = ["static", "floating", "sticky"];
  


  return (

      <Navbar 
      disableBlur={true}
      style={{backgroundColor:"white"}}
      isBordered = {false} 
      variant={"static"}>
        <Navbar.Brand>
        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />       
         <Lottie
        style={{marginRight:"5px"}}
        animationData={BrainAnim} loop={true} />
          {/* <AcmeLogo /> */}
          <Text b color="inherit" >
            IOT Remote
          </Text>
        </Navbar.Brand>

        <Navbar.Content 
            hideIn="xs">
          <Navbar.Link href="my-remote-controls">Show My Remote Control</Navbar.Link>
          <Navbar.Link href="add-new-remote-control">Add New Remote Control</Navbar.Link>
          <Navbar.Link href="detect-remote">AI Remote Control Detection</Navbar.Link>
       


        </Navbar.Content>

        <Navbar.Content 
        hideIn="xs">

<Navbar.Link href="about-page">About</Navbar.Link>
<Navbar.Link href="https://github.com/Darkksideyoda">Bahtiyar KARAKOÇ</Navbar.Link>

        </Navbar.Content>
        <Navbar.Collapse >
    
          <Navbar.CollapseItem >
            <Link
            
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="my-remote-controls"
            >
                Show My Remote Control
            </Link>
            
          </Navbar.CollapseItem>
     
          <Navbar.CollapseItem >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="add-new-remote-control"
            >
Add New Remote Control            
</Link>
            
          </Navbar.CollapseItem>


          <Navbar.CollapseItem >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="detect-remote"
            >
AI Remote Control Detection
</Link>
            
          </Navbar.CollapseItem>




          <Navbar.CollapseItem >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="about-page"
            >
About      
</Link>           



          </Navbar.CollapseItem>


          <Navbar.CollapseItem >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="https://github.com/Darkksideyoda"
            >
Bahtiyar KARAKOÇ      
</Link>           



          </Navbar.CollapseItem>



      </Navbar.Collapse>

        {/* <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content> */}
      </Navbar>
 
  )
}
