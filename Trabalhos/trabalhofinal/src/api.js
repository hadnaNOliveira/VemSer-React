import axios from "axios";

const apiKey = "pADuzbQv1YdjgPRWyynlXNxwQf7gM7Ck";

const apiNY = axios.create({
  baseURL: "https://api.nytimes.com/svc/topstories/v2"
});

export { apiKey, apiNY };