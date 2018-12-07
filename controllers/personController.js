var moongose = require("mongoose");
Person = moongose.model('Persons');

//metodos donde es necesario regresar un id
exports.update = (req, res) => {

    Person.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, person) => {
        if (err)
            res.send(err);
        res.json(req.body);
    });
};

exports.delete = (req, res) => {

    Person.findByIdAndRemove(req.params.id, (err, person) => {
        if (err)
            res.send(err);
        res.json(req.params.id);
    });
};

exports.getOne = (req, res) => {

    Person.findById(req.params.id, (err, person) => {
        if (err)
            res.send(err);
        res.json(person);
    });
};

//metodos donde no es necesario recibir id
exports.getall = (req, res) => {
    Person.find({}, (err, persons) => {
        if (err)
            res.send(err);
        res.json(persons);
    });
};

exports.create = (req, res) => {
    var newPerson = new Person(req.body);
    newPerson.save((err, person) => {
        if (err)
            res.send(err);
        res.json(person);
    });
};