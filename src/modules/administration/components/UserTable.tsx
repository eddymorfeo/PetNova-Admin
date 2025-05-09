import { GridColDef } from "@mui/x-data-grid";
import { IconButton, Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BaseDataTable from "../../../components/data-table/BaseDataTable";
import { Add } from "@mui/icons-material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 40 },
  { field: "rut", headerName: "Rut", flex: 1 },
  { field: "Name", headerName: "Name", flex: 1 },
  { field: "Name2", headerName: "Name 2", flex: 1 },
  { field: "lastName", headerName: "Last Name", flex: 1 },
  { field: "LastName2", headerName: "Last Name 2", flex: 1 },
  { field: "email", headerName: "Email", flex: 1.5 },
  { field: "status", headerName: "Status", width: 100 },
  { field: "createdBy", headerName: "Created By", flex: 1 },
  { field: "createdDate", headerName: "Created Date", flex: 1 },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    sortable: false,
    renderCell: (params) => (
      <Box>
        <IconButton
          color="primary"
          onClick={() => alert("Editar " + params.row.id)}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          color="error"
          onClick={() => alert("Eliminar " + params.row.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    rut: "11111111-1",
    Name: "Juan",
    Name2: "Carlos",
    lastName: "Pérez",
    LastName2: "Gómez",
    email: "juan@petnova.cl",
    status: "Activo",
    createdBy: "admin",
    createdDate: "2024-01-01",
  },
  {
    id: 2,
    rut: "22222222-2",
    Name: "María",
    Name2: "Laura",
    lastName: "Soto",
    LastName2: "Ramírez",
    email: "maria@petnova.cl",
    status: "Activo",
    createdBy: "admin",
    createdDate: "2024-02-12",
  },
];

export default function UserTable() {
    return (
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => alert("Abrir formulario de creación")}
          >
            Add Users
          </Button>
        </Box>
  
        <BaseDataTable rows={rows} columns={columns} checkboxSelection />
      </Box>
    );
  }
