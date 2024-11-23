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

export const insertDatatoDb = async(req,res)=>{
  const data = req.body;
  const client = await pool.connect();
  let count = 0
  try {
    await client.query("BEGIN")
    for (const row of data) {
      // Assuming your table schema matches the Excel headers
      const {
        invoice_number,
        batch_id,
        invoice_received_date,
        invoice_status,
        type,
        invoice_posted_date,
        avg_days,
      } = row;

      await client.query(
        `INSERT INTO invoice_details (invoice_number, batch_id, invoice_received_date, invoice_status, type, invoice_posted_date, avg_days) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          invoice_number,
          batch_id,
          invoice_received_date,
          invoice_status,
          type,
          invoice_posted_date,
          avg_days,
        ]
      );
      count++
    }
    await client.query("COMMIT");
    res.status(200).send("Data inserted successfully!");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error inserting data:", error);
    console.log(count)
    res.status(500).json({
      status:"failed",
      lineno:count,
      message: error
    })
  }finally {
    client.release(); // Release the client back to the pool
  }
}