import React from 'react';
import App from './App';
import {observer} from 'mobx-react';
import { CookiesProvider } from 'react-cookie';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

const  Root = observer( (props: any) => {

        return (
        <Router>
            <CookiesProvider>
                <App store={props.store}/>
            </CookiesProvider>
        </Router>
    )})

export default (Root);
      