import { appSchema, tableSchema } from "@nozbe/watermelondb";

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "contacts",
      columns: [
        { name: "name", type: "string" },
        { name: "phone", type: "string" },
      ],
    }),
    tableSchema({
      name: "tasks",
      columns: [
        { name: "title", type: "string" },
        { name: "due_date", type: "string" },
        { name: "contact_id", type: "string", isIndexed: true },
      ],
    }),
  ],
});

export default schema;
