import {action, makeObservable, observable} from 'mobx';

export class UserStore{
    pageState = "";
    view = "";
    viewState = "";
    openSnackBar = false;
    snackBarVariant = "error";
    snackBarMessage = "";
    drawerState = true;
    
    constructor(){
        makeObservable(this, {
        pageState: observable,
        setPageState: action,
        view: observable,
        setView: action,
        setOpenSnackBar: action,
        handleDrawerOpen: action,
        setSnackBar: action,
        openSnackBar: observable,
        snackBarVariant: observable,
        snackBarMessage: observable,
        drawerState: observable,
        })
    }


    setPageState(state: string) {
        this.pageState = state;
    }

    setViewState(viewState: string) {
        this.viewState = viewState;
    }

    setView(view: string) {
        this.view = view;
    }

    handleDrawerOpen = (boolean: boolean) => {
        this.drawerState = !boolean;
    };

    setSnackBar(message: string, variant: string){
        this.snackBarVariant = variant;
        this.snackBarMessage = message;
      }
    setOpenSnackBar(bool: boolean){
        this.openSnackBar = bool;
    }
}