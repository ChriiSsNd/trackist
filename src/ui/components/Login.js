import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function Login(params) {
    const login = false;

    if (!login) {
        return (
            <div className="bg-white shadow-md rounded-md border border-gray-100 w-10 h-10 grid place-items-center">
                <FontAwesomeIcon icon={faCircleUser} size="lg" className="text-gray-400" />
            </div>
        )
    } else {
        
    }
}