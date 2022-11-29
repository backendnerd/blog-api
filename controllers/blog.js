exports.getBlog = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: { title: "Hello World", body: "This is a sample blog body..." },
    });
};
