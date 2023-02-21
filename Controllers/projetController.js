const Projet = require("../Models/projet");
const Chantier = require("../Models/chantier");
const { model } = require("../db/dbConnect");

// Retourne liste de touts les projets
exports.findAll = async function (req, res) {
  try {
    const projetList = await Projet.findAll();

    if (!projetList) {
      return res.status(404).send({ message: "Liste des Projets Vide !!" });
    }

    return res.status(200).send(projetList);
  } catch (error) {
    console.log(error);
  }
};

exports.findById = async function (req,res) {
  try {
    const projet = await Projet.findByPk(req.params.id);

    if (!projet) {
      return res.status(404).send({ message: " Projets non trouvé !!" });
    }

    return res.status(200).send(projet);
  } catch (error) {
    console.log(error);
  }
}

// Methode qui renvoie la liste des chantiers d'un Projet
exports.findChantiers = async function (req,res) {
  try {
    const projet = await Projet.findByPk(req.params.id,{
      include : {model:Chantier},
    });

    if (!projet) {
      return res.status(404).send({ message: " Projets non trouvé !!" });
    }
    res.status(200).send(projet.Chantiers);
  } catch (error) {
    console.log(error);
  }
}

// Modifie un projet
exports.updateProject = async function (req, res) {
  try {
    const projet = await Projet.findByPk(req.params.id);

    if (!projet) {
      return res.status(404).send({ message: " Projet non trouvé !!" });
    }

    await projet.update(req.body);
    return res.status(200).send({message:"projet modifié avec succès"});
  } catch (error) {
    console.log(error);
  }
};

// Ajoute un projet
exports.addProject = async function (req, res) {
  const { body } = req;
  try {
    await Projet.create({ ...body });
    res.status(201).send("Project created");
    
  } catch (error) {
    console.log(error);
  }
};

exports.getChntierById = async function (req,res) {
  try {
    const chantier = await Chantier.findOne({
      where: { id: req.params.chantierId, ProjetId: req.params.id }
    });

    if (chantier) {
      res.status(200).json(chantier);
    } else {
      res.status(404).json({ message: `Chantier avec id ${chantierId} n'est pas trouvé dans projet avec id ${projetId}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

exports.affecterChantier = async function (req,res) {
  try {
    const projet = await Projet.findByPk(req.params.id);

    if (!projet) {
      return res.status(404).send({ message: " Projet non trouvé !!" });
    }

    const chantier = await Chantier.findByPk(req.params.chantierId);

    if (!chantier) {
      return res.status(404).send({ message: " Chantier non trouvé !!" });
    }

    await chantier.update({ProjetId: projet.id })

    res.send({
      message: "Chantier affecté au projet avec succès",
      chantier: chantier,
    });

  } catch (error) {
    console.log(error);
  }
}
