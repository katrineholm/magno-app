import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useCookies } from 'react-cookie';
import {
  useNavigate,
} from "react-router-dom";
import { getClasses } from '../Communicator';
import { Button, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchField from '../SearchField';
import SearchIcon from '@material-ui/icons/Search';
//import ClassTable from '../ClassTable';
//import ClassFormDialog from '../StudentFormDialog';
import { Class } from '../Interfaces';
import StudentTable from '../StudentTable';
import ClassTable from '../ClassTable';

const styles = (theme: any) => ({
    container: {
        marginTop: theme.spacing(10),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column' as "column",
    },
    img: {
        width: "100%",
        maxWidth: "450px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
    },
    button: {

        height: "100%"
    }
});


/**
 *
 *
 * @export
 * @returns
 */
const ClassOverview = observer( (props: any) => {
    console.log("props: ", props.userEmail, props.school)
    const {classes} = props;
    const [cookies, setCookie] = useCookies(['c_user']);
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const [filteredClasses, setFilteredClasses] = React.useState<Array<Class>>([])
    const navigate = useNavigate();
    
/* 
    function openDialog(test: string){
        setOpen(true);
    } */

   /*  async function fetchClass(){
        const schoolClasses = await getClasses(props.store.classStore.school);
        props.store.studentStore.setClassList(schoolClasses) //endre til classStore
        setFilteredClasses(schoolClasses)
    } */
    
    useEffect(() => {
        const fetchCall = async () => {
            const schoolClasses = await getClasses(props.store.classStore.school);
            props.store.classStore.setClassList(schoolClasses)
            setFilteredClasses(schoolClasses)
            console.log("KLASSE: ", props.store.classStore.name)
            console.log("schoolClasses: ", schoolClasses)
          }
        fetchCall()
    }, []);

    return (
      
      <div>
            <Container maxWidth="xl" className={classes.container}>
                <Paper className={classes.paper}>
                    <Grid direction="row"
                        container 
                        spacing={2}
                    >
                        <Grid item xs={4} md={3} lg={2} xl={2}>
                            <Button 
                                fullWidth
                                disableElevation
                                variant={"contained"} 
                                color={'primary'} 
                                className={classes.button}
                                startIcon={<AddIcon/>}
                                onClick={() => setOpen(true)}>
                                {props.translation.classes.addClassButtonText}
                             </ Button>
                        </Grid>
                    </Grid>
                    <div style={{paddingTop: 16}}/>
                </Paper>
                
            </Container>
            <ClassTable
             store={props.store} 
             order={props.order} 
             orderBy={props.orderBy} 
             classes={filteredClasses}
             translation={props.translation} />
      </div>
    );
  });

export default withStyles(styles)(ClassOverview);