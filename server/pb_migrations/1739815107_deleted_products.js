migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vubmivn0laj9g02");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vubmivn0laj9g02",
    "created": "2025-02-17 17:58:23.828Z",
    "updated": "2025-02-17 17:58:23.828Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bylabgzc",
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
        "id": "xzkvkkdy",
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
