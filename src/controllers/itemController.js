import { ItemModel } from "../models/itemModel.js";

export const ItemController = {
  async getAllItems(req, res) {
    try {
      const { status } = req.query; // Menangkap filter status dari URL
      const items = await ItemModel.getAll(status);
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getItemById(req, res) {
    try {
      const item = await ItemModel.getById(req.params.id);
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ error: "Data tidak ditemukan" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async createItem(req, res) {
    try {
      const response = await ItemModel.create(req.body);
      res.status(201).json(response);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async updateItem(req, res) {
    try {
      const response = await ItemModel.update(req.params.id, req.body);
      res.json(response);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async deleteItem(req, res) {
    try {
      const response = await ItemModel.remove(req.params.id);
      res.json(response);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};