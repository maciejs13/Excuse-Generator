import { Excuse } from './App';

interface Props {
    excuses: Excuse[];
    onDelete: (id: number) => void;
}

const ExcuseShow = ({ excuses, onDelete }: Props) => {
    return (
        <div className="list">
            <h2>Lista wymówek:</h2>
            {excuses.map(excuse => (
                <div key={excuse.id} className="excuse-item">
                    <p><strong>{excuse.name}</strong>: Panie Profesorze, niestety {excuse.reason}, ponieważ {excuse.details || 'brak szczegółów'}, poziom wiarygodności: {excuse.credibility}, zdarzenie miało miejsce ({excuse.date}), kreatywność: {excuse.creativity}, {excuse.urgent ? 'wymówkę oznaczono jako pilną' : 'wymówka nie jest pilna'}.</p>
                    <button onClick={() => onDelete(excuse.id)}>Usuń</button>
                </div>
            ))}
        </div>
    );
};

export default ExcuseShow;