const conexion = require("../conexion");

module.exports = {
    insertar(nombre, precio) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into productos (nombre, precio, nombre2) values (?, ?, ?)`,
                [nombre, precio, nombre2], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
        });
    },
    obtener() {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, nombre, precio, nombre2 from productos`,
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados);
                });
        });
    },
    obtenerPorId(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, nombre, precio, nombre2 from productos where id = ?`,
                [id],
                (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados[0]);
                });
        });
    },
    actualizar(id, nombre, precio, nombre2) {
        return new Promise((resolve, reject) => {
            conexion.query(`update productos
            set nombre = ?,
            precio = ?
            nombre2 = ?
            where id = ?`,
                [nombre, precio, nombre2, id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
    eliminar(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from productos
            where id = ?`,
                [id],
                (err) => {
                    if (err) reject(err);
                    else resolve();
                });
        });
    },
}