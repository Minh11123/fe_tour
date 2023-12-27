import axios from "axios";
const LOCATION_BASE_REST_API_URL = "http://localhost:8080/location";
class LocationService {

  createLocation(location){
    return axios.post(LOCATION_BASE_REST_API_URL + "/addlocation", location);
  }
  getAllLocation() {
    return axios.get(LOCATION_BASE_REST_API_URL + "/getlocationpage");
  }
  deleteLocation(locationId) {
    return axios.delete(
      LOCATION_BASE_REST_API_URL + "/deletelocation/" + locationId
    );
  }
  getById(id) {
    return axios.get(LOCATION_BASE_REST_API_URL + "/getlocationbyid/" + id);
  }
  update(id,location) {
    return axios.put(LOCATION_BASE_REST_API_URL + "/updatelocation/" + id, location);
  }
}
export default new LocationService();
