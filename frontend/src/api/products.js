import api from './api';

export function fetchProducts() {
    return api.get('/api/products');
}
export function fetchProduct(id) {
    return api.get(`/api/products/${id}`);
}
export function createProduct(data, token) {
    return api.post('/api/products', data, {
        headers: { Authorization: `Bearer ${token}` }
    });
}