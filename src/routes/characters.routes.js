const route = require("express").Router();
const controllerCharacters = require("../controllers/characters.controllers");
//const {validId, validObjectBody } = require('../middlewares/person.middleware');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
const authMiddleware = require("../auth/auth.middleware");

route.use("/api-docs",  swaggerUi.serve);
route.get("/api-docs", swaggerUi.setup(swaggerDocument));
route.get("/characters", controllerCharacters.findAllCharactersController);
route.get(
  "/characters/find/:id", authMiddleware,
  controllerCharacters.findByIdCharacterController
);
route.get(
  "/characters/searchCharacters", authMiddleware,
  controllerCharacters.searchCharactersController
);
route.post(
  "/characters/create", authMiddleware,
  controllerCharacters.createCharacterController
);
route.put(
  "/characters/update/:id", authMiddleware,
  controllerCharacters.updateCharacterController
);
route.delete(
  "/characters/delete/:id", authMiddleware,
  controllerCharacters.deleteCharacterController
);

module.exports = route;
