const BASE_URL = process.env.API_URL;

export const api = ( endpoint ) => `${BASE_URL}${endpoint}`