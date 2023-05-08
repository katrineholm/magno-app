import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect } from 'react';
import { Class } from './Interfaces';
import {
  useNavigate,
} from "react-router-dom";

const StyledTableRow = styled(TableRow)(({ theme: Theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#DCE1E7",
    color: "#33373A",
    '&:hover': {
      backgroundColor: "#C0CFD5",
      cursor: "pointer",
    },
  },
  '&:nth-of-type(even)': {
    color: "#33373A",
    '&:hover': {
      backgroundColor: "#C0CFD5",
      cursor: "pointer",
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme: Theme }) => ({
  '&.MuiTableCell-root': {
    border: "none",
  }
}));

function createData(
  id: string,
  name: string,
  school: string,
  teacher: string[],
): Class {
  return {
    id,
    name,
    school,
    teacher,
  };
}

interface ClassTableProps {
  store: any;
  schoolClasses: Array<Class>;
  translation: any;
}

export default function ClassTable(props: ClassTableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [rows, setRows] = React.useState<Array<Class>>([]);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    props.store.viewStore.setToolbarSelected(2)
    navigate(`/students/${name}`)
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (props.schoolClasses.length > 0 && Array.isArray(props.schoolClasses)) {
      const rows: {
        id: string;
        name: string;
        school: string;
        teacher: string[];
      }[] = [];
      props.schoolClasses.forEach((element: any) => {
        rows.push(
          createData(
            element.id,
            element.name,
            element.school,
            element.teacher))
      });
      setRows(rows)
    }

  }, [props.schoolClasses]);

  return (
    <Box >
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          size={'medium'}
        >
          <TableBody>
            {rows.slice()
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const labelId = `enhanced-table-${index}`;
                return (
                  <StyledTableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="class"
                    tabIndex={-1}
                    key={row.id}
                    style={{
                      border: "none",
                    }}
                  >
                    <StyledTableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="normal"
                      style={{ textAlign: 'start', padding: 14 }}
                    >
                      {row.name}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        id="page-changer"
        rowsPerPageOptions={[10, 15, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </Box>
  );
}