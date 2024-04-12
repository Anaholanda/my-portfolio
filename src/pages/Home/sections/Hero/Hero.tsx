import { Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadingIcon from '@mui/icons-material/Downloading';
import EmailIcon from '@mui/icons-material/Email';



const Hero = ()=>{

    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=> ({
      width:"100%",
      borderRadius:"50%"
      }))

    return(
  <>
        <StyledHero>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <StyledImg src={Avatar} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography color="primary" variant="h1" textAlign="center">Ana Kelly Holanda</Typography>
            <Typography color="primary" variant="h2" textAlign="center">I'm a Software Quality Analyst</Typography>
            <Grid container display="flex" justifyContent="center">
              <Grid item xs={12} md={4} display={"flex" } justifyContent={"center"}>
                <button>
                <DownloadingIcon/>
                Download CV
              </button>
            </Grid>
              <Grid item xs={12} md={4} display={"flex" } justifyContent={"center"}>
                <button>
                  <EmailIcon/>
                    Contacte-me
              </button>
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
