// src/routes/medicamentos.routes.js
import { Router } from 'express'
import {
  getMedicamentos,
  getMedicamentoById,
  createMedicamento,
  updateMedicamento,
  deleteMedicamento
} from '../controllers/medicamentos.controller.js'

const router = Router()

// API REST para Medicamentos
router.get('/medicamentos', getMedicamentos)
router.get('/medicamentos/:id', getMedicamentoById)

router.post('/medicamentos', createMedicamento)

router.put('/medicamentos/:id', updateMedicamento)

router.delete('/medicamentos/:id', deleteMedicamento)

export default router
