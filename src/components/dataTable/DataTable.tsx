import { Box } from "@mui/material"
import "./dataTable.scss"
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import { Link } from "react-router-dom"

//type belirtme 
type Props = {
    columns: GridColDef[],
    rows: object[],
    slug: string,
}

const DataTable = (props: Props) => {
    // parametre olarak type belirtme
    const actionColumn: GridColDef = {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (par) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${par.row.id}`}  >
                        <img src="/view.svg" alt="view" />
                    </Link>
                    <div className="delete">
                        <img src="/delete.svg" alt="delte" />
                    </div>
                </div>
            )
        }
    }


    return (
        <div className='dataTable'>
{/* // BU KOD BLOGU https://mui.com/x/react-data-grid/ ten alındı (42-68) */}
            <Box sx={{ height: 720, width: '100%' }}>
                <DataGrid
                    className="dataGrid"
                    rows={props.rows}
                    columns={[...props.columns, actionColumn]}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                />
            </Box>
        </div>
    )
}

export default DataTable