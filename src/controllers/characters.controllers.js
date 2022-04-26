const charactersService = require("../services/characters.sevice");

const findAllCharactersController = async (req, res) => {
  const allcharacters = await charactersService.findcharCatersService();
  if (allcharacters.length == 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhum personagem cadastrado!" });
  }
  res.send(allcharacters);
};

const findByIdCharactersController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = await charactersService.findByIdCharactersService(idParam);
  if (!chosenCharacter) {
    return res.status(404).send({ message: "Pesonagem não encontrado!" });
  }
  res.send(chosenCharacter);
};

const createCharactersController = async (req, res) => {
  const Character = req.body;
  const newCharacter = await charactersService.createcharactersService(Character);
  res.status(201).send(newCharacter);
};

const updateCharactersController = async (req, res) => {
  const idParam = req.params.id;
  const editCharacter = req.body;
  const updatedCharacter = await charactersService.updateCharactersService(
    idParam,
    editCharacter
  );
  res.send(updatedPerson);
};

const deleteCharactersController = async (req, res) => {
  const idParam = req.params.id;
  await charactersService.deleteCharactersService(idParam);
  res.send({ message: "Personagem deletado com sucesso!" });
};

module.exports = {
  findAllCharactersController,
  findByIdCharactersController,
  createCharactersController,
  updateCharactersController,
  deleteCharactersController,
};
