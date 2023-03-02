const Zone = require("../Models/zone");

const { model } = require("../db/dbConnect");



exports.findAll = async function (req, res) {
    try {
        const zonesList = await Zone.findAll();

        if (!zonesList) {
            return res.status(404).send({ message: "Liste des Zones Vide !!" });
        }

        return res.status(200).send(zonesList);
    } catch (error) {
        res.status(500).send("Server Error")
        console.log(error);
    }
}

exports.findById = async function (req, res) {
    try {
        const zone = await Zone.findByPk(req.params.id);

        if (!zone) {
            return res.status(404).send({ message: " zone non trouvée !!" });
        }

        return res.status(200).send(zone);
    } catch (error) {
        res.status(500).send("Server Error")
        console.log(error);
    }
}

exports.updateZone = async function (req, res) {
    try {
        const zone = await Zone.findByPk(req.params.id);

        if (!zone) {
            return res.status(404).send({ message: " zone non trouvé !!" });
        }

        await zone.update(req.body);
        return res.status(200).send({ message: "zone modifiée avec succès" });
    } catch (error) {
        console.log(error);
    }
};  

exports.addZone = async function (req, res) { 
    const { body } = req;
    try {
      await Zone.create({ ...body });
      res.status(201).send("Zone created");
      
    } catch (error) {
      console.log(error);
    }
  };