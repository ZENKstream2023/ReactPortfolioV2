import React, { useState } from 'react';

// Importa los datos de forma local en caso de fallo de la API o de la Base de Datos
import sucursales from "@/data/sucursales.json";

function FindStore() {
  const [stores, setStores] = useState([]);
  const [where, setWhere] = useState("");
  const [search, setSearch] = useState("");
  const [afterSearch, setAfterSearch] = useState([]);
  const [findStore, setFindStore] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const [amountResults, setAmountResults] = useState(null);

  // Se llama a la función getStores() para solicitar los datos legítimos de las tiendas de la base de datos
  useEffect(() => {
    getStores();
  }, []);

  // Función getStores(), solicita los datos a la API de todas las tiendas de la base de datos.
  const getStores = () => {
    // Se inicializa la variable 'stores' con una copia local de las tiendas de la base de datos, por si fallase en algún momento la conexión con la API o con la base de datos
    setStores(sucursales);
    fetch("http://localhost:3200/api/sucursales")
      .then((response) => response.json())
      .then((data) => {
        setStores(data);
      })
      .catch((error) => {
        console.error('Error fetching stores:', error);
      });
  };

  // Función newsearch(), recorre en base a la búsqueda realizada, los datos 'stores' proporcionados por la API en busca de coincidencias en las columnas: Comunidad y Departamento...
  const newSearch = () => {
    setSearch(search.toUpperCase());
    let results = [];
    for (let i = 0; i < stores.length; i++) {
      if (
        stores[i].Comunidad.toUpperCase().includes(search) ||
        stores[i].Departamento.toUpperCase().includes(search) ||
        stores[i].CP.toUpperCase().includes(search)
      ) {
        results.push(stores[i]);
      }
    }
    setAfterSearch(results);
    if (results.length < 1) {
      setNoResults(true);
    } else {
      setNoResults(false);
      setAmountResults(results.length);
      setFindStore(false);
    }
  };

  // Función mapRoute(), recibe como parámetro el contenido de la ubicación de la tienda que ha sido seleccionada y trata dicha información para obtener como resultado la ruta dinámica a introducir en el iframe de Google Maps
  const mapRoute = (whereIs) => {
    let newWhere = "";
    const newReplace = [];
    for (let i = 0; i < whereIs.length; i++) {
      newReplace.push(whereIs[i].replace(" ", "%20"));
    }
    newWhere = newReplace.join("");
    setWhere(newWhere);
  };
  return (
    <section style={{ backgroundColor: '#e4e4f4', width: '100%', paddingTop: '15em' }}>
      {/* Wireframe: Encuentra tu sucursal */}
      <article className="row p-2 shadow-sm" style={{ alignItems: 'center', display: 'flex', marginRight: 'auto', marginLeft: 'auto', position: 'relative' }}>
        <div className="col-2" />
        <section className="col-4 p-4" style={{ textAlign: 'left' }}>
          <h3 className="mb-3" style={{ color: '#4c9ae7' }}><b>Encuentra tu sucursal</b></h3>
          <article className="mb-4 text-body-secondary"><b>Localiza tu sucursal más cercana</b></article>
          <article>
            <p className="card-text mb-4" style={{ color: '#727272' }}>Introduce tu localidad o, simplemente tu código postal, y comprueba las sucursales cerca de tí.</p>
          </article>
          <article>
            <input
              onKeyUp={newSearch}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-3"
              style={{ marginLeft: '0.01em', paddingLeft: '1em', width: '25em', border: '0.1em solid #6297b7', borderRadius: '0.25em' }}
            />
            {/* Muestra un mensaje si el campo de búsqueda está vacío */}
            <p style={{ color: 'red' }} hidden={search.trim() !== ''}>Haz clic en el botón, para listar todos los resultados.</p>
          </article>
          <article>
            <p className="card-text mb-4">
              <img style={{ width: '1em', marginRight: '0.2em' }} src="/ubicacion.svg" alt="Ubicación" />
              <span style={{ borderBottom: '0.1em solid #6297b7' }}>Utilizar ubicación actual</span>
            </p>
          </article>
          <article hidden={!noResults}>
            <p>Lo sentimos no encontramos resultados.</p>
          </article>
          <button
            onClick={newSearch}
            className="mb-5"
            style={{
              width: '13em',
              background: 'linear-gradient(to right, #df18df, #4c9ae7)',
              color: 'white',
              fontSize: '0.9em',
              borderRadius: '0.25em',
              border: 'none',
              textAlign: 'center',
              padding: '0.25em'
            }}
          >
            <b>ENCUENTRA TU SUCURSAL</b>
          </button>
        </section>
        <section className="col-4 d-none d-lg-block">
          <img style={{ width: '75%' }} className="bd-placeholder-img" src="/sucursal.png" alt="Sucursal" />
        </section>
        <div className="col-2" />
      </article>
      {/* Fin de wireframe: Encuentra tu tienda */}
      {/* After the search wireframe */}
      <article hidden={findStore} style={{ backgroundColor: '#e4e4f4', alignItems: 'center', display: 'flex', marginRight: 'auto', marginLeft: 'auto', position: 'relative' }} className="row roundedshadow-sm">
        <div className="col-2" />
        <section className="col-5 p-4" style={{ textAlign: 'left' }}>
          <h4 className="mb-3" style={{ color: '#4c9ae7', width: '80%' }}><b>{amountResults > 1 ? `Se han encontrado ${amountResults} sucursales cerca de tu ubicación actual` : `Se ha encontrado 1 sucursal cerca de tu ubicación actual`}</b></h4>
          <div style={{ textTransform: 'capitalize' }} className="mb-4 text-body-secondary"><b style={{ fontSize: '0.8em' }}>{search}</b></div>
          <div>
            {afterSearch.map((store) => (
              <article key={store.id}>
                {store.Estado === 'ACTIVO' && store.Empresa.includes('HR') && store.Condición === 'Tienda' && (
                  <a href="#" style={{ textDecoration: 'none', color: 'white' }}>
                    <button
                      className="row mb-4"
                      style={{ border: 'none', background: 'none', textAlign: 'left' }}
                      onClick={() => mapRoute(store.Ubicación)}
                    >
                      <article style={{ marginTop: '1em' }} className="col-1 fs-4">
                        <img style={{ width: '1em' }} src="/ubicacion.svg" alt="Ubicación" />
                      </article>
                      <article style={{ width: '20em' }} className="col">
                        <div style={{ fontSize: '0.9em' }} className="mb-1 text-body-secondary"><b>{store.Departamento}</b></div>
                        <div style={{ fontSize: '0.9em' }} className="mb-1 text-body-secondary">{store.Ubicación}</div>
                        <div style={{ fontSize: '0.9em', color: '#4c9ae7' }} className="mb-1">{store.Teléfono}</div>
                        <div className="dropdown-center mb-4">
                          <button
                            style={{ background: 'none', border: 'none' }}
                            className="text-body-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Horarios
                          </button>
                          <section style={{ background: 'none', border: 'none' }} className="dropdown-menu">
                            <article>
                              <div className="dropdown-item">{store.Horarios}</div>
                            </article>
                          </section>
                        </div>
                      </article>
                    </button>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
        <section className="col-5">
          <article style={{ width: '80%' }}>
            <iframe
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=${where}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`}
              width="100%"
              height="400"
              frameBorder="0"
              title="Google Maps"
            ></iframe>
          </article>
        </section>
        <div className="col-2" />
      </article>
      {/* Fin de wireframe: After the search */}
    </section>
  );
}

export default FindStore;