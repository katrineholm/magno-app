import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import React, { useEffect } from 'react';
import { Student, RiskType, Data, Class } from './Interfaces';
import { RoomService } from '@material-ui/icons';

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
    teacherId: string,
): Class {
  return {
    id,
    name,
    school, 
    teacherId,
  };
}

type Order = 'asc' | 'desc';

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


interface HeadCell {
  disablePadding: boolean;
  id: keyof Class;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
  },
];

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Class) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  labels: {[key: string]: string}
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Class) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <Box>
      <TableContainer>
      <Table
            aria-labelledby="tableTitle"
            size={'medium'}
            >
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <StyledTableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {props.labels[headCell.id]}
                  </TableSortLabel>

                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
      </Table>
      </TableContainer>
    </Box>
  );
}

interface ClassTableProps{
  store: any;
  schoolClasses: Array<Class>;
  order: Order;
  translation: any;
  orderBy: keyof Class;
}

export default function ClassTable(props: ClassTableProps) {
  const [order, setOrder] = React.useState<Order>(props.order);
  const [orderBy, setOrderBy] = React.useState<keyof Class>(props.orderBy);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [rows, setRows] = React.useState<Array<Class>>([]);
  const dateConfig = {day: 'numeric', month: "short", year: "2-digit"} as const

  
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Class,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

/*   Funksjonen når man trykker på elev. Gjøre om til når man trykker på klasse 
const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    props.store.classStore.setC(id);
    navigate(`/class/${id}`)
  };
 */
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (props.schoolClasses.length > 0 && Array.isArray(props.schoolClasses)){
      const rows: {
        id: string;
        name: string; 
        school: string;
        teacherId: string;
      }[] = [];
      props.schoolClasses.forEach((element: any) => {
          rows.push(
            createData(
              element.id,
              element.name,
              element.school,
              element.teacherId))
      });
      setRows(rows)
    }
    
  }, [props.schoolClasses]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box >
        <TableContainer>
          <Table

            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              labels={props.translation.studentTable.labels}
            />

            <TableBody>
                {rows.slice()
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-${index}`;
                    return (
                      <StyledTableRow
                      hover
                      //onClick={(event) => handleClick(event, row.id)}
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
                        style={{textAlign: 'start', padding: 14}}
                      >
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.name}</StyledTableCell>
                    </StyledTableRow>

                    );
                })}
            </TableBody>

          </Table>
        </TableContainer>
    </Box>
  );
}