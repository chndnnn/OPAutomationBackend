import { pool } from './../db.js';

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            status: "failed",
            message: "Email and password are required",
        });
    }

    try {
        // Check if email and password exist in the database
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        );

        if (result.rows.length > 0) {
            // User exists
            res.status(200).json({
                status: "success",
                message: "Login successful",
                user: result.rows[0], // Return user data (excluding sensitive info in real applications)
            });
        } else {
            // User not found
            res.status(401).json({
                status: "failed",
                message: "Invalid email or password",
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "failed",
            message: "Internal server error",
        });
    }
};
