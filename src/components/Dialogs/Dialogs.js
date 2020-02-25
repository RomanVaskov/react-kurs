import React from "react";
import style from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>Роман</div>
                <div className={style.dialog}>Алексей</div>
                <div className={style.dialog}>Дмитрий</div>
                <div className={style.dialog}>Роман</div>
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