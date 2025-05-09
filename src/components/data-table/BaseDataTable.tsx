import { Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";

interface BaseDataTableProps {
  rows: GridRowsProp;
  columns: GridColDef[];
  pageSize?: number;
  checkboxSelection?: boolean;
  getRowId?: (row: any) => string | number;
}

export default function BaseDataTable({
  rows,
  columns,
  pageSize = 5,
  checkboxSelection = false,
  getRowId,
}: BaseDataTableProps) {
  return (
    <Box sx={{ height: 520, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize, page: 0 },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection={checkboxSelection}
        getRowId={getRowId}
        disableRowSelectionOnClick
        sx={{
          border: 0,
          ".MuiDataGrid-columnHeaders": {
            backgroundColor: "#f1f5f9",
            fontWeight: "bold",
          },
        }}
      />
    </Box>
  );
}
