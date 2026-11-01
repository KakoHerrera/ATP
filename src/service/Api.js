const BASE_URL = "http://www.ies-azarquiel.es/paco/apiatp/"; // Ajustar a la URL real de la API

async function request(path) {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }
  return response.json();
}

// GET /singles
export function getSingles() {
  return request("/singles");
}

// GET /doubles
export function getDoubles() {
  return request("/doubles");
}





