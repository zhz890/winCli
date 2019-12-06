import axios from "axios";

export default {
  async httpRole (state) {
    const result = await axios.get("/api/table.json");
    let { roles } = result.data;
    return state.merge({
      "roles": roles
    })
  }
}