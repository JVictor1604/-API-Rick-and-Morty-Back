const character = require('../models/Characters.js');

const findCharactersService = async () => {
  const characters = await character.find();
  return characters;
  
};

const findByIdCharacterService = async (id) => {
  const character = await character.findById(id);
  return character;
};

const createCharacterService = async (newPerson) => {
  const characterCriada = await character.create(newPerson);
  return characterCriada;
};

const updateCharacterService = async (id, PersonEdited) => {
  const characterAtualizada = await character.findByIdAndUpdate(id, PersonEdited);
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
};