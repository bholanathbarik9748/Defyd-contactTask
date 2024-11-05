export interface ContactRecord {
  __changes: null;
  _isEditing: boolean;
  _preparedState: null;
  _raw: {
    _changed: string;
    _status: string;
    id: string;
    name: string;
    phone: string;
  };
  _subscribers: any[]; // Adjust type if specific
  collection: {
    _cache: string[]; // e.g., "RecordCache" as array of strings
    _subscribers: string[]; // Array of strings, adjust as needed
    changes: string[]; // e.g., "Subject" array
    database: string[]; // e.g., "Database" array
    modelClass: string[]; // e.g., "Function Contact" array
  };
}
