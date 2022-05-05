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
import {
  useNavigate,
} from "react-router-dom";
import { Student, RiskType, Data } from './Interfaces';

const StyledTableRow = styled(TableRow)(({ theme: Theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "#DCE1E7",
    color: "#33373A",
    '&:hover': {
      backgroundColor: "#C0CFD5",
    },
  },
  '&:nth-of-type(even)': {
    color: "#33373A",
    '&:hover': {
      backgroundColor: "#C0CFD5",
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
    grade: string,
    testdate: Date | string,
    motion_test: string,
    fixed_form_test: string,
    random_form_test: string,
    risk: RiskType,
): Data {
  return {
    id,
    name,
    grade,
    testdate,
    motion_test,
    fixed_form_test,
    random_form_test,
    risk,
  };
}

const Risk = {
  high: "Høy",
  medium: "Middels",
  low: "Lav"
}

function riskComparator(a: string, b: string){
  if (b === Risk.high && a !== Risk.high){
    return -1
  }
  else if (b !== Risk.high && a === Risk.high){
    return 1
  }
  else if (b === Risk.high && a === Risk.high){
    return 0
  }
  else if (b === Risk.medium && a !== Risk.medium){
    return -1
  }
  else if (b !== Risk.medium && a === Risk.medium){
    return 1
  }
  else if (b === Risk.medium && a === Risk.medium){
    return 0
  }
  else{
    return 0
  }
}


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (orderBy === "risk"){
    return riskComparator(String(a[orderBy]), String(b[orderBy]))
  }
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string | Date | RiskType},
  b: { [key in Key]: number | string | Date | RiskType},
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

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
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Navn',
  },
  {
    id: 'grade',
    numeric: true,
    disablePadding: false,
    label: 'Klasse',
  },
  {
    id: 'testdate',
    numeric: true,
    disablePadding: false,
    label: 'Test Dato',
  },
  {
    id: 'motion_test',
    numeric: true,
    disablePadding: true,
    label: 'Motion Test',
  },
  {
    id: 'fixed_form_test',
    numeric: true,
    disablePadding: true,
    label: 'Fixed Form Test',
  },
  {
    id: 'random_form_test',
    numeric: true,
    disablePadding: true,
    label: 'Random Form Test',
  },
  {
    id: 'risk',
    numeric: true,
    disablePadding: false,
    label: 'Risiko',
  },
];

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, rowCount, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
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
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface StudentTableProps{
  store: any;
  students: Array<Student>;
}

export default function StudentTable(props: StudentTableProps) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [rows, setRows] = React.useState<Array<Data>>([]);
  const dateConfig = {day: 'numeric', month: "short", year: "2-digit"} as const
  const navigate = useNavigate();
  
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    props.store.studentStore.setStudent(id);
    navigate(`/student/${id}`)
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function dangerColorTextCell(risk: string){
    if (risk === Risk.high){
      return <StyledTableCell style={{color: '#E43A4A'}} align="right">{risk}</StyledTableCell>
    }
    else if (risk === Risk.medium){
      return <StyledTableCell style={{color: '#FCA762'}} align="right">{risk}</StyledTableCell>
    }
    else{
      return <StyledTableCell align="right">{risk}</StyledTableCell>
    }
  }

  function getLastTestResult(testScore: {score: string, date: Date}[] | undefined){
    if (testScore === undefined){
      return "-"
    }
    else{
      return(testScore[testScore.length - 1].score)
    }
  }

  function getLastTestDate(date: Date | undefined | string){
    if (date === undefined || date === ""){
      return ("-")
    }
    else{
      return (new Date(date).toLocaleDateString('nb-NO', dateConfig))
    }
  }

  useEffect(() => {
    if (props.students.length > 0 && Array.isArray(props.students)){
      const rows: {
        id: string;
        name: string; 
        grade: string; 
        testdate: Date | string; 
        motion_test: string; 
        fixed_form_test: string; 
        random_form_test: string; 
        risk: RiskType; 
      }[] = [];
      props.students.forEach((element: any) => {
          rows.push(
            createData(
              element.id,
              element.name,
              element.grade, 
              getLastTestDate(element.testdate), 
              getLastTestResult(element.motion_test), 
              getLastTestResult(element.fixed_form_test), 
              getLastTestResult(element.random_form_test), 
              element.risk))
      });
      setRows(rows)
    }
    
  }, [props.students]);

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
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-${index}`;
                  return (
                    <StyledTableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="student"
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
                      <StyledTableCell align="right">{row.grade}</StyledTableCell>
                      <StyledTableCell align="right">{row.testdate}</StyledTableCell>
                      <StyledTableCell align="right">{row.motion_test}</StyledTableCell>
                      <StyledTableCell align="right">{row.fixed_form_test}</StyledTableCell>
                      <StyledTableCell align="right">{row.random_form_test}</StyledTableCell>
                      {dangerColorTextCell(String(row.risk))}
                    </StyledTableRow>
                  );
                })}
              {emptyRows > 0 && (
                <StyledTableRow
                  style={{
                    height: (53) * emptyRows,
                    border: "none",
                    backgroundColor: "white",
                  }}
                >
                  <StyledTableCell colSpan={7} />
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
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