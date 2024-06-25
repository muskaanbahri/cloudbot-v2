import { Button, Container, Stack, Typography } from "@mui/material";
import sampleImage from '../assets/sampleimg.jpg';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import { StickyNote2 } from "@mui/icons-material";
import palette from "../theme/palette";


function RealEstate() {
    return (
        <>
            <Container maxWidth={false} disableGutters style={{background:"beige"}}>
                <Stack  alignItems={"flex-start"} flexDirection={"row"}  paddingTop={10} style={{background:"beige", width: '100%'}}>
                    <Stack spacing={2} style={{flexGrow:1}} >
                        <Typography variant="h3">Scale your Real Estate Business with WhatsApp Automations</Typography>
                        <Stack  flexDirection={"row"}>
                            <LibraryAddCheckIcon color="success"/>
                            <Typography paddingLeft={2} >Schedule property visits & send automated reminders</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            <LibraryAddCheckIcon color="success"/>
                            <Typography paddingLeft={2} > 
                            Automate FAQs for fast-tracking property deals</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            <LibraryAddCheckIcon color="success"/>
                            <Typography paddingLeft={2} >
                            Automate FAQs for fast-tracking property deals</Typography>
                        </Stack>
                        <Stack paddingTop={2}>
                            <Stack flexDirection={"row"} >
                                <Button variant="contained" color="success" style={{ marginRight: '15px' }} >Try Interakt for free</Button>
                                <Button variant="outlined" color= "success" >Request a demo </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                    
                    <Stack spacing={4}>
                        <img src={sampleImage} alt="Sample Image" style={{ width: '600px', height: '350px' }} />
                    </Stack>
                    
                </Stack>
            </Container>
        </>
    );
}

export default RealEstate;
