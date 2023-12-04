import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import "./barChartBox.scss"

type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}

const BarChartBox = (props: Props) => {
    return (
        <div className="barChart">
            <h3>{props.title}</h3>
            <div className="chart">
                <ResponsiveContainer >
                    <BarChart data={props.chartData}>
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#2a3447",
                                borderRadius: "5px",
                            }}
                        labelStyle={{ display: "none" }}
                        position={{ x: 10, y: 70 }}
                        cursor= {{fill:"none"}}
                        />
                        <Bar dataKey={props.dataKey} fill={props.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChartBox