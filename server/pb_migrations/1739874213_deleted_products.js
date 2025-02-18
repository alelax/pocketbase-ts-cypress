migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5sig62swfzx5b4t");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "5sig62swfzx5b4t",
    "created": "2025-02-18 10:23:29.413Z",
    "updated": "2025-02-18 10:23:29.413Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wo4sg9j6",
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
        "id": "3is1ktmy",
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
