import { supabase } from "../config/supabaseClient.js";

export const ItemModel = {
  // READ: Mengambil semua data + filter status
  async getAll(status) {
    let query = supabase.from("items").select("*").order("tanggalmasuk", { ascending: false });

    if (status) {
      query = query.eq("status", status);
    }

    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
  },

  // READ: Mengambil data by ID
  async getById(id) {
    const { data, error } = await supabase.from("items").select("*").eq("id", id).single();
    if (error) throw new Error(error.message);
    return data;
  },

  // CREATE: Membuat data baru
  async create(item) {
    const { error } = await supabase
      .from("items")
      .insert([item]);
    if (error) throw new Error(error.message);
    return { message: "Data sepatu berhasil ditambahkan." };
  },

  // UPDATE: Memperbarui data (status, tgl selesai)
  async update(id, updates) {
    const { error } = await supabase
      .from("items")
      .update(updates)
      .eq("id", id);
    if (error) throw new Error(error.message);
    return { message: "Status sepatu berhasil diperbarui." };
  },

  // DELETE: Menghapus data
  async remove(id) {
    const { error } = await supabase.from("items").delete().eq("id", id);
    if (error) throw new Error(error.message);
    return { message: "Data sepatu berhasil dihapus." };
  },
};