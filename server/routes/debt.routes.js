const DebtController = require('../controllers/debt.controller');

module.exports = function(app){
    app.get('/api/people/:personId/debts', DebtController.getAllDebts);
    app.post('/api/people/:personId/debts', DebtController.createDebts);
    app.put('/api/people/:personId/debts/:debtId', DebtController.updateDebt);
}