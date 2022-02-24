import * as React from 'react';
import DateAdapter from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';


export default function ResponsiveDatePickers({date, handleDateChange, isDisabled}) {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DatePicker
          disableFuture
          disabled={!isDisabled}
          openTo="year"
          views={['year', 'month', 'day']}
          value={date}
          onChange={(date) => handleDateChange(isDisabled ? date.toLocaleDateString() : null)}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}