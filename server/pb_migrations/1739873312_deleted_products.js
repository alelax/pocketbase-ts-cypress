migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rubb5fpui7i8kk6");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "rubb5fpui7i8kk6",
    "created": "2025-02-18 10:08:30.413Z",
    "updated": "2025-02-18 10:08:30.413Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qmql8or5",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gjbifvgf",
        "name": "cost",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
