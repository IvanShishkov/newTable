import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const columnDefs = [
  "id",
  "first_name",
  "last_name",
  "username",
  "email",
  "avatar",
  "random_number_one",
  "random_number_two",
  "random_number_three",
  "random",
  "date",
  "zip_code",
  "city",
  "street_name",
  "street_adress",
  "latitude",
  "longitude",
  "phone_number",
  "domain_name",
  "domain_word",
  "ip",
  "color",
  "suffixes",
  "company_name",
  "slogan",
  "bs",
  "words",
  "fuel",
  "password",
  "random_number_five",
  "manufacturer",
  "vehicle",
  "model",
  "future",
  "file_name",
  "vin",
  "credit_card_number",
  "user_card",
  "product",
  "time_zone",
];

let summa = 0;
let percentSumma = 0;
let avg1Summa = 0;
let avg2Summa = 0;

export const MyTable = ({ list }) => {
  const [gridApi, setGridApi] = React.useState(null);
  const [gridColumnApi, setGridColumnApi] = React.useState(null);

  const [rowData] = React.useState(list);
  rowData.map((i) => (summa += parseInt(i.random_number_three, 10)));
  rowData.map((i) => (percentSumma += parseFloat(i.random_number_one)));
  rowData.map((i) => (avg1Summa += parseInt(i.random_number_two, 10)));
  rowData.map((i) => (avg2Summa += parseInt(i.random_number_five, 10)));

  const [sumMoney, setSumMoney] = React.useState(summa);
  const [percentSum, setPercentSum] = React.useState(percentSumma);
  const [avg1, setAvg1] = React.useState(avg1Summa);
  const [avg2, setAvg2] = React.useState(avg2Summa);
  const [rowsCount, setRowsCount] = React.useState(rowData.length);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  list = list.map((data, index) => {
    data.id = index + 1;
    return data;
  });

  function countryCellRenderer(params) {
    if (params.value) {
      const flag =
        "<img width='55' height='55' src='" + params.value + "' alt='avatar' >";
      return flag;
    } else {
      return "none";
    }
  }

  const onChangeVisible = () => {
    gridColumnApi.setColumnsVisible(columnDefs, true);
  };

  const valueGetter = (params) => {
    return params.node.rowIndex + 1;
  };

  const onFilterChange = (event) => {
    let sum = 0;
    let percentSum = 0;
    let avg1Sum = 0;
    let avg2Sum = 0;

    event.api.rowModel.rowsToDisplay.map((i) => {
      sum += parseInt(i.data.random_number_three, 10);
    });
    event.api.rowModel.rowsToDisplay.map((i) => {
      percentSum += parseFloat(i.data.random_number_one);
    });
    event.api.rowModel.rowsToDisplay.map((i) => {
      avg1Sum += parseInt(i.data.random_number_two, 10);
    });
    event.api.rowModel.rowsToDisplay.map((i) => {
      avg2Sum += parseInt(i.data.random_number_five, 10);
    });

    setSumMoney(sum);
    setPercentSum(percentSum);
    setAvg1(avg1Sum);
    setAvg2(avg2Sum);

    setRowsCount(event.api.rowModel.rowsToDisplay.length);
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ position: "absolute", height: "100%", width: "100%" }}
    >
      <button onClick={onChangeVisible}>Show all columns</button>
      <AgGridReact
        onGridReady={onGridReady}
        defaultColDef={{
          sortable: true,
          resizable: true,
        }}
        rowHeight={55}
        rowData={rowData}
        onFilterChanged={onFilterChange}
      >
        <AgGridColumn headerName="#" width="80" pinned="left">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            valueGetter={valueGetter}
            colId="id"
            filter={true}
            width={100}
            height={30}
            pinned="left"
          />
        </AgGridColumn>
        <AgGridColumn headerName="First Name" width={130} pinned="left">
          <AgGridColumn
            field="first_name"
            filter={true}
            pinned="left"
            headerName={`Str: ${rowsCount}`}
            width={130}
          />
        </AgGridColumn>
        <AgGridColumn headerName="Last Name" width={130} pinned="left">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            pinned="left"
            filter={true}
            field="last_name"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Username">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="username"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Email">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="email"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Avatar">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            cellRenderer={(params) => countryCellRenderer(params)}
            field="avatar"
            sortable={false}
          />
        </AgGridColumn>
        <AgGridColumn headerName="Percent">
          <AgGridColumn
            headerName={`Mean: ${percentSum}%`}
            filter={true}
            field="random_number_one"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Pieces">
          <AgGridColumn
            headerName={`Mean: ${avg1}pc.`}
            filter={true}
            field="random_number_two"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Money" filter={true}>
          <AgGridColumn
            filter={true}
            field="random_number_three"
            headerName={`Sum: ${sumMoney}$`}
          />
        </AgGridColumn>
        <AgGridColumn headerName="City Prefix">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="random"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Birthday">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="date"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Zip Code">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="zip_code"
          />
        </AgGridColumn>
        <AgGridColumn headerName="City">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="city"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Street Name">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="street_name"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Street Adress">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="street_adress"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Latitude">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="latitude"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Longitude">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="longitude"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Phone Number">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="phone_number"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Domain Name">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="domain_name"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Domain Word">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="domain_word"
          />
        </AgGridColumn>
        <AgGridColumn headerName="IP">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="ip"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Color">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="color"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Suffixes">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="suffixes"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Company Name">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="company_name"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Slogan">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="slogan"
          />
        </AgGridColumn>
        <AgGridColumn headerName="BS">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="bs"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Words">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="words"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Fuel">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="fuel"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Passowr">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="password"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Friends">
          <AgGridColumn
            headerName={`Mean: ${avg2}`}
            filter={true}
            field="random_number_five"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Manufacturer">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="manufacturer"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Vehicle">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="vehicle"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Model">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="model"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Future Date">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="future"
          />
        </AgGridColumn>
        <AgGridColumn headerName="File Name">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="file_name"
          />
        </AgGridColumn>
        <AgGridColumn headerName="VIN">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="vin"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Credit Card Number">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="credit_card_number"
          />
        </AgGridColumn>
        <AgGridColumn headerName="User Card">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="user_card"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Product">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="product"
          />
        </AgGridColumn>
        <AgGridColumn headerName="Time Zone">
          <AgGridColumn
            headerName={`Str: ${rowsCount}`}
            filter={true}
            field="time_zone"
          />
        </AgGridColumn>
      </AgGridReact>
    </div>
  );
};
