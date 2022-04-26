const route = require("express").Router();
const controllerMatrix = require("../controllers/characters.controllers");
// const {validId, validObjectBody } = require('../middlewares/person.middleware');

route.get("/characters?limit=8&offset="+offset, controllerMatrix.findAllMatrixController);
route.get("/characters/find/" + id, controllerMatrix.findByIdPersonController);
route.post("/characters/create", controllerMatrix.createPersonController);
route.put("/characters/update/" + id, controllerMatrix.updatePersonController);
route.delete("/characters/delete/" + id, controllerMatrix.deletePersonController);

module.exports = route;
