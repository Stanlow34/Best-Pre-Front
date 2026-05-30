import { useState, useEffect, useRef, useCallback } from "react";

export function ClientSelect({
  value,
  onChange,
  placeholder = "Rechercher un client...",
}) {
  const [query, setQuery] = useState(value?.nom ?? "");
  const [filtered, setFiltered] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(value ?? null);
  const wrapperRef = useRef(null);
  const debounceRef = useRef(null);

  // ✅ Sync si value change depuis le parent (reset formulaire)
  useEffect(() => {
    setSelected(value ?? null);
    setQuery(value?.nom ?? "");
  }, [value]);

  // ✅ Nettoyage debounce au démontage
  useEffect(() => {
    return () => clearTimeout(debounceRef.current);
  }, []);

  // ✅ Fermer au clic extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        // Remettre le nom du client sélectionné si on quitte sans choisir
        if (selected) setQuery(selected.nom);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selected]);

  // ✅ Recherche côté serveur
  const fetchClients = useCallback(async (search = "") => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: "50" });
      if (search.trim()) params.append("search", search.trim());
      const res = await fetch(`/api/customers?${params}`);
      if (!res.ok) throw new Error("Erreur réseau");
      const data = await res.json();
      setFiltered(data);
    } catch (err) {
      console.error("Erreur chargement clients:", err);
      setFiltered([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // ✅ Chargement initial
  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    setSelected(null); // désélectionner si on retape
    setOpen(true);

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchClients(val), 300);
  };

  const handleSelect = (client) => {
    setSelected(client);
    setQuery(client.nom);
    setOpen(false);
    onChange?.(client);
  };

  const handleClear = () => {
    setSelected(null);
    setQuery("");
    onChange?.(null);
    fetchClients(); // recharger la liste complète
  };

  return (
    <div ref={wrapperRef} style={{ position: "relative", width: "100%" }}>
      <div
        style={{
          display: "flex", alignItems: "center",
          border: `1px solid ${open ? "#4f8ef7" : "#ccc"}`,
          borderRadius: 6, padding: "6px 10px",
          transition: "border-color 0.2s",
        }}
      >
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => { setOpen(true); if (!filtered.length) fetchClients(query); }}
          placeholder={placeholder}
          style={{ flex: 1, border: "none", outline: "none", fontSize: 14 }}
        />
        {selected && (
          <button
            type="button" // ✅ évite submit accidentel dans un <form>
            onClick={handleClear}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#999" }}
          >
            ✕
          </button>
        )}
        <span style={{ color: "#999", userSelect: "none" }}>{open ? "▲" : "▼"}</span>
      </div>

      {open && (
        <ul
          style={{
            position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 1000,
            background: "#fff", border: "1px solid #ddd", borderRadius: 6,
            maxHeight: 240, overflowY: "auto", margin: 0, padding: 0, listStyle: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {loading && <li style={{ padding: "10px 12px", color: "#999" }}>Chargement...</li>}
          {!loading && filtered.length === 0 && (
            <li style={{ padding: "10px 12px", color: "#999" }}>Aucun client trouvé</li>
          )}
          {!loading && filtered.map((client) => (
            <li
              key={client.id}
              onMouseDown={() => handleSelect(client)}
              style={{
                padding: "10px 12px", cursor: "pointer",
                background: selected?.id === client.id ? "#f0f7ff" : "white",
                borderBottom: "1px solid #f0f0f0",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f5f5f5")}
              onMouseLeave={(e) => (e.currentTarget.style.background =
                selected?.id === client.id ? "#f0f7ff" : "white"
              )}
            >
              <div style={{ fontWeight: 500 }}>{client.nom}</div>
              <div style={{ fontSize: 12, color: "#888" }}>
                {client.email} · {client.telephone}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}