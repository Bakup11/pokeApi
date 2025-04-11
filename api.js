async function conexionLista() {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data.results;
    } catch (error) {
        console.error('Error al obtener la lista de Pokémon:', error);
        return [];
    }
}