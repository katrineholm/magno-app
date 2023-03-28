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
import Snackbar from "./components/SnackBar";
import { useCookies } from 'react-cookie';
import {
    useNavigate,
  } from "react-router-dom";
import { authenticate, getClasses, getStudents } from './components/Communicator';
import Student from './components/views/Student';
import { translationNO } from './components/locales/no/translationNO';
import Information from './components/views/Information';
import StudentOverview from './components/views/StudentOverview';
import ClassOverview from './components/views/ClassOverview';

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
  const {classes: classes_} = props;
  const [cookies, setCookie] = useCookies(['c_user']);
  const navigate = useNavigate();
  const translation = translationNO;
  
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
          const classes = await getClasses(props.store.userStore.school);
          props.store.studentStore.setStudentList(students)
          props.store.classStore.setClassList(classes)
        }
        fetchCall()
      }
    }
    authFunction();
  }, []);
  
  return (
    <div className={classes_.root}>
        <ThemeProvider theme={Theme}>
            <ToolBars store={props.store}></ToolBars>
            <>
                <main className={classes_.content}>
                    <Routes>
                        <Route path ="/home" element={<Home store={props.store} translation={translation}/>} />
                        <Route path="/login" element={<Login store={props.store} translation={translation}/>} />
                        <Route path="/register" element={<Register store={props.store} translation={translation}/>} />
                        <Route path="/tests" element={<Tests store={props.store} translation={translation}/>} />
                        <Route path="/students" element={<StudentOverview store={props.store} order={'asc'} orderBy={'name'} translation={translation}/>} />
                        <Route path="/students/sort-by-date" element={<StudentOverview store={props.store} order={"desc"} orderBy={'testdate'} translation={translation}/>} />
                        <Route path="/student" element={<Student store={props.store} translation={translation}/>}>
                          <Route path=":studentID" element={<Student store={props.store} translation={translation}/>} />
                        </Route>
                        <Route path="/classes" element={<ClassOverview store={props.store} order={'asc'} orderBy={'name'} translation={translation}/>}  />
                        <Route path="/information" element={<Information translation={translation}/>}></Route>
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