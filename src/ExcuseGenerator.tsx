import {useState} from "react";

interface FormData {
    imie: string;
    powod: string;
    wiarygodnosc: string;
    data: string;
    kreatywnosc: string;
    szczegoly: string;
    pilnosc: string;

}

interface ExcuseGeneratorProps {
    onSubmit: (data: FormData) => void;
}

const ExcuseGenerator = () => {
    const [formData, setFormData] = useState<FormData>({
        imie: "",
        powod: "",
        wiarygodnosc: "",
        data: "",
        kreatywnosc: "",
        szczegoly: "",
        pilnosc: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
    };


    return (

        <form onSubmit={handleSubmit} id="form-container">

            Imie:
            <input
                type="text"
                name="imie"
                value={formData.imie}
                onChange={handleChange}
            />

            Powód:
            <select name="powod">
                <option></option>
                <option value="spoznienie">spóźnienie</option>
                <option value="niedostarczenie pracy domowej">niedostarczenie pracy domowej</option>
                <option value="brak odpowiedzi na wiadomość">brak odpowiedzi na wiadomość</option>
            </select>

            Wiarygodność:
            <input
                type="range"
                name="wiarygodnosc"
            />

            Data:
            <input
                type="date"
                name="data"
            />

            Poziom Kreatywności:
            <select name="kreatywnosc">
                <option value="kreatywne">Kreatywne</option>
                <option value="srednie">Średnie</option>
                <option value="powazne">Poważne</option>
            </select>

            Dodatkowe Szczegóły:
            <textarea
                name="szczegoly"
            />

            Pilne:

            <input
                type="checkbox"
                name="pilnosc"
            />

            <button type="submit">
                Submit
            </button>

        </form>

    );

}
export default ExcuseGenerator