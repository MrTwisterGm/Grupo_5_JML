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
        { id: 1, lastName: 'Snow', firstName: 'Jon',email: 'snow@gmail.com'},
        { id: 2, lastName: 'Lannister', firstName: 'Cersei',email: 'lannister@gmail.com'},
        { id: 3, lastName: 'Lannister', firstName: 'Jaime',email: 'jaime@gmail.com'},
        { id: 4, lastName: 'Stark', firstName: 'Arya',email: 'rya@gmail@gmail.com'},
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',email: 'targaryen@gmail.com'},
        { id: 6, lastName: 'Melisandre', firstName: 'Cait', email: 'melisandre@gmail.com'  },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'clifford@gmail.com'},
        { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'frances@gmail.com'},
        { id: 9, lastName: 'Roxie', firstName: 'Harvey',email: 'harvey@gmail.com'},
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
