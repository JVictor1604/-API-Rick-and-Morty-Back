const Characters = require("../models/Characters.js");
const character = require("../models/Characters.js");

const findCharactersService = async () => {
  const characters = await character.find();
  return characters;
};
const findByNameCharacterService = async (name) => {
  const character = await Characters.findByName(name);
  return character;
};

const findByIdCharacterService = async (id) => {
  const character = await Characters.findById(id);
  return character;
};

const searchCharacters = (message) =>
  Characters.find({
    message: { $regex: `${message || ""}`, $options: "i" },
  });

const createCharacterService = async (newCharacter) => {
  const characterCriada = await character.create(newCharacter);
  return characterCriada;
};

const updateCharacterService = async (id, CharacterEdited) => {
  const characterAtualizada = await character.findByIdAndUpdate(
    id,
    CharacterEdited
  );
  return characterAtualizada;
};

const deleteCharacterService = async (id) => {
  return await character.findByIdAndDelete(id);
};

module.exports = {
  findCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
<<<<<<< HEAD
  searchCharacters,
};
=======
  findByNameCharacterService,
};
>>>>>>> d36d7d8c199453f4ef8274eeb8f03ee2806fe588
