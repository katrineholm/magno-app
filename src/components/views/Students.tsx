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
                    
                </Paper>
                
            </Container>
      </div>
    );
  });

export default withStyles(styles)(Students);