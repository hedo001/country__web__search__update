import axios from "axios";
const request = axios.create({ baseURL: "https://restcountries.com/v3.1/" });
export default request;
