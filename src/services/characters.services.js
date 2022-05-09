const Characters = require("../Models/characters.js");


const findCharactersService = async () => {
  const characters = await Characters.find();
  return characters;
};

const findByIdCharacterService = async (id) => {
  const character = await Characters.findById(id);
  return character;
};

const searchCharacters = (message) =>
  Characters.find({
    name: { $regex: `${message || ""}`, $options: "i" },
  });

const createCharacterService = async (newCharacter) => {
  const characterCriada = await Characters.create(newCharacter);
  return characterCriada;
};

const updateCharacterService = async (id, CharacterEdited) => {
  const characterAtualizada = await Characters.findByIdAndUpdate(
    id,
    CharacterEdited
  );
  return characterAtualizada;
};

const deleteCharacterService = async (id) => {
  return await Characters.findByIdAndDelete(id);
};

module.exports = {
  findCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
  searchCharacters,
};
