const Tache = require("../Models/tache");
const ChefChantier = require("../Models/chefChantier");
const { model } = require("../db/dbConnect");



exports.findAll = async function (req, res) {
    try {
        const chefChantierList = await ChefChantier.findAll();

        if (!chefChantierList) {
            return res.status(404).send({ message: "Liste des chef Chantier Vide !!" });
        }

        return res.status(200).send(chefChantierList);
    } catch (error) {
        res.status(500).send("Server Error")
        console.log(error);
    }
}

exports.findById = async function (req, res) {
    try {
        const chefChantier = await ChefChantier.findByPk(req.params.id);

        if (!chefChantier) {
            return res.status(404).send({ message: " ChefChantier non trouvé !!" });
        }

        return res.status(200).send(chefChantier);
    } catch (error) {
        res.status(500).send("Server Error")
        console.log(error);
    }
}

exports.updateChefChantier = async function (req, res) {
    try {
        const chefChantier = await ChefChantier.findByPk(req.params.id);

        if (!chefChantier) {
            return res.status(404).send({ message: " ChefChantier non trouvé !!" });
        }

        await chefChantier.update(req.body);
        return res.status(200).send({ message: "ChefChantier modifiée avec succès" });
    } catch (error) {
        console.log(error);
    }
};  

exports.addChefChantier= async function (req, res) { 
    const { body } = req;
    try {
      await ChefChantier.create({ ...body });
      res.status(201).send("ChefChantier created");
      
    } catch (error) {
      console.log(error);
    }
  };