import { GridColDef } from "@mui/x-data-grid"
import "./add.scss"

type Props = {
    slug: string,
    columns: GridColDef[],
    setAc: React.Dispatch<React.SetStateAction<boolean>>,
    // setAc degerini state hover yapınca gelenden aldım
}

const Add = (props: Props) => {
    return (
        <div className="add" >
            <div className="modal">
                <span className="close" onClick={() => props.setAc(false)}>X</span>
                <h3>Add new {props.slug}</h3>
                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
                    {props.columns.filter(item => item.field !== "id" && item.field !== "img")
                        .map((column) => (
                            <div className="item">
                                <label> {column.headerName}</label>
                                <input type={column.type} placeholder={column.field} />
                            </div>
                        ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Add