import axios from "axios";

export function entry_getAll() {
  return axios.get("/api/entries").then(resp => resp.data);
}

/* export async function entry_getAll(){
  const resp = await axios.get('/api/entries');
  return resp.data;
} */
