import React, { useState } from "react";
import './items.css'

const CreateItemPage = ({ onClose, onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    amount_ht: "",
    tva_rate: "",
    remise_percent: "",
    remise: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Item créé :", form);

    if (onSuccess) {
      onSuccess(form);
    }

    if (onClose) {
      onClose();
    }
  };

return (
    <form onSubmit={handleSubmit} className="create-item-form">
            <p className="name">
            <label htmlFor="name-items" className="required">Nom</label>
            <input type="text" name="name" id="name-items" placeholder="Nom" value={form.name} onChange={handleChange} required></input>
            </p>
            <p className="description">
            <label htmlFor="description-items" className="">Description</label>
            <input type="text" name="description" id="description-items" placeholder="Description" value={form.description} onChange={handleChange} required></input>
            </p>
            <p className="amount_ht">
            <label htmlFor="amount-items" className="required">Montant HT</label>
            <input type="text" name="amount_ht" id="amount-items" placeholder="Montant HT" value={form.amount_ht} onChange={handleChange} required></input>
            </p>
            <p className="tva_rate">
            <label htmlFor="tva-rate-items" className="">Taux de TVA</label>
            <input type="text" name="tva_rate" id="tva-rate-items" placeholder="Taux de TVA" value={form.tva_rate} onChange={handleChange} required></input>
            </p>
            <p className="remise_percent_item">
            <label htmlFor="remise-percent-items" className="">Remise (%)</label>
            <input type="text" name="remise_percent" id="remise-percent-items" placeholder="Remise (%)" value={form.remise_percent} onChange={handleChange}></input>
            </p>
            <p className="remise_item">
            <label htmlFor="remise-items" className="">Remise</label>
            <input type="text" name="remise" id="remise-items" placeholder="Remise" value={form.remise} onChange={handleChange}></input>
            </p>
    </form>
);}

export default CreateItemPage;