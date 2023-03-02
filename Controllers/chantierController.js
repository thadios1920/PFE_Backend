const Chantier = require("../Models/chantier");
const Etage = require("../Models/etage");
const { model } = require("../db/dbConnect");

// Retourne liste de touts les Chantiers
exports.findAll = async function (req, res) {
  try {
    const chantierList = await Chantier.findAll();

    if (!chantierList) {
      return res.status(404).send({ message: "Liste des Chantiers Vide !!" });
    }

    return res.status(200).send(chantierList);
  } catch (error) {
    console.log(error);
  }
};

exports.findById = async function (req,res) {
  try {
    const chantier = await Chantier.findByPk(req.params.id);

    if (!chantier) {
      return res.status(404).send({ message: " Chantier non trouvé !!" });
    }

    return res.status(200).send(chantier);
  } catch (error) {
    console.log(error);
  }
}

// Methode qui renvoie la liste des chantiers d'un Projet
exports.findEtages = async function (req,res) {
    try {
      const chantier = await Chantier.findByPk(req.params.id,{
        include : {model:Etage},
      });
  
      if (!chantier) {
        return res.status(404).send({ message: " Chantier non trouvé !!" });
      }
      res.status(200).send(chantier.Etages);
    } catch (error) {
      console.log(error);
    }
}

exports.getEtageById = async function (req,res) {
    try {
      const etage = await Etage.findOne({
        where: { id: req.params.etageId, ChantierId: req.params.id }
      });
  
      if (etage) {
        res.status(200).json(etage);
      } else {
        res.status(404).json({ message: `Etage avec id ${req.params.etageId} n'est pas trouvé dans le chantier avec id ${req.params.id}` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
}

// Modifie un chantier
exports.updateChantier = async function (req, res) {
    try {
      const chantier = await Chantier.findByPk(req.params.id);
  
      if (!chantier) {
        return res.status(404).send({ message: " Chantier non trouvé !!" });
      }
  
      await chantier.update(req.body);
      return res.status(200).send({message:"Chantier modifié avec succès"});
    } catch (error) {
      console.log(error);
    }
  };
  
  // Ajoute un chantier
  exports.addChantier = async function (req, res) { 
    const { body } = req;
    try {
      await Chantier.create({ ...body });
      res.status(201).send("Chantier created");
      
    } catch (error) {
      console.log(error);
    }
  };

exports.affecterEtage = async function (req,res) {
    try {
      const chantier = await Chantier.findByPk(req.params.id);
  
      if (!chantier) {
        return res.status(404).send({ message: " Chantier non trouvé !!" });
      }
  
      const etage = await Etage.findByPk(req.params.etageId);
  
      if (!etage) {
        return res.status(404).send({ message: " Etage non trouvé !!" });
      }
  
      await etage.update({ChantierId: chantier.id })
  
      res.send({
        message: "Etage affecté au chantier avec succès",
        etage: etage,
      });
  
    } catch (error) {
      console.log(error);
    }
}