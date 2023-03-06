const Element = require("../Models/element");
const Zone = require("../Models/zone");

const { model } = require("../db/dbConnect");

// Retourne liste de touts les Chantiers
exports.findAll = async function (req, res) {
  try {
    const elementList = await Element.findAll();

    if (!elementList) {
      return res.status(404).send({ message: "Liste des Elements Vide !!" });
    }

    return res.status(200).send(elementList);
  } catch (error) {
    console.log(error);
  }
};

exports.findById = async function (req,res) {
  try {
    const element = await Element.findByPk(req.params.id);

    if (!element) {
      return res.status(404).send({ message: " Element non trouvé !!" });
    }

    return res.status(200).send(element);
  } catch (error) {
    console.log(error);
  }
}

exports.addElement = async function (req, res) { 
    const { body } = req;
    try {
      await Element.create({ ...body });
      res.status(201).send("Element created");
      
    } catch (error) {
      console.log(error);
    }
  };

// Modifie un element
exports.updateElement = async function (req, res) {
    try {
      const element = await Element.findByPk(req.params.id);
  
      if (!element) {
        return res.status(404).send({ message: " Element non trouvé !!" });
      }
  
      await element.update(req.body);
      return res.status(200).send({message:"Element modifié avec succès"});
    } catch (error) {
      console.log(error);
    }
  };

exports.findZone = async function (req,res) {
  try {
    const element = await Element.findByPk(req.params.id, {
      include: { model: Zone },
    });

    if (!element) {
      return res.status(404).send({ message: "Element non trouvé" });
    }

    //condition si pas de zone
    res.status(200).send(element.Zone);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error")
  }
}

exports.affecterZone = async function (req, res) {
  try {
    // Recuperation du Element a travers son ID
    const element = await Element.findByPk(req.params.id);

    if (!element) {
      return res.status(404).send({ message: "Element non trouvé" });
    }
    // Recuperation du Projet a travers son ID
    const zone = await Projet.findByPk(req.params.zoneId);

    if (!zone) {
      return res.status(404).send({ message: "Zone non trouvée" });
    }

    // Affectation de ID du chefProjet au champ ChefProjetId du class Projet
    await zone.update({ ElementId: element.id });

    res.send({
      message: "Zone affectée a l'element avec succès",
      zone: zone,
    });
  } catch (error) {
    console.log(error);
  }
};