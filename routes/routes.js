module.exports = function (app) {
    var controller = require("../controllers/personController");

    app.route('/persons')
        .get(controller.getall)
        .post(controller.create)
        ;

    app.route("/persons/:id")
        .delete(controller.delete)
        .put(controller.update)
        .get(controller.getOne);

}