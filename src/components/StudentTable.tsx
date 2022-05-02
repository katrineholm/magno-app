/* eslint-disable no-script-url */

import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = (theme: any) => ({
    
});
  
/**
 *
 *
 * @export
 * @returns
 */
 const StudentTable = observer( (props: any) => {
    const {classes} = props;
    
    return (
      <React.Fragment>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Navn</TableCell>
              <TableCell>Klasse</TableCell>
              <TableCell>Testdato</TableCell>
              <TableCell>Motion Test</TableCell>
              <TableCell>Fixed Form Test</TableCell>
              <TableCell>Random Form Test</TableCell>
              <TableCell>Risiko</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.students.map( (row: any) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.class}</TableCell>
                <TableCell>{row.testdate}</TableCell>
                <TableCell>{row.motion_test}</TableCell>
                <TableCell>{row.fixed_form_test}</TableCell>
                <TableCell>{row.random_form_test}</TableCell>
                <TableCell>{row.risk}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </React.Fragment>
    );
})


export default withStyles(styles)(StudentTable);