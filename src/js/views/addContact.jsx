import React, { useState, useContext, useEffect } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const AddContact = () => {
	const { actions } = useContext(Context);

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		actions.postContact(name, phone, email, address)
	}

	return (
		<form className="container-fluid" onSubmit={handleSubmit}>
			<h1 className="mt-5 mx-auto p-3 text-center text-info
			 text-decoration-underline">Add new contact</h1>
			<div className="mb-3">
				<label className="form-label text-white">Name Surname</label>
				<input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="fullName" aria-describedby="Full Name" placeholder="Add your name" />
			</div>
			<div className="mb-3">
				<label className="form-label text-white">E-mail</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="email" placeholder="Add your E-mail" />
			</div>
			<div className="mb-3">
				<label className="form-label text-white">Phone number</label>
				<input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="phone" aria-describedby="phone" placeholder="Add your phone number" />
			</div>
			<div className="mb-3">
				<label className="form-label text-white">Addres</label>
				<input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="address" aria-describedby="address" placeholder="Add your addres" />
			</div>
			<div className="mb-3">
				<button className="btn btn-info w-100" type="submit">Save</button>
			</div>
			<Link to="/">Contact list</Link>
		</form>
	);
};