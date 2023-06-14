import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom"; // Import useParams hook from react-router-dom
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { getStudents } from '../Communicator';
import { Button, Paper, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchField from '../SearchField';
import SearchIcon from '@material-ui/icons/Search';
import StudentTable from '../StudentTable';
import StudentFormDialog from '../StudentFormDialog';
import { Student } from '../Interfaces';
import { CircularProgress } from '@material-ui/core';


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
const StudentOverview = observer((props: any) => {
    const [loading, setLoading] = useState<boolean>(true);
    const { classes } = props;
    const [value, setValue] = useState("");
    const { className } = useParams(); // Use useParams hook to access the className from the URL parameters
    const [open, setOpen] = useState(false);
    const [students, setStudents] = React.useState<Array<Student>>([]) //listen med studenter som vises


    async function fetchStudents() {
        const students = await getStudents();
        props.store.studentStore.setStudentList(students)
        setStudents(students)
        setLoading(false);
    }

    useEffect(() => {
        fetchStudents()
    }, []);


    return (

        <div>
            <Container maxWidth="xl" className={classes.container}>
                <Paper className={classes.paper}>
                    <Grid direction="row"
                        container
                        spacing={2}
                    >
                        <Grid item xs={2} md={3} lg={2} xl={2}>
                            <Button
                                fullWidth
                                disableElevation
                                variant={"contained"}
                                color={'primary'}
                                className={classes.button}
                                startIcon={<AddIcon />}
                                onClick={() => setOpen(true)}>
                                {props.translation.students.addStudentButtonText}
                            </Button>
                        </Grid>

                        <Grid item xs={8} md={9} lg={8} xl={8}>
                            <SearchField
                                label={props.translation.students.searchFieldLabel}
                                setValue={setValue}
                                setFilteredStudents={setStudents}
                                students={props.store.studentStore.studentList}
                                value={value}
                                icon={<SearchIcon />}
                            />
                        </Grid>
                    </Grid>
                    <div style={{ paddingTop: 16 }} />
                    {loading ? ( // show loading icon while data is being fetched
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <CircularProgress style={{ color: "#bdbdbd" }} />
                        </div>
                    ) : students.length > 0 ? (
                        <StudentTable
                            store={props.store}
                            order={props.order}
                            orderBy={props.orderBy}
                            students={students}
                            translation={props.translation}
                        />
                    ) : (
                        <Typography style={{ textAlign: 'center', paddingTop: 20 }}>
                            Det er ikke lagt inn noen elever
                        </Typography>
                    )}
                </Paper>
            </Container>

            <StudentFormDialog
                store={props.store}
                open={open}
                translation={props.translation}
                setOpen={setOpen}
                fetchStudents={fetchStudents}
            />
        </div>
    );
});

export default withStyles(styles)(StudentOverview);