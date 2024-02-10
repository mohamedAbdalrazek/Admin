import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme";
const FAQ = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Question Page" />
            <Box>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon = {<ExpandMoreIcon />}> 
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            An Importent question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi, architecto nobis quaerat blanditiis optio corporis qui, corrupti at aspernatur natus accusamus ipsum doloribus totam accusantium maiores sequi laborum! Quia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon = {<ExpandMoreIcon />}> 
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            An Importent question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi, architecto nobis quaerat blanditiis optio corporis qui, corrupti at aspernatur natus accusamus ipsum doloribus totam accusantium maiores sequi laborum! Quia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon = {<ExpandMoreIcon />}> 
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            An Importent question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi, architecto nobis quaerat blanditiis optio corporis qui, corrupti at aspernatur natus accusamus ipsum doloribus totam accusantium maiores sequi laborum! Quia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon = {<ExpandMoreIcon />}> 
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            An Importent question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi, architecto nobis quaerat blanditiis optio corporis qui, corrupti at aspernatur natus accusamus ipsum doloribus totam accusantium maiores sequi laborum! Quia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon = {<ExpandMoreIcon />}> 
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            An Importent question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi, architecto nobis quaerat blanditiis optio corporis qui, corrupti at aspernatur natus accusamus ipsum doloribus totam accusantium maiores sequi laborum! Quia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary expandIcon = {<ExpandMoreIcon />}> 
                        <Typography color={colors.greenAccent[500]} variant="h5">
                            An Importent question
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eligendi, architecto nobis quaerat blanditiis optio corporis qui, corrupti at aspernatur natus accusamus ipsum doloribus totam accusantium maiores sequi laborum! Quia.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}


export default FAQ