import axios from "axios";
const TOURLOCATION_BASE_REST_API_URL = "http://localhost:8080/tourlocation";
class TourLocationService {
  getAllToursByLocationId(id) {
    return axios.get(TOURLOCATION_BASE_REST_API_URL + "/gettoursbylocation/" + id);
  }
}
export default new TourLocationService();
