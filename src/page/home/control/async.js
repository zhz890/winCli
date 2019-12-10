
// 异步操作方法 
import { fromJS } from "immutable";
import axios from "axios";

export default {
  async httpTable (state) {
    let result = await axios.get("/api/table.json");
    return state.merge({
      "name": result.data.name,
      "data": fromJS(result.data.data)
    })
  }
}