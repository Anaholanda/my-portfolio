import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadingIcon from '@mui/icons-material/Downloading';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";


const Hero = ()=>{

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]:{
          PaddingTop: "100px"

        },
        [theme.breakpoints.up('md')]:{
          PaddingTop: "0",
          
        }
    }))

    const StyledImg = styled("img")(({theme})  => ({
      width:"75%",
      borderRadius:"50%",
      border: '1px solid ${theme.pallete.primary.contrastext}',
      }))

    return(
  <>
        <StyledHero>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box position={"relative"}>
                  <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                  </Box>
                  <Box position={"relative"}textAlign={"center"}>
                    <StyledImg src={Avatar} />
                  </Box>
                </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Ana Kelly Holanda</Typography>
            <Typography color="primary.contrastText" variant="h3" textAlign="center">I'm a Software Quality Engineer</Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={12} md={7} display={"flex" } justifyContent={"center"}>
              <StyledButton onClick={() => console.log("Download")}>
                  <DownloadingIcon />
                  <Typography>
                      Download CV
                  </Typography>
              </StyledButton>
            </Grid>
              <Grid item xs={12} md={4} display={"flex" } justifyContent={"center"}>
                <StyledButton onClick={() => console.log("Contact")}>
                  <EmailIcon/>
                  <Typography>
                    Contacte-me
                    </Typography>
              </StyledButton>
              <Grid item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Container>
  </StyledHero>
</>
  )
}

export default Hero
