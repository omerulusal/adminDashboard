import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";
// BU KODLARIN TAMAMI https://mui.com/x/react-data-grid/ ten alındı (6-55)
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'img', headerName: 'Avatar', width: 100,
        renderCell: (param) => {
            return <img src={param.row.img || "/noavatar.png"} alt="Avatar" />
        }
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 110,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 50,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'status',
        headerName: 'Status',
        minWidth: 100,
        type: "boolean",
    },

];
const modal: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'img', headerName: 'Image', width: 100,
        renderCell: (param) => {
            return <img src={param.row.img} alt="Avatar" />
        }
    },
    {
        field: 'firstName',
        headerName: 'First name',
        type: "string",
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        type: "string",
        width: 110,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'email',
        width: 50,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        type: 'number',
        width: 50,
    },
    {
        field: 'created At',
        headerName: 'Created At',
        type: "string",
        minWidth: 100,
    },
    {
        field: 'verified',
        headerName: 'Verified',
        type: "boolean",
        minWidth: 100,
    },
];

const Users = () => {
    const [ac, setAc] = useState(false)
    return (
        <div className='users'>
            <div className="info">
                <h3>Users</h3>
                <button onClick={() => setAc(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {/* DataTable a props olarak gonderdim */}
            {ac && <Add slug="user" columns={modal} setAc={setAc} />}
        </div>
    )
}

export default Users