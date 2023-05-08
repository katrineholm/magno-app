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

// Convert date from nb-no to en-gb, necessary for the comparator to recreate a date-time object.
function enGBDate(a: string) {
  const MonthsEN = {
    jan: "jan",
    feb: "feb",
    mar: "mar",
    apr: "apr",
    mai: "may",
    jun: "jun",
    jul: "jul",
    sep: "sep",
    okt: "oct",
    nov: "nov",
    des: "dec"
  }
  const month = a.split(" ")[1]
  if (month !== undefined && month in MonthsEN) {
    a = a.replace(month, MonthsEN[month as keyof typeof MonthsEN])
  }
  return a
}

function riskComparator(a: string, b: string, risk: { [key: string]: string }) {
  if (b === risk.high && a !== risk.high) {
    return -1
  }
  else if (b !== risk.high && a === risk.high) {
    return 1
  }
  else if (b === risk.high && a === risk.high) {
    return 0
  }
  else if (b === risk.medium && a !== risk.medium) {
    return -1
  }
  else if (b !== risk.medium && a === risk.medium) {
    return 1
  }
  else if (b === risk.medium && a === risk.medium) {
    return 0
  }
  else if (b === risk.low && a !== risk.low) {
    return -1
  }
  else if (b !== risk.low && a === risk.low) {
    return 1
  }
  else if (b === risk.low && a === risk.low) {
    return 0
  }
  else {
    return 0
  }
}

function riskScoreComparator(a: number, b: number) {
  if (Number.isNaN(a)) {
    a = 0;
  }
  if (Number.isNaN(b)) {
    b = 0;
  }
  if (b < a) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;

}

function dateComparator(a: string, b: string) {
  a = enGBDate(a)
  b = enGBDate(b)
  if (b === "-") {
    b = String(Date.parse('01 Jan 1970 00:00:00 GMT'))
  }
  if (a === "-") {
    a = String(Date.parse('01 Jan 1970 00:00:00 GMT'))
  }

  if (new Date(b) < new Date(a)) {
    return -1
  }
  if (new Date(b) > new Date(a)) {
    return 1;
  }
  return 0
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T, risk: { [key: string]: string }) {
  if (orderBy === "risk") {
    return riskComparator(String(a[orderBy]), String(b[orderBy]), risk)
  }
  if (orderBy === "testdate") {
    return dateComparator(String(a[orderBy]), String(b[orderBy]))
  }
  if (orderBy === ("motion_test" || "fixed_form_test" || "random_form_test")) {
    return riskScoreComparator(Number(a[orderBy]), Number(b[orderBy]))
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
  risk: { [key: string]: string },
): (
  a: { [key in Key]: number | string | Date | RiskType },
  b: { [key in Key]: number | string | Date | RiskType },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy, risk)
    : (a, b) => -descendingComparator(a, b, orderBy, risk);
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
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
  },
  {
    id: 'grade',
    numeric: true,
    disablePadding: false,
  },
  {
    id: 'testdate',
    numeric: true,
    disablePadding: false,
  },
  {
    id: 'motion_test',
    numeric: true,
    disablePadding: true,
  },
  {
    id: 'fixed_form_test',
    numeric: true,
    disablePadding: true,
  },
  {
    id: 'random_form_test',
    numeric: true,
    disablePadding: true,
  },
  {
    id: 'risk',
    numeric: true,
    disablePadding: false,
  },
];

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  labels: { [key: string]: string }
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
              {props.labels[headCell.id]}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface StudentTableProps {
  store: any;
  students: Array<Student>;
  order: Order;
  translation: any;
  orderBy: keyof Data;
}

export default function StudentTable(props: StudentTableProps) {
  const [order, setOrder] = React.useState<Order>(props.order);
  const [orderBy, setOrderBy] = React.useState<keyof Data>(props.orderBy);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [rows, setRows] = React.useState<Array<Data>>([]);
  const dateConfig = { day: 'numeric', month: "short", year: "2-digit" } as const
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
    // if (studentStore) {
    //   const index = studentStore.students.findIndex(s => s.id === student.id);
    console.log("Nå har jeg klikket på eleven med id:", id)
    // console.log("studenten er da: ", props.store.studentStore.student.name)
    navigate(`/student/${id}`)
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  function dangerColorTextCell(risk: string) {
    if (risk === props.translation.risk.high) {
      return <StyledTableCell style={{ color: '#E43A4A' }} align="right">{risk}</StyledTableCell>
    }
    else if (risk === props.translation.risk.medium) {
      return <StyledTableCell style={{ color: '#FCA762' }} align="right">{risk}</StyledTableCell>
    }
    else {
      return <StyledTableCell align="right">{risk}</StyledTableCell>
    }
  }

  function getLastTestResult(testScore: { score: string, date: Date }[]) {
    if (testScore.length < 1) {
      return "-"
    }
    else if (testScore[0].score === undefined) {
      return "-"
    }
    else {
      return (testScore[testScore.length - 1].score)
    }
  }

  function getLastTestDate(date: Date | undefined | string) {
    if (date === undefined || date === "") {
      return ("-")
    }
    else {
      return (new Date(date).toLocaleDateString(props.translation.localeDateString, dateConfig))
    }
  }

  useEffect(() => {
    if (props.students.length > 0 && Array.isArray(props.students)) {
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
            getLastTestResult(element.tests.motion_test),
            getLastTestResult(element.tests.fixed_form_test),
            getLastTestResult(element.tests.random_form_test),
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
            labels={props.translation.studentTable.labels}
          />
          <TableBody>
            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
            {stableSort(rows, getComparator(order, orderBy, props.translation.risk))
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
                      style={{ textAlign: 'start', padding: 14 }}
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