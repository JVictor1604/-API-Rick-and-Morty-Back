const character = require('../models/Characters.js');

const findCharactersService = async () => {
  const characters = await character.find();
  return characters;
  
};

const findByIdCharactersService = async (id) => {
  const character = await character.findById(id);
  return character;
};

const createCharactersService = async (newPerson) => {
  const characterCriada = await character.create(newPerson);
  return characterCriada;
};

const updateCharactersService = async (id, PersonEdited) => {
  const characterAtualizada = await character.findByIdAndUpdate(id, PersonEdited);
  return characterAtualizada;
};

const deleteCharactersService = async (id) => {
  return await character.findByIdAndDelete(id);
};

module.exports = {
  findCharactersService,
  findByIdCharactersService,
  createCharactersService,
  updateCharactersService,
  deleteCharactersService,
};