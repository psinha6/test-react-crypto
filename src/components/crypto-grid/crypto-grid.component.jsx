import React from "react";
import { getSelectedState, Grid, GridColumn } from '@progress/kendo-react-grid';
import { process } from "@progress/kendo-data-query";
import { Loader } from "@progress/kendo-react-indicators";
import { useGetCryptosQuery } from '../../services/cryptoApi';
import millify from "millify";
import { useNavigate } from "react-router-dom";

const SELECTED_FIELD = 'name';
const DATA_ITEM_KEY = 'uuid';

const CryptoGridComponent = () => {
  const navigate = useNavigate();
  const initialDataState = {
    sort: [
      {
        field: "code",
        dir: "asc",
      },
    ],
    take: 10,
    skip: 0,
  };
  const [dataState, setDataState] = React.useState(initialDataState);
  const count = 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  console.log(cryptosList);
  const customisedCell = (props) => {
    const field = props.field || "";
    return (
      <td>
        {millify(props.dataItem[field])}
      </td>
    )
  };

  const onRowClick = (e) => {
    console.log(e, "data selection change");
    navigate(`details/${e.dataItem.uuid}`);
  };

  if (isFetching) return <Loader />;
  return <Grid style={{
    height: '400px'
  }} data={process(cryptosList.data.coins, dataState)} {...dataState} sortable={true} pageable={{
    buttonCount: 4,
    pageSizes: true,
  }} onDataStateChange={(e) => { setDataState(e.dataState);}} onRowClick={onRowClick}
  selectable={{
    enabled: true,
    drag: false,
    cell: false,
    mode: "single",
  }}>
    <GridColumn field="name" title="Name" />
    <GridColumn field="rank" title="Rank" />
    <GridColumn field="price" title="Price (USD)" cell={customisedCell} />
    <GridColumn field="marketCap" title="Market Cap (USD)" cell={customisedCell} />
    <GridColumn field="change" title="Percentages - Change rate (1hr, 24hrs, 7days)" cell={customisedCell} />
  </Grid>;
};

export default CryptoGridComponent;