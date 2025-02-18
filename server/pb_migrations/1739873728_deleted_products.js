migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mxeovtrfx00jgqj");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "mxeovtrfx00jgqj",
    "created": "2025-02-18 10:15:25.186Z",
    "updated": "2025-02-18 10:15:25.186Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fcddvgdj",
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
        "id": "o3wlggmj",
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
