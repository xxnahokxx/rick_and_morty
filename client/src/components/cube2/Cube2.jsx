import React from "react";
import style from "./cube2.module.css";

function Cube2({checkLogin}) {

    const init = checkLogin

    if(init){

        return (
            <div className={style.cube}>
                <div className={style.top}></div>
                <div>
                    <span className={style.cero}></span>
                    <span className={style.uno}></span>
                    <span className={style.dos}></span>
                    <span className={style.tres}></span>
                </div>
            </div>
        )
    }
}


export default Cube2;
