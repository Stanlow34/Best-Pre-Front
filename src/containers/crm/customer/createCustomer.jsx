import React from "react";
import './customer.css'

const CreateCustomerPage = () => (
    <>
    <div>
        <form method="get" className="customer-create">
            <p className="customer_field">
            <label htmlFor="type_customer " className="required">Professionnels / Particuliers</label>
            <input type="text" name="type_customer " id="type_customer " placeholder="Professionnels" required></input>
            </p>
            <p className="customer_field">
            <label htmlFor="civil_customer" className="non-required">Civilité</label>
            <input type="text" name="civil_customer" id="civil_customer" placeholder="Monsieur"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="form_customer " className="non-required">Forme juridique</label>
            <input type="text" name="form_customer " id="form_customer " placeholder="SARL"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="siret_customer" className="non-required">SIRET</label>
            <input type="text" name="siret_customer" id="siret_customer" placeholder="12345678900099"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="denomination_customer" className="required">Dénomination</label>
            <input type="text" name="denomination_customer" id="denomination_customer" placeholder="Dénomination" required></input>
            </p>
            <p className="customer_field">
            <label htmlFor="name_customer" className="non-required">Nom</label>
            <input type="text" name="name_customer" id="name_customer" placeholder="Nom"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="firstname_customer" className="non-required">Prénoms</label>
            <input type="text" name="firstname_customer" id="firstname_customer" placeholder="Prénoms"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="company_adress_number_customer" className="non-required">Numéro</label>
            <input type="text" name="company_adress_number_customer" id="company_adress_number_customer" placeholder="Numéro"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="company_adress_indice_customer" className="non-required">Indice</label>
            <input type="text" name="company_adress_indice_customer" id="company_adress_indice_customer" placeholder="Indice"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="company_adress_compt_customer" className="non-required">Complément</label>
            <input type="text" name="company_adress_compt_customer" id="company_adress_compt_customer" placeholder="Complément"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="company_adress_type_customer " className="non-required">Type</label>
            <input type="text" name="company_adress_type_customer " id="company_adress_type_customer " placeholder="Type"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="company_adress_name_customer" className="non-required">Libellé</label>
            <input type="text" name="company_adress_name_customer" id="company_adress_name_customer" placeholder="Libellé"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="company_adress_postalcode_customer" className="non-required">Code postal</label>
            <input type="text" name="company_adress_postalcode_customer" id="company_adress_postalcode_customer" placeholder="Code postal" required></input>
            </p>
            <p className="customer_field">
            <label htmlFor="company_adress_city_customer " className="non-required">Ville</label>
            <input type="text" name="company_adress_city_customer " id="company_adress_city_customer " placeholder="Ville"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="company_adress_country_customer " className="required">Pays</label>
            <input type="text" name="company_adress_country_customer " id="company_adress_country_customer " placeholder="Pays" required></input>
            </p>
            <p className="customer_field">
            <label htmlFor="invoicing_adress_number_customer" className="non-required">Numéro</label>
            <input type="text" name="invoicing_adress_number_customer" id="invoicing_adress_number_customer" placeholder="Numéro"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="invoicing_adress_indice_customer" className="non-required">Indice</label>
            <input type="text" name="invoicing_adress_indice_customer" id="invoicing_adress_indice_customer" placeholder="Indice"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="invoicing_adress_compt_customer" className="non-required">Complément</label>
            <input type="text" name="invoicing_adress_compt_customer" id="invoicing_adress_compt_customer" placeholder="Complément"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="invoicing_adress_type_customer " className="non-required">Type</label>
            <input type="text" name="invoicing_adress_type_customer " id="invoicing_adress_type_customer " placeholder="Type"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="invoicing_adress_name_customer" className="non-required">Libellé</label>
            <input type="text" name="invoicing_adress_name_customer" id="invoicing_adress_name_customer" placeholder="Libellé"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="invoicing_adress_postalcode_customer" className="non-required">Code postal</label>
            <input type="text" name="invoicing_adress_postalcode_customer" id="invoicing_adress_postalcode_customer" placeholder="Code postal"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="invoicing_adress_city_customer " className="non-required">Ville</label>
            <input type="text" name="invoicing_adress_city_customer " id="invoicing_adress_city_customer " placeholder="Ville"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="invoicing_adress_country_customer " className="non-required">Pays</label>
            <input type="text" name="invoicing_adress_country_customer " id="invoicing_adress_country_customer " placeholder="Pays"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="delivery_adress_number_customer" className="non-required">Numéro</label>
            <input type="text" name="delivery_adress_number_customer" id="delivery_adress_number_customer" placeholder="Numéro"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="delivery_adress_indice_customer" className="non-required">Indice</label>
            <input type="text" name="delivery_adress_indice_customer" id="delivery_adress_indice_customer" placeholder="Indice"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="delivery_adress_compt_customer" className="non-required">Complément</label>
            <input type="text" name="delivery_adress_compt_customer" id="delivery_adress_compt_customer" placeholder="Complément"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="delivery_adress_type_customer" className="non-required">Type</label>
            <input type="text" name="delivery_adress_type_customer" id="delivery_adress_type_customer" placeholder="Type"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="delivery_adress_name_customer" className="non-required">Libellé</label>
            <input type="text" name="delivery_adress_name_customer" id="delivery_adress_name_customer" placeholder="Libellé"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="delivery_adress_postalcode_customer" className="non-required">Code postal</label>
            <input type="text" name="delivery_adress_postalcode_customer" id="delivery_adress_postalcode_customer" placeholder="Code postal"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="delivery_adress_city_customer" className="non-required">Ville</label>
            <input type="text" name="delivery_adress_city_customer" id="delivery_adress_city_customer" placeholder="Ville"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="delivery_adress_country_customer" className="non-required">Pays</label>
            <input type="text" name="delivery_adress_country_customer" id="delivery_adress_country_customer" placeholder="Pays"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="phone_customer" className="non-required">Téléphone</label>
            <input type="text" name="phone_customer" id="phone_customer" placeholder="Téléphone"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="mail_adress_customer" className="non-required">Adresse mail</label>
            <input type="text" name="mail_adress_customer" id="mail_adress_customer" placeholder="Adresse mail"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="id_groupe_customer" className="non-required">Groupe client</label>
            <input type="text" name="id_groupe_customer" id="id_groupe_customer" placeholder="Groupe client"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="contact_id_customer " className="non-required">Contact</label>
            <input type="text" name="contact_id_customer " id="contact_id_customer " placeholder="Contact"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="accountant_id_customer " className="non-required">Comptable</label>
            <input type="text" name="accountant_id_customer " id="accountant_id_customer " placeholder="Comptable"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="note_customer" className="non-required">Note</label>
            <input type="text" name="note_customer" id="note_customer" placeholder="Note"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="default_type_payment " className="non-required">Mode de paiement (défaut)</label>
            <input type="text" name="default_type_payment " id="default_type_payment " placeholder="Mode de paiement (défaut)"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="default_delay_payment " className="non-required">Délais de paiement (défaut)</label>
            <input type="text" name="default_delay_payment " id="default_delay_payment " placeholder="Délais de paiement (défaut)"></input>
            </p>
            <p className="customer_field">
            <label htmlFor="default_escompte " className="non-required">Escompte (défaut)</label>
            <input type="text" name="default_escompte " id="default_escompte " placeholder="Escompte (défaut)"></input>
            </p>
        </form>
        <p className="create_btn">
        <input id="createCustomerBtn" className="btn" type="submit" value="Créer le client"></input>
        </p>
    </div>
    </>
);

export default CreateCustomerPage;