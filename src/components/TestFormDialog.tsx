import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from '@material-ui/core/styles';
import SearchBox from './SearchBox';

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
  store: any;
  open: boolean;
  setOpen: (open: boolean) => void;
  classes: any;
}

function TestFormDialog(props: TestFormDialogProps) {
  const [value, setValue] = React.useState<string | null>();
  const {classes} = props;

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
                Velg elev
            </DialogTitle>
            <DialogContent className={classes.dialogBox}>
                <DialogContentText >
                    Velg en elev som skal utføre {props.test}
                </DialogContentText>
                <SearchBox
                    textfieldLabel={"Velg en elev"} 
                    value={value}
                    setValue={setValue}
                />
            </DialogContent>
            <DialogActions >
                <Button 
                    fullWidth={true} 
                    variant={"contained"} 
                    color={'primary'} 
                    className={classes.button}
                    onClick={() => props.setOpen(false)}>
                    Start test
                </Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}

export default withStyles(styles)(TestFormDialog);