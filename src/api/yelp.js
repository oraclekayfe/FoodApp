import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer fswEJ0g5XWKW_DCbz9Li_RIRtNuHYTqBug6PuCLSsYG01yL51Bw17ShsZNW-TPX9XgxPboJsncZaoY0-b3F_Wz-J0bn0BZB5rcU8XZ598QDEZDnUj6bMk-5D62HuX3Yx",
  },
});
