// 异步操作方法 




import axios from "axios";

export default {
  async httpRole (state) {
    const result = await axios.get("/api/table.json");
    let { roles } = result.data;
    return state.merge({
      "roles": roles
    })
  },


  async httpTable (state) {
    let result = await axios.get("/api/table.json")
    return state.merge({
      "name": result.data.name,
      "data": fromJS(result.data.data)
    })
  }
}