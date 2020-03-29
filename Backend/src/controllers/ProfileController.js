const connection = require('../database/connection'); 

//retorna os casos específicos de uma unica ong
module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');
    
        return response.json(incidents);
    }
}