migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("d8o928m15vxgpl6");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "d8o928m15vxgpl6",
    "created": "2025-02-17 17:57:49.528Z",
    "updated": "2025-02-17 17:57:49.528Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ovfbhc8x",
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
        "id": "ntlnj8di",
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
