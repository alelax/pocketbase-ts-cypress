migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("v69l14dwuvtcq49");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "v69l14dwuvtcq49",
    "created": "2025-02-18 10:29:14.849Z",
    "updated": "2025-02-18 10:29:14.849Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "h2etium6",
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
        "id": "51w49qbg",
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
