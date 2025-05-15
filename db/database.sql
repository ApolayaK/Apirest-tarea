CREATE DATABASE botica;
USE botica;

CREATE TABLE Medicamentos (
    id INT PRIMARY KEY,
    tipo ENUM('analgésico', 'antibiótico', 'antihistamínico'),
    nombre VARCHAR(120),
    nomcomercial VARCHAR(40),
    presentacion ENUM('tabletas', 'jarabe', 'inyectable'),
    receta ENUM('S', 'N'),
    precio DECIMAL(7,2)
);

INSERT INTO Medicamentos (id, tipo, nombre, nomcomercial, presentacion, receta, precio) VALUES
(1, 'analgésico', 'Paracetamol', 'Doloforte', 'tabletas', 'S', 25.50),
(2, 'analgésico', 'Ibuprofeno', 'Ibudolor', 'jarabe', 'S', 30.00),
(3, 'analgésico', 'Diclofenaco', 'Dicloflex', 'inyectable', 'S', 19.80),
(4, 'antibiótico', 'Amoxicilina', 'Amoximed', 'tabletas', 'S', 45.75),
(5, 'antibiótico', 'Ciprofloxacino', 'Ciprox', 'jarabe', 'S', 50.00),
(6, 'antibiótico', 'Azitromicina', 'Azimex', 'inyectable', 'S', 48.20),
(7, 'antihistamínico', 'Loratadina', 'Alerfast', 'tabletas', 'N', 12.00),
(8, 'antihistamínico', 'Cetirizina', 'Cetzine', 'jarabe', 'N', 10.00),
(9, 'antihistamínico', 'Ranitidina', 'Raniforte', 'inyectable', 'N', 15.75),
(10, 'antibiótico', 'Metformina', 'Glucoforte', 'jarabe', 'S', 28.99),
(11, 'analgésico', 'Losartán', 'Losazid', 'inyectable', 'S', 22.10),
(12, 'antihistamínico', 'Omeprazol', 'Omecaps', 'tabletas', 'N', 18.20);