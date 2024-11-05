interface PhoneNumber {
  countryCode: string;
  digits: string;
  id: string;
  label: string;
  number: string;
}

interface ContactRecord {
  company: string;
  contactType: "person" | "company"; // Assuming only these types exist
  firstName: string;
  id: string;
  imageAvailable: boolean;
  jobTitle: string;
  lastName: string;
  name: string;
  phoneNumbers: PhoneNumber[]; // Array of PhoneNumber objects
}
