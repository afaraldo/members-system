const { Project } = require('../models/project.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProject = (request, response) => {
    const { name, dueDate } = request.body;
    Project.create({
        name,
        dueDate
    })
        .then(project => response.json(project))
        .catch(err => {
            console.log(err);
            response.status(400).json(err);
        });
}

module.exports.getAllProjects = (request, response) => {
    Project.find({}).sort( { "dueDate": -1 } )
        .then(projects => response.json(projects))
        .catch(err => response.json(err))
}

module.exports.getProject = (request, response) => {
    Project.findOne({_id: request.params.id})
        .then(project => response.json(project))
        .catch(err => response.json(err))
}

module.exports.updateProject = (request, response) => {
    console.log(request.body);
    Project.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.status(400).json(err));
}

module.exports.deleteProject = (request, response) => {
    Project.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}