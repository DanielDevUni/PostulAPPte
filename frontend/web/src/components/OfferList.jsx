import { useEffect, useState } from 'react';
import { getOffers } from '../api/offer';

import { EmojiFrown } from 'react-bootstrap-icons';

export default function OfferList() {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Ofertas Disponibles</h2>
            <div className="row">
                {offers.map(offer => (
                    <div key={offer.id} className="col-md-6 mb-4">
                        <div className="card h-100 card-custom">
                            <div className="card-header">{offer.name}</div>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text">{offer.function}</p>
                                <span className="badge bg-dark">
                                    ${offer.salary}
                                </span>
                                <span className="badge bg-primary">{offer.level}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}