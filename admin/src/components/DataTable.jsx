import * as React from 'react';
import {Box, Typography} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';




const DataTable = ({data, loading}) => {  
  const columns = [
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      renderCell: (params) =>{
        return(
          params.row.email.email
        )
      }
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.email.firstName || ''} ${params.row.email.lastName || ''}`,
    },
    {
      field: 'createdAt',
      headerName: 'Date',
      width: 300,
      filterable: true,
      renderCell: (params) => {
        const date = params.row.createdAt.split("T")[0]; // Extract the date portion
        return date;
          },
    }
      
  ];
  
  return (
    <Box sx={{ height: '90%', width: '100%', boxShadow:3 }}>
    <DataGrid
      {...data}
      rows={loading ? [] : data}
      getRowId={(row) => row._id}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      pageSizeOptions={[10]}
      slots={{ toolbar: GridToolbar }}
      disableRowSelectionOnClick
    />
  </Box>
  )
}

export default DataTable