const Characters = require("../Models/characters");
const charactersService = require("../services/characters.services");

const findAllCharactersController = async (req, res) => {
  const allcharacters = await charactersService.findCharactersService();
  if (allcharacters.length == 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhum personagem cadastrado!" });
  }
  res.send(allcharacters);
};

const findByIdCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = await charactersService.findByIdCharacterService(idParam);
  if (!chosenCharacter) {
    return res.status(404).send({ message: "Pesonagem não encontrado!" });
  }
  res.send(chosenCharacter);
};

const searchCharactersController = async (req, res) => {
  const { message } = req.query;

  const personagens = await charactersService.searchCharacters(message);

  if (Characters.length === 0) {
    return res
      .status(400)
      .send({ message: "Não existem personagens com essa mensagem!" });
  }

  return res.send({
    personagens: personagens.map((personagem) => ({
      name: personagem.name,
      url: personagem.url
    })),
});


};

const createCharacterController = async (req, res) => {
  const Character = req.body;
  const newCharacter = await charactersService.createCharacterService(Character);
  res.status(201).send(newCharacter);
};

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const editCharacter = req.body;
  const updatedCharacter = await charactersService.updateCharacterService(
    idParam,
    editCharacter
  );
  res.send(updatedCharacter);
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  await charactersService.deleteCharacterService(idParam);
  res.send({ message: "Personagem deletado com sucesso!" });
};

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
  searchCharactersController
};
