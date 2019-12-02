import axios from "axios"
import { fromJS } from "immutable";
export default {
  async getTable (state) {
    let result = await axios.get("/api/table.json")
    console.log(result)
    return state.merge({
      "name": result.data.name,
      "data": fromJS(result.data.data)
    })
  }
}