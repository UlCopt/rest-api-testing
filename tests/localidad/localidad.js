const { app, expect, schemaValidator } = require("../../base/config");
const { schemaGetLocalidad } = require("../../schemas/localidad/schema");

describe("Localidad Endpoints", () => {
  it("GET all locations and count it them", async () => {
    var schema = new schemaValidator();
    const response = await app
      .get("/api/localidad")
      .set("Content-Type", "application/json");

    var schemaIsValid = schema.validate(
      response.body,
      schemaGetLocalidad
    ).valid;

    var localidadCount = Object.keys(response.body).length;

    expect(
      schemaIsValid,
      "Error: Schema differences found it in Localidad(GET)"
    ).to.be.eql(true);

    expect(localidadCount, "Error: Localidad count expected is different:").to.be.eql(
      27
    );
    expect(response.statusCode, "Error: Status code its not the expected").to.be.eql(200);
  });
});
