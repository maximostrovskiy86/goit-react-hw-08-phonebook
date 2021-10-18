import React from "react";
import style from "./Section.module.css";
import PropTypes from 'prop-types';

const Section = ({children, title}) => {
    return (
        <div className={style.section}>
            <h2 className={style.title}>{title.toUpperCase()}</h2>
            {children}
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;