import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';
import SearchBox from './SearchBox';
import { Student } from './Interfaces';
//import { useCookies } from 'react-cookie';

const styles = (theme: any) => ({
  dialogBox: {
    textAlign: 'center' as "center",
    justifyContent: 'center',
    alignItems: 'center',
    height: '220px',
    width: "90%",
    margin: "auto",
  },
  button: {
    width: "85%",
    margin: "auto"
  }
});

interface TestFormDialogProps {
  test: string;
  link: string;
  translation: any
  store: any;
  open: boolean;
  setOpen: (open: boolean) => void;
  classes: any;
}

function TestFormDialog(props: TestFormDialogProps) {
  const [value, setValue] = React.useState<string | null>();
  //const [cookies, setCookie] = useCookies(['c_testid']);
  const {classes} = props;

  function startTest(){
    //2 hr expiry date for cookie
    const expiryDate = new Date(Date.now() + 1000*60*60*2);
    const name = String(value).split(" ").slice(0, 2).join(' ');
    //Used by tests to identify the student being tested
    // setCookie('c_testid', 
    //           props.store.studentStore.studentList.find((student: Student) => student.name.includes(name)).id, { expires: expiryDate });
    window.open(process.env.REACT_APP_API_URL + "/" + props.link);
    props.setOpen(false)
  }

  return (
    <div >
        <Dialog 
            fullWidth={true}
            maxWidth={"sm"}
            open={props.open} 
            scroll={'body'}
            onClose={() => props.setOpen(false)} 
        >
            <DialogTitle style={{ textAlign: 'center'}}>
                {props.translation.testFormDialog.title}
            </DialogTitle>
            <DialogContent className={classes.dialogBox}>
                <DialogContentText >
                    {props.translation.testFormDialog.subtitle} {props.test}
                </DialogContentText>
                <SearchBox
                    textfieldLabel={props.translation.testFormDialog.searchFieldLabel} 
                    value={value}
                    setValue={setValue}
                    students={props.store.studentStore.studentList
                      .map((student: Student) => student.name + " " + student.grade)}
                />
            </DialogContent>
            <DialogActions >
                <Button 
                    fullWidth={true} 
                    variant={"contained"} 
                    color={'primary'} 
                    className={classes.button}
                    onClick={() => startTest()}>
                    {props.translation.testFormDialog.buttonLabel}
                </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}

export default withStyles(styles)(TestFormDialog);