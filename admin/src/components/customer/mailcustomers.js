import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useGetItems } from '../Add_doc'
export const Mailcustomers = () => {
    const { docs } = useGetItems('customers')
    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'email', headerName: 'Mail', width: 200 ,valueGetter: (params) =>
        `${params.row.email || ''}`,
}
]
    return (
        <DataGrid
            rows={docs}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    )
}