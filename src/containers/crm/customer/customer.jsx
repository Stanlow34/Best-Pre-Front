import React, { useEffect, useState } from "react";
import './customer.css'
import CreateCustomerPage from "./createCustomer";

const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

const CustomersTable = ({ refreshTrigger }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCustomer = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/customers`);
      if (!res.ok) throw new Error("Erreur API");
      const data = await res.json();
      setCustomers(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };  

  useEffect(() => {
    fetchCustomer();
  }, []);

  useEffect(() => {
    if (refreshTrigger) {
      fetchCustomer();
    }
  }, [refreshTrigger]);

  if (loading) return <p>Chargement…</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className="table_corps table_customer">
      <table className="table_first table_customer_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type de client</th>
            <th>Civilité</th>
            <th>Forme juridique</th>
            <th>Siret</th>
            <th>Dénomination</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adresse société (numéro)</th>
            <th>Adresse société (indice)</th>
            <th>Adresse société (complement)</th>
            <th>Adresse société (type)</th>
            <th>Adresse société (nom)</th>
            <th>Adresse société (code postal)</th>
            <th>Adresse société (ville)</th>
            <th>Adresse société (pays)</th>
            <th>Adresse facturation (numéro)</th>
            <th>Adresse facturation (indice)</th>
            <th>Adresse facturation (complement)</th>
            <th>Adresse facturation (type)</th>
            <th>Adresse facturation (nom)</th>
            <th>Adresse facturation (code postal)</th>
            <th>Adresse facturation (ville)</th>
            <th>Adresse facturation (pays)</th>
            <th>Adresse livraison (numéro)</th>
            <th>Adresse livraison (indice)</th>
            <th>Adresse livraison (complement)</th>
            <th>Adresse livraison (type)</th>
            <th>Adresse livraison (nom)</th>
            <th>Adresse livraison (code postal)</th>
            <th>Adresse livraison (ville)</th>
            <th>Adresse livraison (pays)</th>
            <th>Téléphone</th>
            <th>Adresse mail</th>
            <th>Groupe client</th>
            <th>Contact</th>
            <th>Comptable</th>
            <th>Note</th>
            <th>Type de paiement par défaut</th>
            <th>Délai de paiement par défaut</th>
            <th>Escompte par défaut</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.type_customer}</td>
              <td>{c.civil_customer}</td>
              <td>{c.form_customer}</td>
              <td>{c.siret_customer}</td>
              <td>{c.denomination_customer}</td>
              <td>{c.name_customer}</td>
              <td>{c.firstname_customer}</td>
              <td>{c.company_adress_number_customer}</td>
              <td>{c.company_adress_indice_customer}</td>
              <td>{c.company_adress_compt_customer}</td>
              <td>{c.company_adress_type_customer}</td>
              <td>{c.company_adress_name_customer}</td>
              <td>{c.company_adress_postalcode_customer}</td>
              <td>{c.company_adress_city_customer}</td>
              <td>{c.company_adress_country_customer}</td>
              <td>{c.invoicing_adress_number_customer}</td>
              <td>{c.invoicing_adress_indice_customer}</td>
              <td>{c.invoicing_adress_compt_customer}</td>
              <td>{c.invoicing_adress_type_customer}</td>
              <td>{c.invoicing_adress_name_customer}</td>
              <td>{c.invoicing_adress_postalcode_customer}</td>
              <td>{c.invoicing_adress_city_customer}</td>
              <td>{c.invoicing_adress_country_customer}</td>
              <td>{c.delivery_adress_number_customer}</td>
              <td>{c.delivery_adress_indice_customer}</td>
              <td>{c.delivery_adress_compt_customer}</td>
              <td>{c.delivery_adress_type_customer}</td>
              <td>{c.delivery_adress_name_customer}</td>
              <td>{c.delivery_adress_postalcode_customer}</td>
              <td>{c.delivery_adress_city_customer}</td>
              <td>{c.delivery_adress_country_customer}</td>
              <td>{c.phone_customer}</td>
              <td>{c.mail_adress_customer}</td>
              <td>{c.id_groupe_customer}</td>
              <td>{c.contact_id_customer}</td>
              <td>{c.accountant_id_customer}</td>
              <td>{c.note_customer}</td>
              <td>{c.default_type_payment}</td>
              <td>{c.default_delay_payment}</td>
              <td>{c.default_escompte}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CreateCustomer = ({ onClose, onSuccess }) => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState("");
      const [isOpen, setIsOpen] = useState(false);
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

    try {
      const formData = new FormData(e.target);
      const payload = {
        id: Math.floor(Math.random() * 1000000),
        id_schema: 1,
        name: formData.get("name-items"),
        description: formData.get("description-items"),
        amount_ht: parseFloat(formData.get("amount-items")),
        tva_rate: parseFloat(formData.get("tva-rate-items")),
        remise_percent_item: parseFloat(formData.get("remise-percent-items")),
        remise_item: parseFloat(formData.get("remise-items")),
      };

      const res = await fetch(`${API_BASE}/customers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Erreur création client");
      
      onSuccess();
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return ( 
    <div>
        <p className="create_customer">
            <input id="createCustomer" className="btn create-btn" type="submit" value="Créer un client" onClick={() => setIsOpen(true)}></input>
        </p>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-customer" onClick={(e) => e.stopPropagation()}>
            <h2>Titre</h2>
            <p>Contenu de la modale (HTML / JSX)</p>

            <button type="button" onClick={() => setIsOpen(false)}>
              Fermer
            </button>
            <CreateCustomerPage />
          </div>
        </div>
        )}
    </div>
    ); };


//function CustomerPage() {
//  const [refreshTrigger, setRefreshTrigger] = useState(false);
//
//  const handleItemCreated = () => {
//    setRefreshTrigger(!refreshTrigger);
//  };

//  return (
//    <div>
//      <CreateCustomer onItemCreated={handleItemCreated} />
//      <CustomersTable refreshTrigger={refreshTrigger} />
//    </div>
//  );
//}

export {CustomersTable, CreateCustomer};