import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { getClasses, getTeachers } from '../Communicator';
import { Button, Paper, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClassFormDialog from '../ClassFormDialog';
import { Class, Teacher } from '../Interfaces';
import ClassTable from '../ClassTable';
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
const ClassOverview = observer((props: any) => {
    const [loading, setLoading] = useState<boolean>(true);
    const { classes } = props;
    const [open, setOpen] = useState(false);
    const [filteredClasses, setFilteredClasses] = React.useState<Array<Class>>([]);
    const [teachers, setTeachers] = React.useState<Array<Teacher>>([]);

    async function fetchClasses() {
        const schoolClasses = await getClasses();
        if (props.store.classStore) { // Make sure classStore is defined before using it
            props.store.classStore.setClassList(schoolClasses);

        }
        setFilteredClasses(schoolClasses);
    }

    useEffect(() => {
        const fetchCall = async () => {
            // Set classes at the school
            const schoolClasses = await getClasses();
            if (props.store.classStore) { // Make sure classStore is defined before using it
                props.store.classStore.setClassList(schoolClasses);
            }
            setFilteredClasses(schoolClasses);

            // Set teachers at the school
            if (props.store.userStore.role === props.translation.admin) {
                const tempTeachers = await getTeachers();
                if (props.store.teacherStore) { // Make sure teacherStore is defined before using it
                    props.store.teacherStore.setTeacherList(tempTeachers);
                }
                setTeachers(tempTeachers);
                console.log(tempTeachers);
            }
            setLoading(false);
        };
        fetchCall();
    }, []);

    return (
        <div>
            <Container maxWidth="xl" className={classes.container}>
                <Paper className={classes.paper}>
                    <Grid direction="row"
                        container
                        spacing={2}
                    >
                        {props.store.userStore.role == props.translation.admin ?
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
                            </Grid> : <></>}
                    </Grid>
                    <div style={{ paddingTop: 16 }} />
                    {loading ? ( // show loading icon while data is being fetched
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <CircularProgress style={{ color: "#bdbdbd" }} />
                        </div>
                    ) : filteredClasses.length > 0 ? (
                        <ClassTable
                            store={props.store}
                            schoolClasses={filteredClasses.sort((a, b) => a.name.localeCompare(b.name))}
                            translation={props.translation} />
                    ) : (
                        <Typography style={{ textAlign: 'center', paddingTop: 20 }}>Det er ikke lagt inn noen klasser</Typography>)}

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