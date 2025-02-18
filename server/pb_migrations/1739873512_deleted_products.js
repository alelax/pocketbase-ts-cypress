migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6f9p6u3pumooagb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "6f9p6u3pumooagb",
    "created": "2025-02-18 10:11:49.814Z",
    "updated": "2025-02-18 10:11:49.814Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m0jvxnc6",
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
        "id": "afgl9smf",
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
