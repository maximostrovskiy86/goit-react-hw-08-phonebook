import React from 'react';
import Contacts from "../components/contacts/Contacts";
import Filter from "../components/filter/Filter";
import DataInput from "../components/dataInput/DataInput";
import Section from "../components/section/Section";


const ContactsView = () => {
    const style = {
        app: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    }
    return (
        <div style={style.app}>
            <Section title="Phonebook">
                <DataInput/>
            </Section>
            <Section title="Contacts">
                <Filter/>
                <Contacts/>
            </Section>
        </div>
    );
}

export default ContactsView;
