import { useState } from "react"
import "./products.scss"
import DataTable from "../../components/dataTable/DataTable"
import Add from "../../components/add/Add"
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'img', headerName: 'Image', width: 100,
        renderCell: (param) => {
            return <img src={param.row.img} alt="Avatar" />
        }
    },
    {
        field: 'title',
        type: "string",
        headerName: 'Title',
        width: 150,
    },
    {
        field: 'color',
        type: "string",
        headerName: 'Color',
        width: 150,
    },
    {
        field: 'price',
        type: 'string',
        headerName: 'Price',
        width: 100,
    },
    {
        field: 'producer',
        type: 'string',
        headerName: 'Producer',
        width: 150,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        type: "string",
        width: 150,
    },
    {
        field: 'inStock',
        headerName: 'In Stock',
        width: 90,
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
        field: 'title',
        headerName: 'Title',
        type: "string",
        width: 150,
    },
    {
        field: 'color',
        headerName: 'Color',
        type: "string",
        width: 110,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 50,
    },
    {
        field: 'producer',
        headerName: 'Producer',
        type: 'string',
        width: 50,
    },
    {
        field: 'created at',
        headerName: 'Created At',
        type: "string",
        minWidth: 100,
    },
    {
        field: 'inStock',
        headerName: 'In Stock',
        type: "boolean",
        minWidth: 100,
    },
];



const Products = () => {
    const [ac, setAc] = useState(false)
    return (
        <div className='products'>
            <div className="info">
                <h3>Products</h3>
                <button onClick={() => setAc(true)}>Add New Products</button>
            </div>
            <DataTable slug="products" columns={columns} rows={products} />
            {/* DataTable a props olarak gonderdim */}
            {ac && <Add slug="product" columns={modal} setAc={setAc} />}
        </div>
    )
}

export default Products