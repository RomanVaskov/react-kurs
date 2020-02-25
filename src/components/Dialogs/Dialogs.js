import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/1">Роман</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Алексей</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Дмитрий</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/4">Роман</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>PHP</div>
                <div className={style.message}>PHP</div>
                <div className={style.message}>VUE</div>
                <div className={style.message}>Верстка</div>
            </div>
        </div>
    )
}

export default Dialogs;