import { useState } from 'react';
import { Excuse } from './App';

interface Props {
    onAdd: (excuse: Excuse) => void;
}

const FetchExcuses = ({ onAdd }: Props) => {
    const [form, setForm] = useState({
        name: '',
        reason: 'spóźnienie',
        credibility: 5,
        date: '',
        creativity: 'średnia',
        details: '',
        urgent: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type, checked } = target;
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newExcuse: Excuse = {
            ...form,
            id: Date.now(),
        };
        onAdd(newExcuse);
        setForm({
            name: '', reason: 'spóźnienie', credibility: 5, date: '', creativity: 'średnia', details: '', urgent: false
        });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Imię" required />
            <select name="reason" value={form.reason} onChange={handleChange}>
                <option>spóźnienie</option>
                <option>niedostarczenie pracy domowej</option>
                <option>brak odpowiedzi na wiadomość</option>
            </select>
            <input type="range" name="credibility" min="1" max="10" value={form.credibility} onChange={handleChange} />
            <input type="date" name="date" value={form.date} onChange={handleChange} />
            <select name="creativity" value={form.creativity} onChange={handleChange}>
                <option>niska</option>
                <option>średnia</option>
                <option>wysoka</option>
                <option>bardzo duża</option>
            </select>
            <textarea name="details" value={form.details} onChange={handleChange} placeholder="Dodatkowe szczegóły" />
            <label>
                <input type="checkbox" name="urgent" checked={form.urgent} onChange={handleChange} /> Pilne
            </label>
            <button type="submit">Dodaj wymówkę</button>
        </form>
    );
};

export default FetchExcuses;