const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas: [
            {id: "ID00001", nombre: "Nombre1", descripcion: "Descripcion 1", accion: "accion"},
            {id: "ID00002", nombre: "Nombre2", descripcion: "Descripcion 2", accion: "accion"},
        ]
})
})
module.exports = router;