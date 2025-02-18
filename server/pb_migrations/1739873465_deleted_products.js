migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9xim9127kjq7qha");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "9xim9127kjq7qha",
    "created": "2025-02-18 10:11:03.222Z",
    "updated": "2025-02-18 10:11:03.222Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bvz2hg0p",
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
        "id": "qlaj5yqa",
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
