migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nh5erp27qydak7m");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "nh5erp27qydak7m",
    "created": "2025-02-18 10:21:24.914Z",
    "updated": "2025-02-18 10:21:24.914Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3ritf3lz",
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
        "id": "zrv9xuvx",
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
