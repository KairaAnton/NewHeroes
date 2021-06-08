const { Superhero } = require('./../models');

module.exports.create = async (req, res, next) => {
    const { body } = req;

    try {
        const createdHero = await Superhero.create(body);
        if (createdHero) {
            return res.status(201).send({ data: createdHero });
        }
        res.status(400).send('Bad request');
    } catch (err) {
        next(err);
    }
};

module.exports.getMany = async (req, res, next) => {
    //const { pagination: { page, results } } = req;

    try {
        const foundHeroes = await Superhero.findAll({
            attributes: {
                exclude: ['id', 'createdAt', 'updatedAt']
            }
        });
        res.status(200).send({ data: foundHeroes });
    } catch (err) { next(err); }
};

module.exports.getById = async (req, res, next) => {
    const { params: { superheroId } } = req;

    try {
        const foundHero = await Superhero.findByPk(superheroId);
        if (foundHero) {
            return res.status(200).send(foundHero);
        }
        res.status(404).send('Not found');
    } catch (err) {
        next(err);
    }
};

module.exports.updateById = async (req, res, next) => {
    const { body, params: { superheroId } } = req;


    try {
        const [updatedRowCount] = await Superhero.update(body, {
            where: { id: superheroId }
        });
        if (updatedRowCount) {
            return res.status(204).send();
        }

        body.id = superheroId;

        next();
    } catch (err) {
        next(err);
    }
};

module.exports.deleteById = async (req, res, next) => {
    const { params: { superheroId } } = req;

    try {
        const deletedHeroRowCount = await Superhero.destroy({ where: { id: superheroId } });
        if (deletedHeroRowCount) {
            return res.status(200).send('Ok');
        }
        res.status(404).send('Not found');
    } catch (err) {
        next(err);
    }
};

module.exports.addImage = async (req, res, next) => {
    const { file, params: { superheroId } } = req;
    try {
        const superheroForUpdate = await Superhero.findByPk(superheroId);
        if (superheroForUpdate) {
            superheroForUpdate.images.push(file.filename);
            console.log('superheroForUpdate :>> ', superheroForUpdate);
            const [updatedRowCount, [updatedSuperheroes]] = await Superhero.update(superheroForUpdate.get(), {
                where: { id: superheroId },
                returning: true
            });
            console.log('updatedRowCount :>> ', updatedRowCount);
            return res.status(200).send({ data: updatedSuperheroes });
        }
        res.status(404).send('Not found');
    } catch (err) { next(err); }
};
