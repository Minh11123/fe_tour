import axios from "axios";
const TOUR_BASE_REST_API_URL = "http://localhost:8080/tour";
class TourService {
  getAllTour() {
    return axios.get(TOUR_BASE_REST_API_URL + "/getAllTourPageable");
  }
  deleteTour(tourId) {
    return axios.delete(TOUR_BASE_REST_API_URL + "/delete/" + tourId);
  }
  createTour(tour) {
    return axios.post(TOUR_BASE_REST_API_URL + "/create", tour);
  }
  getTourById(tourId) {
    return axios.get(TOUR_BASE_REST_API_URL + "/" + tourId);
  }
  updateTour(tourId, tour) {
    return axios.put(TOUR_BASE_REST_API_URL + "/update/" + tourId, tour);
  }
}
export default new TourService();
