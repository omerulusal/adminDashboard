import { Link } from "react-router-dom"
import "./chartBox.scss"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

type Props = {
    color: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: object[];
}

const ChartBox = (props: Props) => {
    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={props.icon} alt="icon" />
                    <span>{props.title}</span>
                </div>
                <h3>{props.number}</h3>
                <Link to={"/"} style={{ color: props.color }}>View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    {/*kodları https://recharts.org/en-US/examples/TinyLineChart den aldım */}
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{ backgroundColor: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }}
                            />
                            {/* Tooltip ile veriye hover yapınca bilgi verir. */}

                            <Line
                                type="monotone"
                                dot={false}
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }} >{props.percentage}%</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox