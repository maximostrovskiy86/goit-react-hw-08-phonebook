import React from 'react';
import style from "./Container.scss";

const Container = ({children}) => {
    return (
        <div className={style.Container}>
            {children}
        </div>
    );
}

export default Container;
