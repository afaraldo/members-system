const DebtController = require('../controllers/debt.controller');

module.exports = function(app){
    app.get('/api/people/:person_id/debts', DebtController.getAllDebts);
    app.post('/api/people/:person_id/debts', DebtController.createDebts);
}