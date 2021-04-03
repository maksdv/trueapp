export const getCountries = async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    if(!response.ok) throw new Error('Error while fetching countrys');
    return response.json();
}