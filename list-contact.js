
// creer la base de donnees

use constact

//creer la collection et ajouter les donnees

db.contactlist.insertMany();

// afficher les donnees d'une seule personne 

db.contactlist.find();

//afficher les donnees dont l'age <18
db.contactlist.find({age :{$lt: 18}})

//afficher les donnees dont l'age <18 et contient "ah"
db.contactlist.find({age :{$lt: 18}},{name : "ah"})

// changer le nom du contact 

db.contactlist.update({prenom:{"seif"},{$rename:{"anis"}}})
//cette commande ne passe pas

// pour supprimer un contact < 5
db.contactlist.remove({age :{$lt:5}})

//pour tous afficher
db.contactlist.find();
