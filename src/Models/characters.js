const mongooose = require("mongoose");

const CharactersSchema = new mongooose.Schema({
  nome: { type: String, required: true },
  url: { type: String, required: true },
  });

const Characters = mongooose.model("characters", CharactersSchema);

module.exports = Characters;