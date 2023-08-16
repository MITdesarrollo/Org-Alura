import { MiOrgLayout } from "./MiOrgLayout";
import "./miOrg.css";
import { useState } from "react";

export const MiOrg = ({newShowForm}) => {

    return (
        <MiOrgLayout handlerClick={newShowForm}/>
    )
}