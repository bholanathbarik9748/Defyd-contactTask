import { Model } from '@nozbe/watermelondb';
import { field, children } from '@nozbe/watermelondb/decorators';

export default class Contact extends Model {
    static table = 'contacts';

    @field('name') name: any;
    @field('phone') phone: any;
    @children('tasks') tasks: any;
}
