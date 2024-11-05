import { useState, useEffect } from "react";
import * as Contacts from "expo-contacts";

const useMobileContacts = () => {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
            const { data } = await Contacts.getContactsAsync({
                fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers], // Add PhoneNumbers here
            });
            if (data.length > 0) {
                setContacts(data);
            }
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return { contacts, fetchContacts };
};

export default useMobileContacts;
