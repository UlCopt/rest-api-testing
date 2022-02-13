const {app, expect} = require('../../base/config');
const { pedidoBodyJson} = require('../../bodies/pedido/pedido')

describe("Pedido Endpoints", () => {
    it("Create a delivery", async () => {
        const response = await app
        .post('/api/Pedido')
        .set("Content-Type","application/json")
        .send(pedidoBodyJson)
        expect(response.statusCode, "Error: Status code its not the expected").to.be.eql(201)
    })

    
})
