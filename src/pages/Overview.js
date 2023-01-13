import React, { useEffect } from 'react';
import './styles.css'
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Pagination, Stack } from '@mui/material';


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const customers= [
  {
    id:'1',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'2',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'3',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: false,

  },
  {
    id:'4',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'5',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'6',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'7',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'8',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },

  {
    id:'9',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'10',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'11',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: false,

  },
  {
    id:'12',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'13',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'14',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'15',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
  {
    id:'16',
    name:'Jessy Bandya',
    phone:'+254746749307',
    avatar:'https://www.wuyidoric.com.au/WuYiDoric/media/images/Projects/UniversityOfNairobiTowersProject/UniversityOfNairobiTowersProject_banner.jpg',
    deposit:'NGN 34,678',
    date:'Jan 6, 2022 9:30PM',
    voucher_no: '0045E',
    status: true,

  },
]

const headCells = [
  {
    id: 'customers',
    numeric: false,
    disablePadding: true,
    label: 'customers',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'deposit',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'date',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'voucher no.',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'trans.status',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <TableHead     style={{backgroundColor:'#e5e7eb'}}
    >
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
          sx={{
            "& .MuiSvgIcon-root": {
              color: '',
            }
          }}
        
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
           align="center" 
          >
            <TableSortLabel
              style={{fontStyle:'normal',fontWeight:'600',fontSize:12,textTransform:'uppercase',color:'#707070'}}
            >
              {headCell.label}

            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
    style={{backgroundColor:'#e5e7eb'}}
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          CUSTOMERS
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const Overview = () => {

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = customers.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage - 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;


  const count = Math.ceil(customers.length / 5)

  return (
    <section className='bg-[#e5e7eb] dark:bg-main-dark-bg' id="content">
    <main>
      <div className="head-title">
        <div className="left">
        <span style={{fontWeight:'500',fontSize:24}} className='text-4xl text-[#222222] dark:text-[#fff]'>Overview</span>
        </div>
      </div>
      <ul className="box-info">
        <li className='bg-[#fff] dark:bg-main-dark-bg'>
          <AccountBalanceWalletOutlinedIcon className="bx bxs-calendar-check" />
          <span className="text">
            <h3>Total OutStanding Balance</h3>
            <p>6,354,567</p>
          </span>
        </li>
        <li>
          <CurrencyExchangeIcon className="bx bxs-group" />
          <span className="text">
            <h3>Total repaymnet pending</h3>
            <p>5,347,367</p>
          </span>
        </li>
        <li>
          <ReceiptLongOutlinedIcon className="bx bxs-dollar-circle" />
          <span className="text">
            <h3>Total transaction counts</h3>
            <p>3,302</p>
          </span>
        </li>
      </ul>
   <div className='div-2'>
      <div className='search-div'>
          <div style={{padding:15}}><SearchOutlinedIcon style={{color:'#757575'}}/></div>
          <div><input style={{outline:'none',width:210,marginTop:3}} placeholder="Search for customer's name"/></div>
      </div>
      <div style={{marginTop:3}} className='div-2-button'>Export</div>
   </div>


   <div style={{marginTop:8}}>

   <Box sx={{ width: '100%' }}>
   <Paper sx={{ width: '100%', mb: 2 }}>
     <EnhancedTableToolbar numSelected={selected.length} />
     <TableContainer style={{ height: 415 }}>
       <Table
         sx={{ minWidth: 750 }}
         aria-labelledby="tableTitle"
         size={dense ? 'small' : 'medium'}
       >
         <EnhancedTableHead
           numSelected={selected.length}
           order={order}
           orderBy={orderBy}
           onSelectAllClick={handleSelectAllClick}
           onRequestSort={handleRequestSort}
           rowCount={customers.length}
         />
         <TableBody

         >
           {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.sort(getComparator(order, orderBy)).slice() */}
              
           {stableSort(customers, getComparator(order, orderBy))
             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
             .map((row) => {
               const isItemSelected = isSelected(row.id);
               const labelId = `enhanced-table-checkbox-${row.id}`;

               return (
                 <TableRow
                   hover
                   onClick={(event) => handleClick(event, row.id)}
                   role="checkbox"
                   aria-checked={isItemSelected}
                   tabIndex={-1}
                   key={row.id}
                   selected={isItemSelected}
                 >
                   <TableCell padding="checkbox">
                     <Checkbox
                     sx={{
                      "& .MuiSvgIcon-root": {
                        color: '',
                      }
                    }}
                       checked={isItemSelected}
                       inputProps={{
                         'aria-labelledby': labelId,
                       }}
                     />
                   </TableCell>
                   <TableCell
                   style={{fontSize:14,fontWeight:"400",color:"#101828",display:'flex',alignItems:'center'}}
                   >
                     <Avatar src={row.avatar} alt={row.name}/>
                     <div style={{display:'inline-block',marginLeft:12}}>
                     <div>{row.name}</div>
                     <div style={{color:'#667085'}}>{row.phone}</div>
                     </div>
                   </TableCell>
                   <TableCell align="center"
                   style={{fontSize:14,fontWeight:"500",color:"#101828"}}
                   >{row.deposit}</TableCell>
                   <TableCell align="center"
                   style={{fontSize:14,fontWeight:"400",color:"#101828"}}
                   >{row.date}</TableCell>
                   <TableCell align="center"
                   style={{fontSize:14,fontWeight:"400",color:"#101828"}}
                   >{row.voucher_no}</TableCell>
                   <TableCell align="center">{row.status === true ?(<span style={{alignText:'center',fontSize:12,fontWeight:'500',color:'#027A48'}}>Successful</span>):(<span style={{textAlign:'center',fontSize:12,fontWeight:'500',color:'#B42318'}}>Failed</span>)}</TableCell>
                 </TableRow>
               );
             })}
         </TableBody>
       </Table>
     </TableContainer>
     <Stack alignItems="center" style={{padding:20}}>
     <Pagination count={count} page={page+1} onChange={handleChangePage}/>
   </Stack>
   </Paper>
 </Box>
   </div>

    </main>
    {/* MAIN */}
  </section>
  );
};

export default Overview;
