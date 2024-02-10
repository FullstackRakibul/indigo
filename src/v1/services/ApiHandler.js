import axios from "axios";
import { BASE_URL } from "./apiConfig";

const ApiHandler = ({ method, resource, queryParams, ...rest }) => {
  const buildUrl = () => {
    // Construct URL with resource path and query parameters
    let url = `${BASE_URL}/${resource}`;
    if (queryParams) {
      const params = new URLSearchParams(queryParams);
      url += `?${params.toString()}`;
    }
    if (rest.length) {
      url += "/" + rest.join("/");
    }
    return url;
  };

  const fetchData = async () => {
    try {
      //let response;

      const url = buildUrl(resource, rest.id); // Use buildUrl() consistently
      const response = await axios({
        method,
        url,
        params: queryParams,
      });

      switch (method) {
        case "GET":
          if (rest.id) {
            // Handle request for a specific item within the collection
            response = await axios.get(`${BASE_URL}/${resource}/${rest.id}`);
          } else {
            // Handle request for the entire collection
            response = await axios.get(buildUrl());
          }

          //response = await axios.get(buildUrl(resource, rest.id));
          break;
        case "POST":
          response = await axios.post(`${BASE_URL}/${resource}`, data);
          break;
        case "PUT":
          response = await axios.put(
            `${BASE_URL}/${resource}/${rest.id}`,
            data
          );
          break;
        case "DELETE":
          response = await axios.delete(`${BASE_URL}/${resource}/${rest.id}`);
          break;
        default:
          throw new Error("Unsupported HTTP method");
      }

      return response.data.data || response.data; // Assuming data is in response.data.data or directly in response.data
    } catch (error) {
      // Handle errors here, e.g., log, display user-friendly message
      console.error("API request error:", error);
      throw new Error("API request failed");
      //throw error; // Re-throw to allow component to handle errors
    }
  };

  return fetchData();
};

export default ApiHandler;
