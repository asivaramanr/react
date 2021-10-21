import * as React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Container from '@material-ui/core/Container';
import './request.css';

export default function InputAdornments() {
    
  const [values, setValues] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  
  return (
    <Container maxWidth="sm">
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      
      <div>
          <p></p>
      <p> <h1>New Form Request</h1></p>
      
        
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.firstname}
            onChange={handleChange('firstname')}
            endAdornment={<InputAdornment position="start">First Name</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'First Name',
            }}
          />
         
        </FormControl>
        <p></p>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.lastname}
            onChange={handleChange('lastname')}
            endAdornment={<InputAdornment position="start">Last Name</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'Last Name',
            }}
          />
        </FormControl>

        <p></p>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
      
    </Box>
    </Container>
  );
}