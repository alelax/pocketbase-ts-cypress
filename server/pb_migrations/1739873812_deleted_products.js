migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("eaqfqgggdgn474d");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "eaqfqgggdgn474d",
    "created": "2025-02-18 10:16:49.670Z",
    "updated": "2025-02-18 10:16:49.670Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lzsbeaty",
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
        "id": "ou8nqzrb",
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
