function globalError(err, req, res, next) {
    res.status(500).json({ msg: err.message });
};

export { globalError }