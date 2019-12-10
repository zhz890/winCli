import axios from "axios";

export default {
  async httpUserConfig (state) {
    const result = await axios.get("/api/table.json");
    console.log(result.data)
    let { roles, token } = result.data;
    return state.merge({
      "roles": roles,
      "token": token
    })
  }
}