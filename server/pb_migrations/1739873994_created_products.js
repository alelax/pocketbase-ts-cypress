migrate((db) => {
  const collection = new Collection({
    "id": "jlzpoa7bsvtqlr6",
    "created": "2025-02-18 10:19:54.475Z",
    "updated": "2025-02-18 10:19:54.475Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ghkgf5cb",
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
        "id": "bbkuvk29",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jlzpoa7bsvtqlr6");

  return dao.deleteCollection(collection);
})
