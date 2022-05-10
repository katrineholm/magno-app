import React, { useEffect } from 'react';
import {observer} from 'mobx-react';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import './App.css';
import ToolBars from './components/toolbar/ToolBars';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/views/Login'
import Register from './components/views/Register'
import Home from './components/views/Home'
import Theme from './components/Theme'
import Tests from './components/views/Tests';
import Students from './components/views/Students';
import Snackbar from "./components/SnackBar";
import { useCookies } from 'react-cookie';
import {
    useNavigate,
  } from "react-router-dom";
import { authenticate, getStudents } from './components/Communicator';
import Student from './components/views/Student';


const styles = (theme: any) => ({
    root: {
        display: 'flex',
        height: '100vh',
        maxHeight: '100vh'
    },
    content: {
        flexGrow: 1,

    },
});

export const App = observer( (props: any) =>  {
  const {classes} = props;
  const [cookies, setCookie] = useCookies(['c_user']);
  const navigate = useNavigate();

  async function fetchStudents(){
    const students = await getStudents(props.store.userStore.school);
    props.store.studentStore.setStudentList(students)
  }
  
  useEffect(() => {
    const authFunction = async () => {
      const validUser = await authenticate(cookies, setCookie);
      if (!validUser){
        navigate("/login")
      }
      else{
        props.store.userStore.setUserEmail(validUser.email);
        props.store.userStore.setSchool(validUser.school);
        props.store.userStore.setLoginStatus(true)
        navigate("/home")
        const fetchCall = async () => {
          const students = await getStudents(props.store.userStore.school);
          props.store.studentStore.setStudentList(students)
        }
        fetchCall()
      }
    }
    authFunction();
  }, []);
  
  return (
    <div className={classes.root}>
        <ThemeProvider theme={Theme}>
            <ToolBars store={props.store}></ToolBars>
            <>
                <main className={classes.content}>
                    <Routes>
                        <Route path ="/home" element={<Home store={props.store}/>} />
                        <Route path="/login" element={<Login store={props.store}/>} />
                        <Route path="/register" element={<Register store={props.store}/>} />
                        <Route path="/tests" element={<Tests store={props.store}/>} />
                        <Route path="/students" element={<Students store={props.store} order={'asc'} orderBy={'name'}/>} />
                        <Route path="/students/sort-by-date" element={<Students store={props.store} order={"desc"} orderBy={'testdate'}/>} />
                        <Route path="/student" element={<Student store={props.store}/>}>
                          <Route path=":studentID" element={<Student store={props.store}/>} />
                        </Route>
                    </Routes>
                </main>
            </>
            <Snackbar
                variant={props.store.viewStore.snackBarVariant}
                message={props.store.viewStore.snackBarMessage}
                open={props.store.viewStore.openSnackBar}
                setOpen={() => props.store.viewStore.setOpenSnackBar(false)}
            />
        </ThemeProvider>
    </div>
  );
});

export default withStyles(styles)(App);