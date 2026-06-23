import './PokemonForm.css';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PokemonForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        tipo: '',
        peso: '',
        altura: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Aquí iría la llamada a addPokemon cuando esté implementada
            console.log('Formulario enviado:', formData);
            // await addPokemon(formData);
            navigate('/');
        } catch (error) {
            console.error('Error al guardar pokemon:', error);
        }
    };

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Formulario de Pokemon
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}
            >
                <TextField 
                    label="Nombre"
                    variant="outlined"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <TextField 
                    label="Tipo"
                    variant="outlined"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    required
                />
                <TextField 
                    label="Peso"
                    variant="outlined"
                    type="number"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    required
                />
                <TextField 
                    label="Altura"
                    variant="outlined"
                    type="number"
                    name="altura"
                    value={formData.altura}
                    onChange={handleChange}
                    required
                />
                <input type="file" name="picture" accept="image/*" />
                <Button variant="contained" color="primary" type="submit">
                    Guardar
                </Button>
            </Box>
         </>
    );
}