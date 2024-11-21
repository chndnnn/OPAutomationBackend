import {pool} from './../db.js'

export const getAllData = async(req,res)=>{
    try {
        const result = await pool.query('SELECT * FROM win_user_details');
        res.status(200).json(result.rows);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
}