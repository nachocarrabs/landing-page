export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '2d80913482msh8d31d73c903c267p15db63jsnd8443ff5b127',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { 
    headers: headers,
    });
    const result = await response.json();
    return result
    
}