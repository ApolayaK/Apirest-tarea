// src/controllers/medicamentos.controller.js
import { pool } from '../db.js'

// Lógica (backend) de cada endpoint para Medicamentos

// Listar todos los medicamentos
export const getMedicamentos = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM Medicamentos')
  res.json(rows)
}

// Obtener un medicamento por ID
export const getMedicamentoById = async (req, res) => {
  const { id } = req.params
  const [rows] = await pool.query(
    'SELECT * FROM Medicamentos WHERE id = ?',
    [id]
  )
  if (rows.length <= 0)
    return res.status(404).json({
      message: 'No existe medicamento con este ID'
    })
  res.json(rows[0])
}

// Crear un nuevo medicamento
export const createMedicamento = async (req, res) => {
  const { id, tipo, nombre, nomcomercial, presentacion, receta, precio } = req.body
  const [result] = await pool.query(
    `INSERT INTO Medicamentos 
      (id, tipo, nombre, nomcomercial, presentacion, receta, precio)
     VALUES (?,?,?,?,?,?,?)`,
    [id, tipo, nombre, nomcomercial, presentacion, receta, precio]
  )
  res.status(201).json({
    id: result.insertId || id,
    tipo,
    nombre,
    nomcomercial,
    presentacion,
    receta,
    precio
  })
}

// Actualizar un medicamento existente
export const updateMedicamento = async (req, res) => {
  const { id } = req.params
  const { tipo, nombre, nomcomercial, presentacion, receta, precio } = req.body

  const querySQL = `
    UPDATE Medicamentos SET
      tipo        = ?,
      nombre      = ?,
      nomcomercial= ?,
      presentacion= ?,
      receta      = ?,
      precio      = ?
    WHERE id = ?
  `
  const [result] = await pool.query(querySQL, [
    tipo, nombre, nomcomercial, presentacion, receta, precio, id
  ])
  if (result.affectedRows === 0) {
    return res.status(404).json({
      message: 'El ID no existe'
    })
  }

  res.json({ message: 'Actualización correcta' })
}

// Eliminar un medicamento
export const deleteMedicamento = async (req, res) => {
  const { id } = req.params
  const [result] = await pool.query(
    'DELETE FROM Medicamentos WHERE id = ?',
    [id]
  )
  if (result.affectedRows === 0) {
    return res.status(404).json({
      message: 'No existe registro con este ID'
    })
  }

  res.status(200).json({
    message: 'Eliminado correctamente'
  })
}
