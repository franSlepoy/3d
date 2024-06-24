import { Box, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <Box p={2} bgcolor={"#00FF00"} border={"solid white 1px "} width={"97.7%"} display={"flex"}>
        <Box width={"70%"} >
          <Typography
          
            sx={{bgcolor:"white", width:"280px",ml:6,p:"2px", fontFamily: "Alegreya", fontSize: "18px", color: "" }}
          >
            -_-__-_SYNESTHESIA LAB_---_--__
          </Typography>
        </Box>
        <Box width={"15%"}>
          <Typography
            sx={{bgcolor:"white", width:"110px", p:"2px", textAlign:"center",  fontFamily: "Alegreya", fontSize: "18px",  }}
          >
            PROYECTOS
          </Typography>
        </Box>
        <Box width={"15%"}>
          <Typography
            
            sx={{bgcolor:"white", width:"148px", p:"2px", textAlign:"center",  fontFamily: "Alegreya", fontSize: "18px",  }}
          >
            QUIENES SOMOS
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
