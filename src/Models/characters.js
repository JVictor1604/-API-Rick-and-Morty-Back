const mongooose = require("mongoose");

const CharactersSchema = new mongooose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  forca: { type: Number, required: true },
});

const Characters = mongooose.model("characters", CharactersSchema);

module.exports = Characters;