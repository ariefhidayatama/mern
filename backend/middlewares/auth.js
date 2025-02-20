import express from "express";
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Unauthenticated' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({message:'Invalid token'});
        req.userId = decoded.indexOf;
        next();
    });
}

export default verifyToken;

// module.exports = verifyToken;