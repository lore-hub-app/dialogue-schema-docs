# Examples

## Workflow Example

![Dialogue Node Example](/example_1.jpeg)

This node contains reply from character with colored text. The context of the node is `academy_hallway` sprite and `edna_talking` animation for character. So the export schema could look like this:

```json
{
   "type":"@lorehub/export-schema",
   "apiVersion":"1.0.0",
   "resources":[
      {
         "type":"@lorehub/document",
         "apiVersion":"1.0.0",
         "id":"031476c0-2504-4ed7-aa79-e5fce21e2091",
         "name":"Edna"
      },
      {
         "type":"@lorehub/content-block",
         "apiVersion":"1.0.0",
         "id":"6a302631-8e79-405e-8bc7-0e2d68b02a32",
         "content":[
            {
               "documentId":"031476c0-2504-4ed7-aa79-e5fce21e2091"
            },
            {
               "text":"Umm.. <color='gold'>70 gold</color>? Yes, yes, <color='gold'>70 gold</color> we'll get for it"
            }
         ]
      },
      {
         "type":"@lorehub/meta-schema",
         "apiVersion":"1.0.0",
         "id":"97dbd876-117c-48a1-a7a5-2841edc58136",
         "name":"background",
         "schemaType:":"text"
      },
      {
         "type":"@lorehub/meta-schema",
         "apiVersion":"1.0.0",
         "id":"1f66a2a5-3c90-4a1b-bcc6-d01117cc28a6",
         "name":"character_animation",
         "schemaType:":"text"
      },
      {
         "type":"@lorehub/dialogue-node",
         "apiVersion":"1.0.0",
         "id":"1270e167-31a0-457d-acee-654a94259445",
         "contentBlockId:":"6a302631-8e79-405e-8bc7-0e2d68b02a32",
         "metaData":[
            {
               "metaSchemaId":"97dbd876-117c-48a1-a7a5-2841edc58136",
               "metaSchemaValue":"academy_hallway"
            },
            {
               "metaSchemaId":"1f66a2a5-3c90-4a1b-bcc6-d01117cc28a6",
               "metaSchemaValue":"edna_talking"
            }
         ]
      }
   ]
}
```

As you can see this schema is pretty big for one dialog node. The best way to work with this is to build this node in LoreHub's dialogue editor and then export it. It is recommended to use `Git` for version control. So when you commit new changes you can compare them.

![Dialogue Node Example](/workflow.png)

It is also possible to build this flow around integration with your version control system, so it will do it in an automated manner. But this feature should be requested through [GitHub](https://github.com/lore-hub-app/lorehub/issues)
