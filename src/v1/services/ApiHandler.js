import axios from "axios";

const [data, setData] = useState([]);

const ApiHandler = ({ method, resource, queryParams, ...rest }) => {
  const buildUrl = () => {
    // Construct URL with resource path and query parameters
    let url = `https://your-api-endpoint/${resource}`;
    if (queryParams) {
      const params = new URLSearchParams(queryParams);
      url += `?${params.toString()}`;
    }
    return url;
  };

  const fetchData = async () => {
    try {
      let response;

      switch (method) {
        case "GET":
          if (rest.id) {
            // Handle request for a specific item within the collection
            response = await axios.get(
              `https://your-api-endpoint/${resource}/${rest.id}`
            );
          } else {
            // Handle request for the entire collection
            response = await axios.get(buildUrl());
          }

          break;
        case "POST":
          response = await axios.post(
            `https://your-api-endpoint/${resource}`,
            data
          );
          break;
        case "PUT":
          response = await axios.put(
            `https://your-api-endpoint/${resource}/${rest.id}`,
            data
          );
          break;
        case "DELETE":
          response = await axios.delete(
            `https://your-api-endpoint/${resource}/${rest.id}`
          );
          break;
        default:
          throw new Error("Unsupported HTTP method");
      }

      return response.data.data || response.data; // Assuming data is in response.data.data or directly in response.data
    } catch (error) {
      // Handle errors here, e.g., log, display user-friendly message
      console.error("API request error:", error);
      throw error; // Re-throw to allow component to handle errors
    }
  };

  return fetchData();
};

export default ApiHandler;
