import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useCookies } from 'react-cookie';
import {
    useNavigate,
} from "react-router-dom";
import { getClasses, getTeachers } from '../Communicator';
import { Button, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchField from '../SearchField';
import SearchIcon from '@material-ui/icons/Search';
import ClassFormDialog from '../ClassFormDialog';
import { Class, Teacher } from '../Interfaces';
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
const ClassOverview = observer((props: any) => {
    const { classes } = props;
    //const [cookies, setCookie] = useCookies(['c_user']);
    const [open, setOpen] = useState(false);
    const [filteredClasses, setFilteredClasses] = React.useState<Array<Class>>([]);
    const [teachers, setTeachers] = React.useState<Array<Teacher>>([]);
    const [teacherNames, setTeacherNames] = React.useState<Array<string>>([]);
    const navigate = useNavigate();


    function openDialog(test: string) {
        setOpen(true);
    }

    async function fetchClasses() {
        const schoolClasses = await getClasses();
        props.store.clasStore.setClassList(schoolClasses)
        setFilteredClasses(schoolClasses)

    }

    useEffect(() => {
        const fetchCall = async () => {
            //Setter klasser på skolen
            const schoolClasses = await getClasses();
            props.store.classStore.setClassList(schoolClasses)
            setFilteredClasses(schoolClasses)

            //Setter lærere på skolen
            // const tempTeachers = await getTeachers(props.store.userStore.school);
            // props.store.teacherStore.setTeacherList(tempTeachers)
            // setTeachers(tempTeachers);
            // console.log(tempTeachers)
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
                                startIcon={<AddIcon />}
                                onClick={() => setOpen(true)}>
                                {props.translation.classes.addClassButtonText}
                            </ Button>
                        </Grid>

                    </Grid>
                    <div style={{ paddingTop: 16 }} />

                    <ClassTable
                        store={props.store}
                        order={props.order}
                        orderBy={props.orderBy}
                        schoolClasses={filteredClasses}
                        translation={props.translation} />
                </Paper>

            </Container>
            <ClassFormDialog
                store={props.store}
                open={open}
                classes_={classes}
                translation={props.translation}
                setOpen={setOpen}
                fetchClasses={fetchClasses}
                teachers={teachers}
            />

        </div>
    );
});

export default withStyles(styles)(ClassOverview);