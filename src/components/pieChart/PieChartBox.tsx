import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss"

const datam = [
    { name: "Mobile", value: 300, color: "#0088FE" },
    { name: "Desktop", value: 100, color: "#FF8042" },
    { name: "Laptop", value: 500, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#00C49F" },
]

const PieChartBox = () => {
    return (
        <div className="pieChartBox">
            <h2>Leads by Source</h2>
            <div className="chart">
                <ResponsiveContainer height={250} >
                    <PieChart>
                        <Tooltip
                            contentStyle={{
                                background: "white",
                                borderRadius: "5px",
                                border: "1px"
                            }}
                            labelStyle={{ display: "none" }}
                            position={{ x: 10, y: 70 }}
                            cursor={{ fill: "none" }}
                        />
                        <Pie
                            data={datam}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey={"value"}
                        >
                            {datam.map((item) => (
                                <Cell
                                    key={item.name}
                                    fill={item.color}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {datam.map(item => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{ backgroundColor: item.color }} />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChartBox