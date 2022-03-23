import React, {useEffect, useState} from "react";
import {DAYS, MONTHS} from "../utils/date";

export default function Header() {
    const [time, setTime] = useState("afternoon")
    const date = new Date()
    let hours = date.getHours()

    useEffect(() => {
        if (hours > 18 || hours < 7) {
            setTime("night")
            return
        }
        setTime("afternoon")
    }, [hours])

    return (
        <div className={"header " + time}>
            <h1>{DAYS[date.getDay()]}</h1>
            <span>{MONTHS[date.getMonth()]}, {date.getDate()}</span>
        </div>
    )
}