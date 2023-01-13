import React, { useEffect,useState } from 'react';
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
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, Pagination, Stack } from '@mui/material';
import PercentIcon from '@mui/icons-material/Percent';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import RequestPageIcon from '@mui/icons-material/RequestPage';

const countries = [
  { code: 'KE', label: 'Kenya', phone: '376' }
]
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
    id: 'date',
    numeric: false,
    disablePadding: true,
    label: 'date',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'account',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'invoice total',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'amount received',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'percentage reconcile',
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

const Defaulters = () => {

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

  const [showErp, setShowErp] = useState(false);
  const [showCsv, setShowCsv] = useState(false);
  const [showAcc, setShowAcc] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [showBank, setShowBank] = useState(false);

  const handleCloseMobile = () => setShowMobile(false);
  const handleShowMobile = () => setShowMobile(true); 
  
  const handleCloseBank = () => setShowBank(false);
  const handleShowBank = () => setShowBank(true); 

  const handleCloseAcc = () => setShowAcc(false);
  const handleShowAcc = () => setShowAcc(true);

  const handleCloseCsv = () => setShowCsv(false);
  const handleShowCsv = () => setShowCsv(true);

  const handleCloseErp = () => setShowErp(false);
  const handleShowErp = () => setShowErp(true);



  return (
    <section className='bg-[#e5e7eb] dark:bg-main-dark-bg' id="content">
    <main>
    <div className="head-title">
    <div className="left">
      <span style={{fontWeight:'500',fontSize:24}} className='text-4xl text-[#222222] dark:text-[#fff]'>Account summary</span>
    </div>
  </div>
    <div style={{marginTop:30}} className="head-title">
        <div style={{backgroundColor:'#EAECF0',width:139, height:42,alignItems:'center',display:'flex',justifyContent:'space-between',borderRadius:8,padding:5}} className="left">
          <FilterAltOutlinedIcon />
           <span style={{fontWeight:'500',fontSize:14,color:'#101010'}}>Today</span>
           <KeyboardArrowDownOutlinedIcon />
        </div>
        <div style={{display:'flex',alignItems:'center',gap:5,flexWrap:'wrap'}}>
            <div
            onClick={handleShowErp}
            style={{width:151,height:42,backgroundColor:'#FFBD2E',borderRadius:8,display:'flex',alignItems:'center',padding:8,justifyContent:'space-between',cursor:'pointer'}}
            ><InsertLinkOutlinedIcon /> <span style={{fontWeight:'500',fontSize:14,color:'#101010'}}>Connect ERP</span></div>
            <div
            onClick={handleShowCsv}
            style={{width:145,height:42,backgroundColor:'#80B539',borderRadius:8,display:'flex',alignItems:'center',padding:8,justifyContent:'space-between',cursor:'pointer'}}
            ><DescriptionOutlinedIcon style={{color:'#FFFFFF'}}/> <span style={{fontWeight:'500',fontSize:14,color:'#FFFFFF'}}>Upload CSV</span></div>
            <div
            onClick={handleShowAcc}
            style={{width:181,height:42,backgroundColor:'#222222',borderRadius:8,display:'flex',alignItems:'center',padding:8,justifyContent:'space-between',cursor:'pointer'}}
            ><AccountCircleOutlinedIcon style={{color:'#FFFFFF'}}/> <span style={{fontWeight:'500',fontSize:14,color:'#FFFFFF'}}>Connect Account</span></div>
        </div>
      </div>

      <ul className="box-info">
        <li className='bg-[#000] dark:bg-secondary-dark-bg'>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <ShoppingBasketOutlinedIcon 
        style={{
            color:'#fff',
            backgroundColor:'#222222',
            height:40,
            width:40,
            padding:4,
            borderRadius:28,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            border: '4px solid #D9D9D9'
        }}
        />
        <div style={{backgroundColor:'#F2F2F2',width:57, height:28,alignItems:'center',display:'flex',justifyContent:'space-between',borderRadius:4,padding:5}}>
         <span style={{fontWeight:'500',fontSize:14,color:'#555555'}}>KES</span>
         <KeyboardArrowDownOutlinedIcon style={{color:'#555555'}}/>
      </div>
        </div>
          <span className="text">
            <h3>Total order transactions</h3>
            <p>6,354,567</p>
          </span>
        </li>
        <li>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <PaidOutlinedIcon 
        style={{
            color:'#fff',
            backgroundColor:'#222222',
            height:40,
            width:40,
            padding:4,
            borderRadius:28,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            border: '4px solid #D9D9D9'
        }}
        />
        <div style={{backgroundColor:'#F2F2F2',width:57, height:28,alignItems:'center',display:'flex',justifyContent:'space-between',borderRadius:4,padding:5}}>
         <span style={{fontWeight:'500',fontSize:14,color:'#555555'}}>KES</span>
         <KeyboardArrowDownOutlinedIcon style={{color:'#555555'}}/>
      </div>
        </div>
          <span className="text">
            <h3>Total collections</h3>
            <div style={{display:'flex',alignItems:'center',marginTop:15,justifyContent:'space-between'}}>
            <div style={{fontWeight:'600',fontSize:32,color:'#101828'}}>5,347,367</div>
            </div>
          </span>
        </li>
        <li>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div style={{display:'block',marginTop:50}}>
          <div style={{color:'#667085',fontWeight:'500',fontSize:14}}>Reconcile</div>
          <div style={{color:'#101828',fontWeight:'600',fontSize:32,marginTop:15}}>53<span style={{color:'#B5B5B5',fontWeight:'500',fontSize:24}}>/100<PercentIcon/></span></div>
          </div>
          <div style={{
            width:132,
            height:132,
            borderRadius:132/2,
            background: '#FFF0D1',
            border: '7px solid #FEAA00',        
          }}><span style={{color:'#101828',fontWeight:'600',fontSize:32,letterSpacing:'-0.02em',display:'table',margin:'0 auto',marginTop:33}}>53<PercentIcon/></span></div>
          </div>
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
                   <TableCell align="center"
                   style={{fontSize:14,fontWeight:"400",color:"#667085"}}
                   >{row.date}</TableCell>
                   <TableCell
                   style={{fontSize:14,fontWeight:"400",color:"#101828",display:'flex',alignItems:'center'}}
                   >
                     <Avatar src={row.avatar} alt={row.name}/>
                     <div style={{display:'block',marginLeft:12}}>
                     <div>Account Name</div>
                     <div style={{color:'#667085'}}>81890064</div>
                     </div>
                   </TableCell>
                   <TableCell align="center"
                   style={{fontSize:14,fontWeight:"500",color:"#101828"}}
                   >KES 111,345</TableCell>
                   <TableCell align="center"
                   style={{fontSize:14,fontWeight:"500",color:"#101828"}}
                   >
                  KES 239,657
                   </TableCell>
                   <TableCell align="center">
                   <span  style={{backgroundColor:'#ECFDF3',borderRadius:16,height:22,width:75,padding: '2px 8px 2px 6px'}}>
                   <span style={{fontSize:12, fontWeight:'500',color:'#027A48'}}>83%</span>
                   </span>
                   </TableCell>
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


    <Dialog
    open={showErp}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleCloseErp}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogContent 
    className='reconcile-modal'
    style={{
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 4px 20px rgba(34, 34, 34, 0.05)',
      borderRadius:8,
      display:'block'
    }}
    >
     <span
     style={{
      fontSize:24,
      fontWeight:'500',
      color:'#222222',
     }}
     >Connect your ERP</span>
     <div
     style={{
       color:'#808080',
       fontSize:14,
       fontWeight:'400',
       marginBottom:10
     }}
     >Connect your mobile account or bank statement to continue</div>
    <div
    style={{
      color:'#808080',
      fontSize:14,
      fontWeight:'500',
      marginTop:20,
      marginBottom:10
    }}
    >ERP</div>
    <Autocomplete
    id="country-select-demo"
    sx={{ width: '100%',cursor:'pointer' }}
    options={countries}
    autoHighlight
    getOptionLabel={(option) => option.label}
    renderOption={(props, option) => (
      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
        <img
          loading="lazy"
          width="20"
          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
          alt=""
        />
        Xero
      </Box>
    )}
    renderInput={(params) => (
      <TextField
      fullWidth
        {...params}
        label="Select ERP"
        inputProps={{
          ...params.inputProps,
          autoComplete: 'new-password',
          style: {
            width:'100%',
            backgroundColor:'#FFFFFF',
            color:'#101010',
            fontWeight:400,
            fontSize:16
          },
           // disable autocomplete and autofill
        }}
      />
    )}
  />

  <button
  style={{backgroundColor:'#80B539',borderRadius:10,color:'#fff',width:'100%',height:50,marginTop:10}}
  >
   Connect
  </button>

    </DialogContent>
  </Dialog>



  <Dialog
  open={showCsv}
  TransitionComponent={Transition}
  keepMounted
  onClose={handleCloseCsv}
  aria-describedby="alert-dialog-slide-description"
>
  <DialogContent
  style={{
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 20px rgba(34, 34, 34, 0.05)',
    borderRadius:8,
    display:'block',
    width:'100%',

  }}
  >
   <div style={{display:'flex',alignItems:'center',gap:5}}>
   <span
   onClick={handleCloseCsv}
   style={{
    height:32,
    width:32,
    backgroundColor:'#EFEFEF',
    borderRadius:14,
    cursor:'pointer',
   }}
   ><ArrowBackIosIcon style={{fontSize:20,margin:7}}/></span><span style={{color:'#222222',fontSize:14,fontWeight:'400'}}>Go Back</span>
   </div>

   <div style={{
    marginTop:20,
    height: 138,
    width:'100%',
    background: '#FBFBFB',
   border: '1.8px dashed #C5C5C5',
   borderRadius: 10,
   justifyContent:'center',
   alignItems:'center',
   alignContent:'center'
  }}>
     <div style={{display:'table',margin:'0 auto',marginTop:33}}>
           <center><UploadFileIcon style={{fontSize:60,color:'#CCCCCC'}}/></center>
          <center style={{fontWeight:'400',fontSize:14,color:'#808080'}}>Click to upload pdf file</center>
     </div>
   </div>

   <button
   style={{backgroundColor:'#80B539',borderRadius:10,color:'#fff',width:300,height:50,marginTop:20}}
   >
    Submit
   </button>
  </DialogContent>
</Dialog>


<Dialog
open={showAcc}
TransitionComponent={Transition}
keepMounted
onClose={handleCloseAcc}
aria-describedby="alert-dialog-slide-description"
>
<DialogContent
style={{
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 20px rgba(34, 34, 34, 0.05)',
  borderRadius:8,
}}
>
<span
style={{
 fontSize:24,
 fontWeight:'500',
 color:'#222222',
}}
>Connect account</span>
<div
style={{
  color:'#808080',
  fontSize:14,
  fontWeight:'400',
  marginBottom:10
}}
>Connect your mobile account or bank statement to continue</div>

<div style={{display:'table',margin:'0 auto',marginTop:10}}>
    <div>
    <center><AccountBalanceWalletIcon onClick={handleShowMobile} style={{height:80,width:80,borderRadius:80/2,backgroundColor:'#E4F2D1',alignItems:'center',justifyContent:'center',padding:25,cursor:'pointer'}}/></center>
    <center style={{fontWeight:'500',fontSize:14,color:'#000000',marginTop:5}}>Mobile money account</center>
    </div>
    <div style={{marginTop:15}}>
    <center><RequestPageIcon onClick={handleShowBank} style={{height:80,width:80,borderRadius:80/2,backgroundColor:'#FFE3A8',alignItems:'center',justifyContent:'center',padding:25,cursor:'pointer'}}/></center>
      <center style={{fontWeight:'500',fontSize:14,color:'#000000',marginTop:5}}>Bank account</center>
    </div>
</div>
</DialogContent>
</Dialog>








<Dialog
open={showMobile}
TransitionComponent={Transition}
keepMounted
onClose={handleCloseMobile}
aria-describedby="alert-dialog-slide-description"
>
<DialogContent
style={{
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 20px rgba(34, 34, 34, 0.05)',
  borderRadius:8,
}}
>
<div style={{display:'flex',alignItems:'center',gap:5}}>
<span
onClick={handleCloseMobile}
style={{
 height:32,
 width:32,
 backgroundColor:'#EFEFEF',
 borderRadius:14,
 cursor:'pointer'
}}
><ArrowBackIosIcon style={{fontSize:20,margin:7}}/></span><span style={{color:'#222222',fontSize:14,fontWeight:'400'}}>Go Back</span>
</div>
<hr style={{marginTop:20}}/>
<span style={{fontWeight:'500',fontSize:24,color:'#222222'}}>
Mobile money account
</span>
<p style={{fontWeight:'400',fontSize:14,color:'#808080'}}>Choose an option to proceed</p>

<button
style={{backgroundColor:'#EAECF0',borderRadius:10,color:'#fff',width:'100%',height:50,marginTop:20,color:'#101010',fontSize:18,fontWeight:'500'}}
>
Connect MPesa account
</button>

<button
style={{border:'2px solid #101010',borderRadius:10,color:'#fff',width:'100%',height:50,marginTop:20,color:'#101010',fontSize:18,fontWeight:'500'}}
>
Upload MPesa statement
</button>
</DialogContent>
</Dialog>



<Dialog
open={showBank}
TransitionComponent={Transition}
keepMounted
onClose={handleCloseBank}
aria-describedby="alert-dialog-slide-description"
>
<DialogContent
style={{
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 4px 20px rgba(34, 34, 34, 0.05)',
  borderRadius:8,
}}
>
<div style={{display:'flex',alignItems:'center',gap:5}}>
<span
onClick={handleCloseBank}
style={{
 height:32,
 width:32,
 backgroundColor:'#EFEFEF',
 borderRadius:14,
 cursor:'pointer'
}}
><ArrowBackIosIcon style={{fontSize:20,margin:7}}/></span><span style={{color:'#222222',fontSize:14,fontWeight:'400'}}>Go Back</span>
</div>
<hr style={{marginTop:20}}/>
<span style={{fontWeight:'500',fontSize:24,color:'#222222'}}>
Bank account
</span>
<p style={{fontWeight:'400',fontSize:14,color:'#808080'}}>Choose an option to proceed</p>

<button
style={{backgroundColor:'#EAECF0',borderRadius:10,color:'#fff',width:'100%',height:50,marginTop:20,color:'#101010',fontSize:18,fontWeight:'500'}}
>
Connect bank account
</button>

<button
style={{border:'2px solid #101010',borderRadius:10,color:'#fff',width:'100%',height:50,marginTop:20,color:'#101010',fontSize:18,fontWeight:'500'}}
>
Upload bank statement
</button>
</DialogContent>
</Dialog>
  </section>
 
  );
};

export default Defaulters;
