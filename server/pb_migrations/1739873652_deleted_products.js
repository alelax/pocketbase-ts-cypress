migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i5onde5kvt0sg3o");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "i5onde5kvt0sg3o",
    "created": "2025-02-18 10:14:00.827Z",
    "updated": "2025-02-18 10:14:00.827Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cpczttgg",
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
        "id": "smyd0mm8",
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
