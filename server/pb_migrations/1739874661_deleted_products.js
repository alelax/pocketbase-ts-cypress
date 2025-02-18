migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bw2hewajfsamlzk");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "bw2hewajfsamlzk",
    "created": "2025-02-18 10:30:57.666Z",
    "updated": "2025-02-18 10:30:57.666Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "reg4bwyb",
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
        "id": "exz7to25",
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
