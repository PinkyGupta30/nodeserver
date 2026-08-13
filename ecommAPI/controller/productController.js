const getProducts = (req, res) => {
    res.send("Fetching all products");
};

const addProducts = (req, res) => {
    res.send("Adding a new Product");
};

const productById = (req, res) => {
    const id = req.params.id;
    res.send(`Fetching product with ID: ${id}`);
};

module.exports = {
    getProducts,
    addProducts,
    productById
};