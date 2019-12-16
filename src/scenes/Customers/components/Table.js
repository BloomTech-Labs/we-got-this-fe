import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { Link } from "react-router-dom";
import { routes } from "../../../constants/routes";
import { actions } from "../../../state/customer/customerActions";
import { useStateValue } from "../../../state";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles(theme => ({
  root: {
    // width: "100%",
    backgroundColor: "#E5E5E5",
    marginTop: "100px"
  },
  table: {
    // minWidth: 650,
    width: "95%",
    marginLeft: "62px",
    backgroundColor: "#FFFFFF"
  },
  header: {
    "& th": {
      fontWeight: 600,
      width: "200px",
      backgroundColor: "#FFFAFA"
    }
  },
  button: {
    borderRadius: "6px",
    backgroundColor: "#2678C0",
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingTop: "8px",
    paddingBottom: "8px",
    color: "white",
    outline: "none",
    margin: "10px"
  },
  spacing: {
    padding: "0",
    width: "160px",
    // backgroundColor: "#E5E5E5",
  },
  border: {
    border: "1px solid #F2EEEE"
  }
}));

const headerCells = [
  {
    id: "name",
    align: "left",
    label: "Customer Name"
  },
  {
    id: "phone",
    align: "left",
    label: "Phone Number"
  },
  {
    id: "street",
    align: "left",
    label: "Street Address"
  },
  {
    id: "zip",
    align: "left",
    label: "Zip"
  },
  {
    id: "type",
    align: "left",
    label: "Customer Type"
  },
  {
    id: "type",
    align: "left",
    label: ""
  }
];

function desc(a, b, orderBy) {
  if (orderBy == "street") {
    let aLocation = a.locations[0].address.street;
    let bLocation = b.locations[0].address.street;
    if (bLocation < aLocation) {
      return -1;
    }
    if (bLocation > aLocation) {
      return 1;
    }
  } else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const CustomerTable = ({ customers, onRequestSort, orderBy, order }) => {
  const [, dispatch] = useStateValue();
  const classes = useStyles();

  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
//   const handleFilterChange = e => setFilter(e.target.value);

//   const filters = {
//     all: () => true,
//     active: tech => !tech.disabled,
//     disabled: tech => tech.disabled,
// };

// const [filter, setFilter] = useState('all');

  return (
    <>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow className={classes.header}>
            {headerCells.map(headCell => {
              return (
                <TableCell
                  key={headCell.id}
                  align={headCell.align}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={order}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(
            customers.length ? customers : [],
            getSorting(order, orderBy)
          ).map(customer => {
            return (
              <TableRow className={classes.border} key={customer.docId}>
                <TableCell component="th" scope="row">
                  {customer.name}
                </TableCell>
                <TableCell align="left">{customer.contact.phone}</TableCell>
                <TableCell align="left">
                  {customer.locations[0].address.street}
                </TableCell>
                <TableCell align="left">
                  {customer.locations[0].address.zipcode}
                </TableCell>
                {/* <TableCell align="right">
                                    {customer.nextServiceDate ||
                                        'No service scheduled'}
                                </TableCell> */}
                <TableCell className={classes.header} align="left">
                  {customer.type || "Unknown"}
                </TableCell>
                <TableCell className={classes.spacing} align="left">
                  <Link
                    to={`${routes.CUSTOMERS}/${customer.docId}`}
                    onClick={() => {
                      actions.setCurrentCustomer(dispatch, customer);
                    }}
                  >
                    <button className={classes.button}>
                      View Customer Details
                    </button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default CustomerTable;
