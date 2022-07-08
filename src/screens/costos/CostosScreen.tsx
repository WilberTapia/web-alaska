import React, { useRef } from "react";
import { useQuery } from "react-query";
import { Box, Fab, FormControl, Grid, IconButton, MenuItem, Paper, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField, Theme, Typography } from "@mui/material";
import { date } from "yup";
import { useCostos } from "../../hooks/useCostos";
import { useHistory } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export function CostosScreen(props: any) {
    const { costos, fetchCostos } = useCostos()

    const history = useHistory();
    console.log(costos);
    

//   const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//       root: {},
//       drawer: {},
//       link: {
//         textDecoration: "none",
//         color: "inherit",
//       },
//       button: {
//         position: "fixed",
//         bottom: theme.spacing(4),
//         right: theme.spacing(10),
//       },
//       container: {
//         display: "flex",
//         flexWrap: "wrap",
//       },
//       textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//       },
//       divPrint: {
//         display: "none",
//       },
//       formControl: {
//         display: "flex",
//       },
//     })
//   );
//   const classes = useStyles();
 

  return (
    //DashboardScreen NFCScreen
    
    <div >
      <div className="DashboardScreen_Header">
        <div >
        </div>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={3}>
            <Typography variant="h5">Resumen de Facturas
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <form  noValidate>
              <TextField
                id="date"
                type="date"
                defaultValue={date}
                onChange={(event) => {
                  console.log(event.target.value);
                }}
               
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
          
        </Grid>
      </div>
      <br />
      <Box maxWidth={1600}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell>NFC</TableCell> */}
                <TableCell>Año</TableCell>
                <TableCell>Periodo</TableCell>
                <TableCell>Localidad</TableCell>
                <TableCell>Grupo</TableCell>
                <TableCell>Cuenta</TableCell>
                <TableCell>Presupuesto</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {costos.map((costo) => (
                    <TableRow
                      hover
                      key={costo.id}
                      onClick={() => {
                        // setFac(factura);
                        // history.push(`/dashboard/facturas/${factura.id}`);
                      }}
                    >
                      {/* <TableCell>{factura.nfc}</TableCell> */}
                      <TableCell>{costo.ANO}</TableCell>
                      <TableCell>{costo.PERIODO}</TableCell>
                      <TableCell>{costo.LOCALIDAD_P}</TableCell>
                      <TableCell>{costo.GRUPO_P}</TableCell>
                      <TableCell>{costo.CUENTA_P}</TableCell>
                      <TableCell>{costo.PROYECCION}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Paper>
        <br />
      </Box>
      <br />
      {/* onClick={handleCreatePress} */}
      {/* <Link className={classes.link} to="/dashboard/nfc/new"> */}
      <Fab
       
        color="primary"
        onClick={() => history.push("/dashboard/newFactura/rbs")}
      >
        <AddIcon />
      </Fab>
      {/* </Link> */}
    </div>
  );
}
