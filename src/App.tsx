import './App.css';
import FetchExcuses from './FetchExcuses';
import ExcuseShow from './ExcuseShow';
import { useState } from 'react';

export interface Excuse {
    id: number;
    name: string;
    reason: string;
    credibility: number;
    date: string;
    creativity: string;
    details: string;
    urgent: boolean;
}

function App() {
    const storedExcuses = localStorage.getItem('excuses');
    const [excuses, setExcuses] = useState<Excuse[]>(storedExcuses ? JSON.parse(storedExcuses) : []);

    const updateStorage = (newExcuses: Excuse[]) => {
        setExcuses(newExcuses);
        localStorage.setItem('excuses', JSON.stringify(newExcuses));
    };

    const addExcuse = (excuse: Excuse) => {
        const newExcuses = [...excuses, excuse];
        updateStorage(newExcuses);
    };

    const deleteExcuse = (id: number) => {
        const newExcuses = excuses.filter(e => e.id !== id);
        updateStorage(newExcuses);
    };

    return (
        <div className="app-container">
            <h1>Generator Wymówek</h1>
            <FetchExcuses onAdd={addExcuse} />
            <ExcuseShow excuses={excuses} onDelete={deleteExcuse} />

        </div>
    );
}

export default App;