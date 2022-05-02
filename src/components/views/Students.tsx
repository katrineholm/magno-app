import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useCookies } from 'react-cookie';
import {
  useNavigate,
} from "react-router-dom";
import { authenticate } from '../Communicator';
import { Button, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchField from '../SearchField';
import SearchIcon from '@material-ui/icons/Search';
import StudentTable from '../StudentTable';

const styles = (theme: any) => ({
    container: {
        marginTop: theme.spacing(6.5),
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

const students = [
    {
        key: "1",
        name: "Amanda Andersen",
        class: "3A",
        testdate: "19. Januar",
        motion_test: 19,
        fixed_form_test: 17,
        random_form_test: 12,
        risk: "Lav"
    },
    {
        key: "2",
        name: "Bernt Barsen",
        class: "2B",
        testdate: "17. Februar",
        motion_test: 63,
        fixed_form_test: 36,
        random_form_test: 79,
        risk: "Høy"
    },
    {
        key: "3",
        name: "Carl Christiansen",
        class: "4B",
        testdate: "16. Januar",
        motion_test: 27,
        fixed_form_test: 23,
        random_form_test: 28,
        risk: "Middels"
    },
    {
        key: "4",
        name: "David Damas",
        class: "4A",
        testdate: "17. Februar",
        motion_test: "-",
        fixed_form_test: "-",
        random_form_test: "-",
        risk: "Lav"
    },
    {
        key: "5",
        name: "Erik Erntsson",
        class: "4A",
        testdate: "17. Februar",
        motion_test: 63,
        fixed_form_test: "-",
        random_form_test: "-",
        risk: "Høy"
    },
    {
        key: "6",
        name: "Ida Inge",
        class: "3A",
        testdate: "13. Februar",
        motion_test: 18,
        fixed_form_test: "-",
        random_form_test: "-",
        risk: "Lav"
    },
    {
        key: "7",
        name: "Joar Mande",
        class: "5B",
        testdate: "19. Februar",
        motion_test: 33,
        fixed_form_test: "-",
        random_form_test: "-",
        risk: "Middels"
    },
    {
        key: "8",
        name: "Olav Prang",
        class: "2A",
        testdate: "19. Februar",
        motion_test: "-",
        fixed_form_test: "-",
        random_form_test: "-",
        risk: "Lav"
    },
];

/**
 *
 *
 * @export
 * @returns
 */
const Students = observer( (props: any) => {
    const {classes} = props;
    const [cookies, setCookie] = useCookies(['c_user']);
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
    const authFunction = async () => {
        const validUser = await authenticate(cookies, setCookie);
        if (!validUser){
        navigate("/login")
        }
        else{
        props.store.userStore.setLoginStatus(true)
        }
    }
    authFunction();
    }, []);

    return (
      
      <div>
            <Container maxWidth="xl" className={classes.container}>
                <Paper className={classes.paper}>
                    <Grid direction="row"
                        container 
                        spacing={2}
                    >
                        <Grid item xs={2} md={2} lg={2} xl={2}>
                            <Button 
                                fullWidth
                                disableElevation
                                variant={"contained"} 
                                color={'primary'} 
                                className={classes.button}
                                startIcon={<AddIcon/>}
                                onClick={() => props.setOpen(false)}>
                                Legg til elev
                            </Button>
                        </Grid>
                        <Grid item xs={10} md={10} lg={10} xl={10}>
                            <SearchField
                                label={"Søk"}
                                setValue={setValue}
                                value={value}
                                icon={<SearchIcon/>}
                            />
                        </Grid>
                    </Grid>
                    <StudentTable students={students}/>
                </Paper>
                
            </Container>
      </div>
    );
  });

export default withStyles(styles)(Students);