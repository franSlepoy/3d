
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const FloatingText = styled(Typography)`
  @keyframes floatAnimation {
    0% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-5px) rotate(0.5deg); }
    50% { transform: translateY(0) rotate(-0.5deg); }
    75% { transform: translateY(5px) rotate(0.25deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
  
  @keyframes colorChange {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  animation: floatAnimation 8s ease-in-out infinite;
  transition: all 0.3s ease;
  background: linear-gradient(to right, #00FF00, #FFFFFF, #000000);
  background-size: 200% 200%;
  animation: colorChange 10s linear infinite;
  -webkit-background-clip: text;
  color: transparent;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const NavBar = () => {
  return (
    <Box>
      <Box position={'absolute'} zIndex={10} left={"45%"} top={"50%"} >
        
        <StyledLink to="/">
          <FloatingText
            sx={{ width:"280px", p:"2px", fontFamily: "Alegreya", fontSize: "18px" }}
          >
            -_-__-_SYNESTHESIA LAB_---_--__
          </FloatingText>
        </StyledLink>
      </Box>
      <Box>
        <StyledLink to="/proyectos">
          <FloatingText
            position={'absolute'} zIndex={10} left={"40%"} top={"42%"}
            sx={{ width:"110px", p:"2px", textAlign:"center", fontFamily: "Alegreya", fontSize: "18px" }}
          >
            PROYECTOS
          </FloatingText>
        </StyledLink>
      </Box>
      <Box>
        <StyledLink to="/quienes-somos">
          <FloatingText
            position={'absolute'} zIndex={10} left={"43%"} top={"62%"}
            sx={{ width:"148px", p:"2px", textAlign:"center", fontFamily: "Alegreya", fontSize: "18px" }}
          >
            QUIENES SOMOS
          </FloatingText>
        </StyledLink>
      </Box>
    </Box>
  );
};

export default NavBar;