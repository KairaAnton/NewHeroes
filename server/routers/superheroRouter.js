const { Router } = require('express');
const { superheroController } = require('./../controllers')
const { upload, reducePagination } = require('./../middleware');

const superheroRouter = Router();

superheroRouter
    .route('/')
    .post(superheroController.create)
    .get(superheroController.getMany);

superheroRouter
    .route('/:superheroId')
    .get(superheroController.getById)
    .patch(superheroController.updateById)
    .delete(superheroController.deleteById);




module.exports = superheroRouter;