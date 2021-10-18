import React from "react";
import style from "./App.module.css";
import DataInput from "./dataInput/DataInput";
import Contacts from "./contacts/Contacts";
import Section from "./section/Section";
import Filter from "./filter/Filter";
import Container from "./container/Container";

const App = () => {
    return (
        <div className={style.app}>
            <Container>
                <Section title="Phonebook">
                    <DataInput/>
                </Section>
                <Section title="Contacts">
                    <Filter/>
                    <Contacts/>
                </Section>
            </Container>
        </div>
    );
}

export default App;
