import React, {useEffect} from "react";
import { Link, useActionData } from "react-router-dom";
import { Contact } from "../component/contactCard.jsx";

export const ContactList = () => {

	// useEffect(() => {
	// 	action.getContacts()
    // }, []);

	return (
		<div className="container-fluid justify-content-center"> 
			<h1 className="text-center align-items-center mt-5 text-info">Contact List</h1>
			<div className="container-fluid d-flex justify-content-end">
				<Link className="w-0 text-decoration-none" to="/addContact">
					<button className="btn btn-info m-3">Add contact</button>
				</Link>
			</div>
			<div className="container-fluid">
				<Contact />
			</div>
		</div>
	);
};