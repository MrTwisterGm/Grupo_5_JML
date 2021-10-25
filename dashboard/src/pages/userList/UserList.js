import './userList.css'
import { DataGrid } from '@mui/x-data-grid';

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        { field: 'firstName', headerName: 'First name', width: 170 },
        { field: 'lastName', headerName: 'Last name', width: 170 },
        { field: 'email', headerName: 'E-mail', width: 300 },
       
      ];
      
      const rows = [
        { id: 1, lastName: 'bernardi', firstName: 'matias',email: 'matyasezeber@gmail.com'},
        { id: 2, lastName: 'Simpson', firstName: 'Tomas',email: 'matybereze@gmail.com'},
        
      ];
    return (
        <div style={{flex:4}}>
            <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> 
        </div>
    )
}
