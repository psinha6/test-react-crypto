import { Loader } from "@progress/kendo-react-indicators";
import millify from "millify";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import DetailsFooter from "../../components/details-footer/details.footer";
import MarketChart from "../../components/market-chart/market-chart.component";
import { useGetCryptoDetailsQuery } from "../../services/cryptoApi";
import { Banner, CategoryContainer, CoinDetailsHeading, CoinStats, CoinStatsName, DetailsContainer, Stats, StatsDetails } from "./details.styles.jsx";

const Details = () => {
    const { id } = useParams();
    const { data, isFetching } = useGetCryptoDetailsQuery(id);

    const cryptoDetails = data?.data?.coin;

    console.log(data);
    if (isFetching) return <Loader />
    const stats = [
        {
            title: "Price to USD",
            value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,
        },
        {
            title: "Rank",
            value: cryptoDetails.rank,
        },
        {
            title: "24h Volume",
            value: `$ ${cryptoDetails["24hVolume"] && millify(cryptoDetails["24hVolume"])
                }`,
        },
        {
            title: "Market Cap",
            value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
        },
        {
            title: "All-time-high(daily avg.)",
            value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
        },
    ];

    // Generic Stats
    const genericStats = [
        {
            title: "Number Of Markets",
            value: cryptoDetails.numberOfMarkets,
        },
        {
            title: "Number Of Exchanges",
            value: cryptoDetails.numberOfExchanges,
        },
        {
            title: "Total Supply",
            value: `$ ${millify(cryptoDetails.supply.total)}`,
        },
        {
            title: "Circulating Supply",
            value: `$ ${millify(cryptoDetails.supply.circulating)}`,
        },
    ];

    return (
        <Fragment>
            <Banner>
                <p>{cryptoDetails.name} Coins Details</p>
            </Banner>

            <CategoryContainer>
                <DetailsContainer>
                    <div className="coindetals">
                        <div>
                            <CoinDetailsHeading level={3}>
                                {cryptoDetails.name} Value Statistics
                            </CoinDetailsHeading>
                            <p>An overview showing the stats of {cryptoDetails.name}</p>
                        </div>
                        {stats.map(({ title, value }) => (
                            <CoinStats key={title}>
                                <CoinStatsName>
                                    <label>{title}</label>
                                </CoinStatsName>
                                <label>{value}</label>
                            </CoinStats>
                        ))}
                    </div>
                    <StatsDetails>
                        <div>
                            <label level={3}>
                                Other Statistics
                            </label>
                            <p>An overview showing the stats of all cryptocurrencies</p>
                        </div>
                        {genericStats.map(({ title, value }) => (
                            <CoinStats key={title}>
                                <CoinStatsName>
                                    <label>{title}</label>
                                </CoinStatsName>
                                <Stats>{value}</Stats>
                            </CoinStats>
                        ))}
                    </StatsDetails>
                </DetailsContainer>
            </CategoryContainer>
            <MarketChart id={id} />
            { cryptoDetails && <DetailsFooter details={cryptoDetails.links} />}
        </Fragment>
    )
}

export default Details;