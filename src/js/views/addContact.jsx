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
			<h1 className="mt-5 mx-auto p-3 text-center text-warning
			 text-decoration-underline">Add new contact</h1>
			<div className="mb-3">
				<label className="form-label text-primary">Name Surname</label>
				<input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="fullName" aria-describedby="Full Name" placeholder="Introduce aqui tu nombre" />
			</div>
			<div className="mb-3">
				<label className="form-label text-primary">E-mail</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="email" placeholder="Introduce aqui tu E-mail" />
			</div>
			<div className="mb-3">
				<label className="form-label text-primary">Phone number</label>
				<input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" id="phone" aria-describedby="phone" placeholder="Introduce aqui tu Telefono" />
			</div>
			<div className="mb-3">
				<label className="form-label text-primary">Addres</label>
				<input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" id="address" aria-describedby="address" placeholder="Introduce aqui tu direccion completa" />
			</div>
			<div className="mb-3">
				<button className="btn btn-warning w-100" type="submit">Save</button>
			</div>
			<Link to="/">Volver a la lista de contactos</Link>
		</form>
	);
};