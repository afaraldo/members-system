const ProjectController = require('../controllers/project.controller');
module.exports = function(app){
    app.get('/api', ProjectController.index);
    app.post('/api/projects', ProjectController.createProject);
    app.get('/api/projects', ProjectController.getAllProjects);
    app.get('/api/projects/:id', ProjectController.getProject);
    app.put('/api/projects/:id', ProjectController.updateProject);
    app.delete('/api/projects/:id', ProjectController.deleteProject);
}