const { Person } = require('../models/person.model');
const { Debt } = require('../models/debt.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    const { firstName, lastName, document, phoneNumber } = request.body;
    const debts = ["Enero", "Febrero", "Marzo", "Abril",
        "Mayo", "Junio", "Julio", "Agosto",
        "Septiembre", "Octubre", "Noviembre", "Diciembre"].map((month) => {
            return {
                title: "Cuota " + month,
                amount: 100000
            };
        })
    Debt.create(debts).then((debts) => {
        Person.create({
            firstName,
            lastName,
            document,
            phoneNumber,
            debts
        }).then(person => {
            console.log(person)
            response.json(people)
        })
        .catch(err => response.status(400).json(err))
    })
    
}

module.exports.getAllPeople = (request, response) => {
    Person.find({}).sort( { document: +1 } ).populate("debts")
        .then(people => response.json(people))
        .catch(err => response.status(400).json(err))
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id: request.params.id}).populate("debts")
        .then(person => response.json(person))
        .catch(err => response.status(400).json(err))
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
        .catch(err => response.status(400).json(err))
}