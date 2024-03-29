import BarChartBox from "../../components/barChartBox/BarChartBox"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
import ChartBox from "../../components/chartBox/ChartBox"
import PieChartBox from "../../components/pieChart/PieChartBox"
import TopBox from "../../components/topBox/TopBox"
import { barChartBoxRevenue,  barChartBoxVisits,  chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import "./home.scss"
const Home = () => {
    return (
        <div className='home'>
            <div className="box box1">
                <TopBox />
            </div>
            <div className="box box2"><ChartBox {...chartBoxUser} /></div>
            <div className="box box3"><ChartBox {...chartBoxProduct} /></div>
            <div className="box box4"><PieChartBox /></div>
            <div className="box box5"><ChartBox {...chartBoxConversion} /></div>
            <div className="box box6"><ChartBox {...chartBoxRevenue} /></div>
            <div className="box box7"><BigChartBox /> </div>
            <div className="box box8"><BarChartBox {...barChartBoxVisits} /></div>
            <div className="box box9"> <BarChartBox {...barChartBoxRevenue} /></div>
        </div>
    )
}
// chartlara data.ts te oluşturdugum verileri yolladım.

export default Home