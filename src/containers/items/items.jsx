import React, { useEffect, useState } from "react";
import './items.css'
import CreateItemPage from "./createItems";

const API_BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

//------Composant pour afficher la liste des articles-----//
const ItemsTable = ({ refreshTrigger }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/items`);
      if (!res.ok) throw new Error("Erreur API");
      const data = await res.json();
      setItems(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (refreshTrigger) {
      fetchItems();
    }
  }, [refreshTrigger]);

  if (loading) return <p>Chargement…</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div className="table_corps table_items">
      <table className="table_first table_items_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Montant HT</th>
            <th>Taux de TVA</th>
            <th>Remise (%)</th>
            <th>Remise</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.amount_ht}</td>
              <td>{item.tva_rate}</td>
              <td>{item.remise_percent_item}</td>
              <td>{item.remise_item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

//----- Composant pour créer un nouvel article------//
const CreateItem = ({ onItemCreated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSuccess = () => {
    onItemCreated?.();
  };

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
        remise_percent_item: parseFloat(formData.get("remise-percent-items") || "0"),
        remise_item: parseFloat(formData.get("remise-items") || "0"),
      };

      const res = await fetch(`${API_BASE}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Erreur création article");

      handleSuccess();
      setIsOpen(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return ( 
    <div>
        <p className="create_items">
            <input id="createItem" className="btn create-btn" type="submit" value="Créer un article" onClick={() => setIsOpen(true)}></input>
        </p>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Créer un nouvel article</h2>
            <button type="button" onClick={() => setIsOpen(false)} style={{float: 'right'}}>
              ✕
            </button>
            <form onSubmit={handleSubmit} className="items-create">
              <CreateItemPage onClose={() => setIsOpen(false)} onSuccess={handleSuccess} />
              {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
              <p className="create_btn">
                <input
                  id="createItemBtn"
                  className="btn"
                  type="submit"
                  value={loading ? "Création..." : "Créer l'article"}
                  disabled={loading}
                />
              </p>
            </form>
          </div>
        </div>
        )}
    </div>
  );
};

//------Affichage de la page des articles------//
const ItemsPage = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const handleItemCreated = () => {
    setRefreshTrigger(!refreshTrigger);
  };

  return (
    <div>
      <CreateItem onItemCreated={handleItemCreated} />
      <ItemsTable refreshTrigger={refreshTrigger} />
    </div>
  );
}

export { ItemsPage };