exports.journal = (req, res) => {
    try {
        // Save the journal into DB
        res.json({ message: 'Successfully Created '})
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};