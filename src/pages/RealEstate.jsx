import { Box, Button, Container, Stack, Typography } from "@mui/material";
import sampleImage from '../assets/sampleimg.jpg';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import CircleIcon from '@mui/icons-material/Circle';




function RealEstate() {
    return (
        <>
        <Box sx={{ width: 1}}>
            <Stack disableGutters style={{ width: '100%'}}>
                <Stack  alignItems={"flex-start"}  flexDirection={"row"} paddingTop={10} style={{ width: '100%'}}>
                    <Stack spacing={2}  >
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
            </Stack>
        </Box>
        
        
        <Box sx={{ width: 1, background: "#E9FCD4", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                <Typography variant="h6" component="span">
                    Leading real estate businesses 
                </Typography>
                <Typography variant="h6" component="span" color="error" sx={{ paddingLeft: 1, paddingRight: 1 }}>
                    ❤️
                </Typography>
                <Typography variant="h6" component="span">
                    Interakt
                </Typography>
        </Box>
        //one more section
        <Box paddingTop={10} paddingBottom={10} sx={{ width: 1, background: '#AAF27F', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
            <Typography variant="h3" ><center>Leverage the WhatsApp Business Platform with Interakt to acquire, engage & convert prospect buyers and retain customers. </center> </Typography>   
        </Box>
        


        <Box sx={{ width: 1 }}>
            <Stack disableGutters style={{ width: '100%'}}>
                <Stack  alignItems={"flex-start"}  flexDirection={"row"} paddingTop={5} style={{ width: '100%'}}>
                    <Stack spacing={2}  >
                        <Typography variant="h3">Generate more leads for your real estate business with WhatsApp</Typography>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon fontSize="small"  color="success"/>
                            <Typography paddingLeft={2} >Run click-to-WhatsApp ads to generate leads</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon fontSize="small"  color="success"/>
                            <Typography paddingLeft={2} >Share WhatsApp links on social media</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon fontSize="small"  color="success"/>
                            <Typography paddingLeft={2} >Add WhatsApp chat widget on website and real estate agent landing pages</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon  fontSize="small"  color="success"/>
                            <Typography paddingLeft={2} >Offer QR code scan to enquire about properties</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon fontSize="small"  color="success"/>
                            <Typography paddingLeft={2} >
                            Set up automated greeting messages to share property details, collect information, request call backs</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon fontSize="small" color="success"/>
                            <Typography paddingLeft={2} >
                            Use WhatsApp broadcasts to promote new property listings</Typography>
                        </Stack>
                        <Stack paddingTop={2}>
                            <Stack flexDirection={"row"} >
                                <Button variant="contained" color="success" style={{ marginRight: '15px' }} >Try for Free</Button>
                                
                            </Stack>
                        </Stack>
                    </Stack>
                    
                    <Stack spacing={4}>
                        <img src={sampleImage} alt="Sample Image" style={{ width: '600px', height: '350px' }} />
                    </Stack>
                    
                </Stack>
            </Stack>
            
        </Box>

        <Box sx={{ width: 1 }}>
            <Stack disableGutters style={{ width: '100%'}} paddingTop={5}>
                <Stack  alignItems={"flex-start"}  flexDirection={"row"} paddingTop={5} style={{ width: '100%'}}>
                    <Stack spacing={4} >
                        <img src={sampleImage} alt="Sample Image" style={{ width: '600px', height: '350px' }} />
                    </Stack>
                    <Stack spacing={2} paddingLeft={10} >
                        <Typography variant="h3">Identify potential buyers with lead qualification on WhatsApp</Typography>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon fontSize="small"  color="success"/>
                            <Typography paddingLeft={2} >Follow up with targeted questions requesting budget, type of property and other questions</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon fontSize="small"  color="success"/>
                            <Typography paddingLeft={2} >Set up FAQs around property details for faster resolution of queries</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon fontSize="small"  color="success"/>
                            <Typography paddingLeft={2} >
                            
Integrate with CRM for better lead segmentation</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon  fontSize="small"  color="success"/>
                            <Typography paddingLeft={2} >Offer QR code scan to enquire about properties</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon fontSize="small"  color="success"/>
                            <Typography paddingLeft={2} >
                            
Nurture long-distance leads with virtual property tours on WhatsApp​</Typography>
                        </Stack>
                        <Stack  flexDirection={"row"}>
                            < CircleIcon fontSize="small" color="success"/>
                            <Typography paddingLeft={2} >
                            Assign leads to respective real estate agents based on location and other data points</Typography>
                        </Stack>
                        
                    </Stack>
                    
                    
                    
                </Stack>
            </Stack>
            
        </Box>



        </>
        
        


    );
}





export default RealEstate;
