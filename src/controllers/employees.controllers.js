import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  try {
    const [row] = await pool.query(
      "INSERT INTO employee (name,salary) VALUES(?,?)",
      [name, salary]
    );

    res.send({
      id: row.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const modifyEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,name) WHERE id = ?",
      [name, salary, id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "employee not found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "employee not found",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      req.params.id,
    ]);
    if (row.length <= 0)
      return res.status(404).json({
        message: "employee not found",
      });
    res.json(row[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes wrong",
    });
  }
};
