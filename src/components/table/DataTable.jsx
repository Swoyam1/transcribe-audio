import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { width: 100 },
  { field: "id", headerName: "ID", width: 150 },
  { field: "name", headerName: "Name", width: 220 },
  { field: "type", headerName: "Type", width: 220 },
  { field: "duration", headerName: "Duration", width: 220 },
  {
    field: "dateCreated",
    headerName: "Date Created",
    width: 220,
  },
  {
    field: "lastUpdated",
    headerName: "Last Updated",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 220,
  },
  {
    field: "action",
    headerName: "Action",
    width: 220,
  },
];

const rows = [
  {
    id: "1",
    name: "Peng Meeting",
    type: "Audio",
    duration: "20",
    dateCreated: "02/12/2023",
    lastUpdated: "02/12/2023",
    action: "delete",
  },
  {
    id: "2",
    name: "Peng Meeting",
    type: "Audio",
    duration: "20",
    dateCreated: "02/12/2023",
    lastUpdated: "02/12/2023",
    action: "delete",
  },
  {
    id: "3",
    name: "Peng Meeting",
    type: "Audio",
    duration: "20",
    dateCreated: "02/12/2023",
    lastUpdated: "02/12/2023",
    action: "delete",
  },
  {
    id: "4",
    name: "Peng Meeting",
    type: "Audio",
    duration: "20",
    dateCreated: "02/12/2023",
    lastUpdated: "02/12/2023",
    action: "delete",
  },
  {
    id: "5",
    name: "Peng Meeting",
    type: "Audio",
    duration: "20",
    dateCreated: "02/12/2023",
    lastUpdated: "02/12/2023",
    action: "delete",
  },
  {
    id: "6",
    name: "Aeng Meeting",
    type: "Audio",
    duration: "21",
    dateCreated: "02/12/2023",
    lastUpdated: "02/12/2023",
    action: "delete",
  },
  {
    id: "7",
    name: "Peng Meeting",
    type: "Audio",
    duration: "20",
    dateCreated: "02/12/2023",
    lastUpdated: "02/12/2023",
    action: "delete",
  },
  {
    id: "8",
    name: "Peng Meeting",
    type: "Audio",
    duration: "20",
    dateCreated: "02/12/2023",
    lastUpdated: "02/12/2023",
    action: "delete",
  },
];

export default function DataTable() {
  return (
    <div
      style={{
        height: 450,
        padding: "24px",
        borderRadius: "12px",
        border: "1px solid #E4E7EC",
        backgroundColor: "#FFF",
      }}
    >
      <h2
        style={{
          borderBottom: "1px solid #E4E7EC",
          paddingBottom: "24px",
          fontSize: "20px",
          fontWeight: "600",
          letterSpacing: "-0.36px",
        }}
      >
        Recent Files
      </h2>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        style={{
          border: "none",
          padding: "24px 0px",

          fontSize: "14px",
        }}
      />
    </div>
  );
}
