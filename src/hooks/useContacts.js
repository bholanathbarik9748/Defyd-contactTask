import { useEffect, useState } from "react";
import { database as db } from "../database";

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    const dbContacts = await db.collections.get("contacts").query().fetch();
    setContacts(dbContacts);
    setLoading(false);
  };

  const createContact = async (name, phone) => {
    await db.write(async () => {
      await db.collections.get("contacts").create((contact) => {
        contact.name = name;
        contact.phone = phone;
      });
    });
    await fetchContacts();
  };

  const updateContact = async (id, updatedData) => {
    const contact = await db.collections.get("contacts").find(id);
    await db.write(async () => {
      await contact.update((record) => {
        record.name = updatedData.name;
        record.phone = updatedData.phone;
      });
    });
    await fetchContacts();
  };

  const deleteContact = async (id) => {
    const contact = await db.collections.get("contacts").find(id);
    await db.write(async () => {
      await contact.markAsDeleted();
    });
    await fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return {
    contacts,
    loading,
    fetchContacts,
    createContact,
    updateContact,
    deleteContact,
  };
};

export default useContacts;
