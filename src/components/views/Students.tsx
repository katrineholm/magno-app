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
import StudentFormDialog from '../StudentFormDialog';
import Chart from '../Chart';

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

interface Student {
    name: string;
    grade: string;
    testdate: Date;
    motion_test: string[] | undefined;
    fixed_form_test: string[] | undefined;
    random_form_test: string[] | undefined;
    risk: string;
}
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
    const [open, setOpen] = useState(false);
    const [filteredStudents, setFilteredStudents] = React.useState<Array<Student>>([])
    const [students, setStudents] = React.useState<Array<Student>>([])
    const navigate = useNavigate();

    function openDialog(test: string){
        setOpen(true);
    }

    useEffect(() => {

        setStudents(props.store.studentStore.studentList)
        setFilteredStudents(props.store.studentStore.studentList)
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
                                onClick={() => setOpen(true)}>
                                Legg til elev
                            </Button>
                        </Grid>
                        
                        <Grid item xs={10} md={10} lg={10} xl={10}>
                            <SearchField
                                label={"Søk"}
                                setValue={setValue}
                                setFilteredStudents={setFilteredStudents}
                                students={students}
                                value={value}
                                icon={<SearchIcon/>}
                            />
                        </Grid>
                    </Grid>
                    <div style={{paddingTop: 16}}/>
                    <StudentTable store={props.store} students={filteredStudents}/>
                </Paper>
                
            </Container>
            <StudentFormDialog
                store={props.store}
                open={open}
                setOpen={setOpen}
            />
      </div>
    );
  });

export default withStyles(styles)(Students);