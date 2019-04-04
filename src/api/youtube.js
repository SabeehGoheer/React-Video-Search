import axios from "axios";

const KEY = "AIzaSyBnyTs-ZLA5deDmctpaUySNH7CBPE_mLBo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
