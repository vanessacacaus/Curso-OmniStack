const connection = require('../database/connection'); 

//retorna os casos específicos de uma unica ong
module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong) {
            return response.status(400).json({ error: "Nenhuma Ong encontrada com esse ID."});
        }
        return response.json(ong);
    }
}