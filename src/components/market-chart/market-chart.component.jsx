import { Chart, ChartCategoryAxis, ChartCategoryAxisItem, ChartLegend, ChartSeries, ChartSeriesItem, ChartTitle } from "@progress/kendo-react-charts";
import { Loader } from "@progress/kendo-react-indicators";
import { useGetCryptoMarketQuery } from "../../services/cryptoApi";

export const MarketChart = ({ id }) => {
  const { data, isFetching } = useGetCryptoMarketQuery(id);

  console.log(data);
  if(isFetching) return <Loader />

  const categories = ["price"];
  const series = data.data.markets.map(item => {
    return {
      name: item.exchange.name,
      data: item.marketShare
    }
  })
  return (
    <Chart pannable={true} zoomable={true}
      style={{
        height: 500,
      }}
    >
      <ChartTitle text="Line Chart displaying the list of top 10 Coins market share" />
      <ChartLegend position="top" orientation="horizontal" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem categories={categories} startAngle={80} maxDivisions={100} />
      </ChartCategoryAxis>
      <ChartSeries>
        {series.map((item, idx) => (
          <ChartSeriesItem
            key={idx}
            type="line"
            tooltip={{
              visible: true,
            }}
            data={item.data}
            name={item.name}
          />
        ))}
      </ChartSeries>
    </Chart>
  )
}

export default MarketChart;