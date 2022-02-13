const { app, expect } = require("../../base/config");

describe("Categoria Endpoints", () => {

  it("Create a category and delete it", async () => {
    var categoriaName = "pancito";
    let response = await app
      .post("/api/Categoria")
      .set("Content-Type", "application/json")
      .send({
        nombre: categoriaName,
      });
    expect(response.statusCode, "Error: Status code its not the expected").to.be.eql(200);
    expect(response.body, "Error: Response value its not the expected").to.be.eql(true);

    //get all the categories
    response = await app
      .get("/api/Categoria")
      .set("Content-Type", "application/json");

    // find the element I created before
    // how the post endpoit only response true
    // I dont know what is the new categoria id
    // so, i need to find it
    var arrayResponse = response.body;
    var result = arrayResponse.find((t) => t.nombre === categoriaName);

    response = await app
      .delete("/api/Categoria" + "/" + result.idCategoria)
      .set("Content-Type", "application/json");
    expect(response.statusCode, "Error: Status code its not the expected").to.be.eql(200);
    expect(response.body, "Error: Response value its not the expected").to.be.eql(true);
  });
});
