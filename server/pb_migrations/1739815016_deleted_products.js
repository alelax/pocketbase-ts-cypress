migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ctgknc6vnlpep6g");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ctgknc6vnlpep6g",
    "created": "2025-02-17 17:56:52.342Z",
    "updated": "2025-02-17 17:56:52.342Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dofdhqv3",
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
        "id": "cvn0kgb2",
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
