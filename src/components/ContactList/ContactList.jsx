import css from "./ContactList.module.css"

import { Contact } from "../Contact/Contact";

import { useSelector } from "react-redux";

export const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.items);
    const filters = useSelector((state) => state.filters.name);
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filters));

    return (
        <ul className={css.contactList}>
            {visibleContacts.map((contact) => (
                <li className={css.contactItem} key={contact.id}>
                    <Contact contact={contact}  />
                </li>
            ))}
        </ul>
    )
}