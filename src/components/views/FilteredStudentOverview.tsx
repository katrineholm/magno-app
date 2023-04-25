import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { getStudents, getTeachersByClass} from '../Communicator';
import { Button, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchField from '../SearchField';
import SearchIcon from '@material-ui/icons/Search';
import StudentTable from '../StudentTable';
import StudentFormDialog from '../StudentFormDialog';
import TeacherFormDialog from '../TeacherFormDialog';
import { Student, Teacher} from '../Interfaces';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

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
    },
    teacherNames: {
        color: '#2A646D',
        backgroundColor: "green"
    },
    noTeachers: {
        color: "grey",
    }
});

/**
 *
 *
 * @export
 * @returns
 */
const FilteredStudentOverview = observer((props: any) => {
    const { classes } = props;
    const [value, setValue] = useState("");
    const { className } = useParams(); // Use useParams hook to access the className from the URL parameters
    const [open, setOpen] = useState(false);
    const [openEditTeachers, setOpenEditTeachers] = useState(false);
    const [students, setStudents] = React.useState<Array<Student>>([])
    const [teachers, setTeachers] = React.useState<Array<Teacher>>([])
    
    async function setTeachersByClass(className: string) {
        const { teachers } = await getTeachersByClass(props.store.userStore.school, className);
        setTeachers(teachers);
        console.log("getting in frontend: ", teachers)
    }

    const filterByClassName = (studentList: Array<Student>) => {
            const filteredStudents = studentList.filter((student) => student.grade === className);
            console.log("teacherbyclass list in frontend", teachers)
            return filteredStudents;
      };

    async function fetchStudents() {
        const students = await getStudents();
        const filteredStudents = filterByClassName(students)
        setStudents(filteredStudents);
    }


    useEffect(() => {
        fetchStudents()
        filterByClassName(students);
        if (className !== undefined) {
            setTeachersByClass(className)
        }
      }, [students, className]);
    
    return (

        <div>
            <Container maxWidth="xl" className={classes.container}>
                <Paper className={classes.paper}>

                    <Grid container spacing={2}>
                        <Grid item direction="row" className={classes.responsibleTeachers}> <h4>Ansvarlige lærere: </h4></Grid>
                        <Grid container alignItems="center"  xs={10} md={10} lg={10} xl={10} spacing={0}>
                                {teachers.length > 0 ? 
                                teachers.map((element, index) => {
                                    return (
                                        <React.Fragment key={element.id}>
                                            {(index > 1) ? <Grid item className='teacherNames'><h4 >,&nbsp; </h4></Grid> : <Grid item className='teacherNames'><h4></h4></Grid>}
                                            <Grid item className='teacherNames'><h4>{element.name}</h4></Grid>
                                        </React.Fragment>
                                    );
                                }) : <h4 className={classes.noTeachers}>Ingen ansvarlige lærere</h4>}
                        </Grid>
                        <Grid item>
                            <IconButton
                                onClick={() => setOpenEditTeachers(true)}>
                                <EditIcon />
                            </IconButton>
                        </Grid>
                    </Grid>

                    <TeacherFormDialog
                        store={props.store}
                        open={openEditTeachers}
                        translation={props.translation}
                        setOpen={setOpenEditTeachers}
                        teachers={teachers}
                        className={className}
                        >

                    </TeacherFormDialog>

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

                        <Grid item xs={5} md={4} lg={8} xl={4}>
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
                    <StudentTable
                        store={props.store}
                        order={props.order}
                        orderBy={props.orderBy}
                        students={students}
                        translation={props.translation}
                    />
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

export default withStyles(styles)(FilteredStudentOverview);