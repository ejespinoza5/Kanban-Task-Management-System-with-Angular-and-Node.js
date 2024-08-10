//archivo que manejara los web services para realizar las operaciones crud a la tabla cliente de la base de datos

const express = require('express');
const router = express.Router();
var getConnection = require('../conexion');



//listar todos los tableros
router.get('/tablero/', (req, res) => {
  getConnection(function (err, conn) {
    if (err) {
      return res.sendStatus(400);
    }
    conn.query('SELECT * FROM tablero', (err, rows) => {
      if (err) {
        conn.release();
        return res.sendStatus(400, 'No se puede obtener los datos de la tabla');
      }
      res.send(rows);
      conn.release();
    });
  });
});

//listar todos los tableros pendientes
router.get('/tablero_pendiente/', (req, res) => {
  getConnection(function (err, conn) {
    if (err) {
      return res.sendStatus(400);
    }
    conn.query('SELECT * FROM tablero where estado ="pendiente"', (err, rows) => {
      if (err) {
        conn.release();
        return res.sendStatus(400, 'No se puede obtener los datos de la tabla');
      }
      res.send(rows);
      conn.release();
    });
  });
});

//listar todos los tableros pendientes
router.get('/tablero_curso/', (req, res) => {
  getConnection(function (err, conn) {
    if (err) {
      return res.sendStatus(400);
    }
    conn.query('SELECT * FROM tablero where estado ="en curso"', (err, rows) => {
      if (err) {
        conn.release();
        return res.sendStatus(400, 'No se puede obtener los datos de la tabla');
      }
      res.send(rows);
      conn.release();
    });
  });
});

//listar todos los tableros pendientes
router.get('/tablero_hecho/', (req, res) => {
  getConnection(function (err, conn) {
    if (err) {
      return res.sendStatus(400);
    }
    conn.query('SELECT * FROM tablero where estado ="hecho"', (err, rows) => {
      if (err) {
        conn.release();
        return res.sendStatus(400, 'No se puede obtener los datos de la tabla');
      }
      res.send(rows);
      conn.release();
    });
  });
});


//Obtener por id
router.get('/tablero/:id', (req, res) => {
  getConnection(function (err, conn) {
    if (err) {
      return res.sendStatus(400);
    }
    conn.query('SELECT * FROM tablero WHERE id = ?', [req.params.id], (err, rows) => {
      if (err) {
        conn.release();
        return res.sendStatus(400, 'No se puede obtener los datos de la tabla');
      }
      res.send(rows);
      conn.release();
    });
  });
});

// Actualizar por id
router.put('/tablero/:id', (req, res) => {
  getConnection(function (err, conn) {
    if (err) {
      return res.sendStatus(400);
    }
    conn.query('UPDATE tablero SET titulo = ?, descripcion = ?, prioridad = ?, horas = ?, estado = ? WHERE id = ?', [req.body.titulo, req.body.descripcion, req.body.prioridad, req.body.horas, req.body.estado, req.params.id], (err, rows) => {
      if (err) {
        conn.release();
        return res.sendStatus(400, 'No se puede actualizar los datos de la tabla');
      }
      res.send(rows);
      conn.release();
    });
  });
});

// insertar tarea
router.post('/tablero/', (req, res) => {
  getConnection(function (err, conn) {
    if (err) {
      return res.sendStatus(400);
    }
    conn.query('INSERT INTO tablero (titulo, descripcion, prioridad, horas, estado) VALUES (?, ?, ?, ?, ?)', [req.body.titulo, req.body.descripcion, req.body.prioridad, req.body.horas, req.body.estado], (err, rows) => {
      if (err) {
        conn.release();
        return res.sendStatus(400, 'No se puede insertar los datos de la tabla');
      }
      res.send(rows);
      conn.release();
    });
  });
});
























module.exports = router;
