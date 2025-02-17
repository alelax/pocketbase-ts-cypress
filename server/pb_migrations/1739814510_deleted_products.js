migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("plt4a84q3lhnjyk");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "plt4a84q3lhnjyk",
    "created": "2025-02-15 19:01:41.137Z",
    "updated": "2025-02-15 19:01:41.137Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v9ydy2el",
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
        "id": "kjsd9ggp",
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
