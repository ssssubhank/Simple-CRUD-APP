const express = require("express");
const Form = require("../Mongo/form.model");

const getFormbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findById(id);
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const InsertData = async (req, res) => {
  try {
    const form = Form.create(req.body); // Create a new instance

    res.status(200).json(form);
  } catch (error) {
    console.log(error);
  }
};

const UpdatebyId = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findByIdAndUpdate(id, req.body);
    if (!form) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    const updatedform = await Form.findById(id);
    res.status(200).json(updatedform);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const DeletebyId = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findByI(id, req.body);
    if (!form) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getFormbyId, InsertData, UpdatebyId, DeletebyId };
