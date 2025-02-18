migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4shyxn2pn8beuce");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "4shyxn2pn8beuce",
    "created": "2025-02-18 10:13:33.263Z",
    "updated": "2025-02-18 10:13:33.263Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zmfpqs1y",
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
        "id": "vb6mnl8r",
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
