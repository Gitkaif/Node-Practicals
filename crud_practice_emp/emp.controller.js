const empModel = require("./emp.model");

const getEmp = async (req, res) => {
  try {
    const emp = await empModel.find({});
    if (emp != null) {
      res.status(200).json({
        message: "emp fetched",
        data: emp,
      });
    }

    return res.status(404).json({ message: "emp not found" });
  } catch (error) {
    return res.json({ message: error });
  }
};

const createEmp = async (req, res) => {
  try {
    const newEmp = await empModel.create(req.body);
    res.status(201).json({
      message: "emp created",
      data: newEmp,
    });
  } catch (error) {
    return res.json({ message: error });
  }
};

const getSingleEmp = async (req, res) => {
  try {
    const emp = await empModel.findById(req.params.id);
    if (emp) {
      res.status(200).json({
        message: "emp fetched",
        data: emp,
      });
    }

    return res.status(404).json({ message: "emp not found" });
  } catch (error) {
    return res.json({ message: error });
  }
};

const deleteEmp = async (req, res) => {
  try {
    const emp = await empModel.findByIdAndDelete(req.params.id);
    if (emp) {
      res.status(200).json({
        message: "emp deleted",
        data: emp,
      });
    }

    return res.status(404).json({ message: "emp not found" });
  } catch (error) {
    return res.json({ message: error });
  }
};

const updateEmp = async (req, res) => {
  try {
    const { name, age } = req.body;
    const { id } = req.params;
    const emp = await empModel.findByIdAndUpdate(
      id,
      { name, age },
      { new: true, runvalidators: true },
    );

    if (emp != null) {
      res.status(200).json({ message: "emp updated." });
    }

    return res.status(404).json({ message: "emp not found" });
  } catch (error) {
    return res.json({ message: error });
  }
};

module.exports = { getEmp, getSingleEmp, deleteEmp, updateEmp, createEmp };
