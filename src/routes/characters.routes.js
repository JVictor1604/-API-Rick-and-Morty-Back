const route = require("express").Router();
const controllerCharacters = require("../controllers/characters.controllers");
// const {validId, validObjectBody } = require('../middlewares/person.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get("/characters", controllerCharacters.findAllCharactersController);
route.get("/characters/find/:id", controllerCharacters.findByIdCharacterController);
route.post("/characters/create", controllerCharacters.createCharacterController);
route.put("/characters/update/:id", controllerCharacters.updateCharacterController);
route.delete("/characters/delete/:id", controllerCharacters.deleteCharacterController);

module.exports = route;
