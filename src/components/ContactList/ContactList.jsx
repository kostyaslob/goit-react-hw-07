import css from "./ContactList.module.css"

import { Contact } from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice.js"
import { selectNameFilter } from "../../redux/filtersSlice.js";

import { useSelector } from "react-redux";

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filters = useSelector(selectNameFilter);
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()));

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