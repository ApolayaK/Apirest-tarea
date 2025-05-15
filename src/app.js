//Ecmascript Modules
import express from 'express'
import MedicamentosRouters from './routes/medicamentos.routes'

const app = express()

app.use(express.json())
app.use('/api/',MedicamentosRouters) // Rutas peliculas

//Control sobre rutas inexistentes
app.use((req, res, next) =>{
  res.status(404).json({
    message: 'No existe el endpoind'
  })
})

export default app