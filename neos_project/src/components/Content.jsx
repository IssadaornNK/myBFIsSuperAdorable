import {
    Box,
    Typography,
    Card,           
    CardContent,
    CardMedia,
    CardActionArea,
    Grid,
} from "@mui/material";
import logo from "../assets/moon-phase-20.png"

function Content() {
    return (
        <Box>
            <Grid container spacing={2} pt={2} >
                <Grid item xs={12}>
                    <Typography style={{ fontFamily: "Forum", color: "white" }} textAlign="center" variant="h4">Wanning Gibbous III - The Sage</Typography>
                </Grid>
                <img src={logo}/>
            </Grid>
        </Box>
    )
}

export default Content