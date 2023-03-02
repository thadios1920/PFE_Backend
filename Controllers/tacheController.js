const Tache = require("../Models/tache");
const chefChantier = require("../Models/chefChantier");
const chefProjet = require("../Models/chefProjet");
const { model } = require("../db/dbConnect");



exports.findAll = async function (req, res) {
    try {
        const tacheList = await Tache.findAll();

        if (!tacheList) {
            return res.status(404).send({ message: "Liste des Taches Vide !!" });
        }

        return res.status(200).send(tacheList);
    } catch (error) {
        res.status(500).send("Server Error")
        console.log(error);
    }
}

exports.findById = async function (req, res) {
    try {
        const tache = await Tache.findByPk(req.params.id);

        if (!tache) {
            return res.status(404).send({ message: " Tache non trouvé !!" });
        }

        return res.status(200).send(tache);
    } catch (error) {
        res.status(500).send("Server Error")
        console.log(error);
    }
}

exports.updateTache = async function (req, res) {
    try {
        const tache = await Tache.findByPk(req.params.id);

        if (!tache) {
            return res.status(404).send({ message: " Tache non trouvé !!" });
        }

        await tache.update(req.body);
        return res.status(200).send({ message: "tache modifiée avec succès" });
    } catch (error) {
        console.log(error);
    }
};  

exports.addTache = async function (req, res) { 
    const { body } = req;
    try {
      await Tache.create({ ...body });
      res.status(201).send("Tache created");
      
    } catch (error) {
      console.log(error);
    }
  };