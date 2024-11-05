import { Model } from "@nozbe/watermelondb";
import { field, relation } from "@nozbe/watermelondb/decorators";

export default class Task extends Model {
  static table = "tasks";

  @field("title") title: any;
  @field("due_date") due_date: any;
  @relation("contacts", "contact_id") contact: any;
}
