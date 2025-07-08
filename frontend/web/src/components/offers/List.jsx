import { useEffect, useState } from 'react';
import { getOffers } from './../../api/offer';

import Icon from '../Icons'; 

export default function List() {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [levelFilter, setLevelFilter] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    const loadOffers = async () => {
        try {
            const response = await getOffers();
            setOffers(response.data);
        } catch (error) {
            console.error("Error loading offers:", error);
        } finally {
            setLoading(false);
        }
    };

    function getDaysAvailable(date_start, date_finish) {
        const now = new Date();
        const start = new Date(date_start);
        const finish = new Date(date_finish);

        // Si aún no inicia, muestra días hasta el inicio
        if (now < start) {
            const diffMs = start - now;
            return `Disponible en ${Math.ceil(diffMs / (1000 * 60 * 60 * 24))} días`;
        }
        // Si ya finalizó, muestra "Expirada"
        if (now > finish) {
            return "Oferta expirada";
        }
        // Si está disponible, muestra días restantes
        const diffMs = finish - now;
        return `Disponible ${Math.ceil(diffMs / (1000 * 60 * 60 * 24))} días más`;
    }
    
    useEffect(() => {
        loadOffers();
    }, []);

    if (loading) {
        return <div className="text-center my-5">Loading offers...</div>;
    }

    if (offers.length === 0) {
        return (
            <div className="container mt-4">
                <Alert variant="primary" className="d-flex align-items-center">
                    <EmojiFrown className="me-2" size={24} />
                    <div>
                        <h4 className="alert-heading">¡No hay ofertas disponibles!</h4>
                        <p className="mb-0">No se encontraron ofertas registradas en este momento.</p>
                    </div>
                </Alert>
            </div>
        );
    }

    const filteredOffers = offers.filter(offer => {
        // Filtro por texto (título o función)
        const matchSearch =
            offer.title?.toLowerCase().includes(search.toLowerCase()) ||
            offer.function?.toLowerCase().includes(search.toLowerCase());

        // Filtro por nivel
        const matchLevel = levelFilter ? offer.level === levelFilter : true;

        // Filtro por fecha inicio (date_start de la oferta debe ser >= dateStart filtro)
        const matchDateStart = dateStart ? (new Date(offer.date_start) >= new Date(dateStart)) : true;

        // Filtro por fecha fin (date_finish de la oferta debe ser <= dateEnd filtro)
        const matchDateEnd = dateEnd ? (new Date(offer.date_finish) <= new Date(dateEnd)) : true;

        return matchSearch && matchLevel && matchDateStart && matchDateEnd;
    });

    return (
        <div className="container mt-4">
            <div className="card mb-4 p-3">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="mb-0">Filtrar Ofertas</h3>
                    <span
                        className="text-custom underline"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                        setSearch('');
                        setLevelFilter('');
                        setDateStart('');
                        setDateEnd('');
                        }}
                    >
                        Limpiar
                    </span>
                </div>
                <form className="row g-2 align-items-end">
                    <div className="col-md-4">
                        <label className="form-label mb-0" htmlFor="searchInput">
                            Buscar
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="searchInput"
                            placeholder="Cargo, palabra clave o función..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <label className="form-label mb-0" htmlFor="levelInput">Nivel</label>
                        <select
                            id="levelInput"
                            className="form-control"
                            value={levelFilter}
                            onChange={e => setLevelFilter(e.target.value)}
                        >
                            <option value="">Todos los niveles</option>
                            <option value="Técnico">Técnico</option>
                            <option value="Tecnólogo">Tecnólogo</option>
                            <option value="Profesional">Profesional</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label className="form-label mb-0" htmlFor="dateStartInput">Desde</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dateStartInput"
                            value={dateStart}
                            onChange={e => setDateStart(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label mb-0" htmlFor="dateEndInput">Hasta</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dateEndInput"
                            value={dateEnd}
                            onChange={e => setDateEnd(e.target.value)}
                        />
                    </div>
                </form>
            </div>

            <h2 className="mb-4">Ofertas Disponibles</h2>
            <div className="row">
                {filteredOffers.map(offer => (
                    <div className="col-md-12 mb-3">
                        <div className="card h-100 card-custom">
                            <div className="card-body">
                                <div className="title-custom mb-3">{offer.name}</div>
                                <p className="card-text">{offer.function}</p>
                                <div className="row">
                                    <div className="col-md-3">
                                        <p className='desc-custom'>Salario: </p>
                                        <span>
                                            ${offer.salary} (Mensual)
                                        </span>
                                    </div>
                                    
                                    <div className="col-md-3">
                                        <p className='desc-custom'>Título: </p>
                                        <span>
                                            {offer.title}
                                        </span>
                                    </div>
                                    <div className="col-md-3">
                                        <p className='desc-custom'>Nivel: </p><span>{offer.level}</span>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="desc-custom">
                                            Caducidad:
                                        </p>
                                        <span>
                                            {getDaysAvailable(offer.date_start, offer.date_finish)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}