import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./bigChartBox.scss"

const veri = [
    { name: "Sun", books: 3860, clothes: 2360, electronic: 4500, },
    { name: "Mon", books: 6500, clothes: 2400, electronic: 1500, },
    { name: "Tue", books: 1250, clothes: 7900, electronic: 6400, },
    { name: "Wed", books: 6060, clothes: 3500, electronic: 2300, },
    { name: "Thu", books: 5860, clothes: 6000, electronic: 2500, },
    { name: "Fri", books: 1200, clothes: 2200, electronic: 1500, },
    { name: "Sat", books: 3370, clothes: 1350, electronic: 4600, },
]
const BigChartBox = () => {
    return (
        <div className="bigChart">
            <h3>Revenue Analytics</h3>
            <div className="chart">
                <ResponsiveContainer width={"99%"} height={"99%"}>
                    <AreaChart
                        data={veri}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="electronic"
                            stackId="1"
                            stroke="#8882d5"
                            fill="#8882d5"
                        />
                        <Area
                            type="monotone"
                            dataKey="clothes"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                        <Area
                            type="monotone"
                            dataKey="books"
                            stackId="1"
                            stroke="#ffc658"
                            fill="#ffc658"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartBox