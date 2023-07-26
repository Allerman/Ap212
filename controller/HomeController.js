const { Quarto, Cozinha, Lavanderia, Banheiro } = require('../model/Items');

const getAllItems = async (req, res) => {
  try {
    const ListaQuarto = await Quarto.find();
    const ListaCozinha = await Cozinha.find();
    const ListaLavanderia = await Lavanderia.find();
    const ListaBanheiro = await Banheiro.find();

    return res.render('index', {
      ListaQuarto,
      ListaCozinha,
      ListaLavanderia,
      ListaBanheiro,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const deleteItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    const deletedItemQ = await Quarto.findByIdAndDelete(itemId);
    const deletedItemC = await Cozinha.findByIdAndDelete(itemId);
    const deletedItemL = await Lavanderia.findByIdAndDelete(itemId);
    const deletedItemB = await Banheiro.findByIdAndDelete(itemId);
    if (!deletedItemQ && !deletedItemC && !deletedItemL && !deletedItemB) {
      return res.status(404).send({ message: 'Item not found' });
    }
    res.send({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateCheck = async (req, res) => {
  try {
    const itemId = req.params.id;

    const [itemQ, itemC, itemL, itemB] = await Promise.all([
      Quarto.findById(itemId),
      Cozinha.findById(itemId),
      Lavanderia.findById(itemId),
      Banheiro.findById(itemId)
    ]);

    if (!itemQ && !itemC && !itemL && !itemB) {
      return res.status(404).send({ error: "Item não encontrado." });
    }

    if (itemQ) itemQ.check = !itemQ.check;
    if (itemC) itemC.check = !itemC.check;
    if (itemL) itemL.check = !itemL.check;
    if (itemB) itemB.check = !itemB.check;

    await Promise.all([
      itemQ && itemQ.save(),
      itemC && itemC.save(),
      itemL && itemL.save(),
      itemB && itemB.save(),
    ]);

    const anchor = itemQ ? "#quarto" : (itemC ? "#cozinha" : (itemL ? "#lavanderia" : (itemB ? "#banheiro" : "")));

    res.redirect(`/${anchor}`);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllItems,
  deleteItem,
  updateCheck,
};