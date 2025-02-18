migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("886o5rfqyx5cccz");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "886o5rfqyx5cccz",
    "created": "2025-02-18 10:07:28.280Z",
    "updated": "2025-02-18 10:07:28.280Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a2vnloxg",
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
        "id": "zxtonayx",
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
