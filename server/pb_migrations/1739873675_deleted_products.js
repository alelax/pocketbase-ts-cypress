migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5912ifxelzjy8uu");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "5912ifxelzjy8uu",
    "created": "2025-02-18 10:14:33.684Z",
    "updated": "2025-02-18 10:14:33.684Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vhfbp4ob",
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
        "id": "6y6myqxk",
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
