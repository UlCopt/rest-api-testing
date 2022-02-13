const schemaLocalidad = {
  type: "array",
  items: {
    properties: {
      idLocalidad: { type: "integer" },
      nombre: { type: "string" },
    },
    required: ["idLocalidad", "nombre"],
  },
};

exports.schemaGetLocalidad = schemaLocalidad;
