const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    const { firstName, lastName, document, phoneNumber } = request.body;
    Person.create({
        firstName,
        lastName,
        document,
        phoneNumber
    })
        .then(Person => response.json(Person))
        .catch(err => {
            console.log(err);
            response.status(400).json(err);
        });
}

module.exports.getAllPeople = (request, response) => {
    Person.find({}).sort( { document: +1 } )
        .then(people => response.json(people))
        .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id: request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}

module.exports.updatePerson = (request, response) => {
    console.log(request.body);
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.status(400).json(err));
}

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}