const getAllProducts = () =>
{
    return "Fetching All Products";
};

const getProductById = (id) => {
    return `Fetching product with ID: ${id}`;
};

const addProduct = () =>
{
    return "Adding a new  product";
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
};