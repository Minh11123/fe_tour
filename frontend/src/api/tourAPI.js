import api from "./api";

const getTourList = async () => {
  const tour = await api({
    method: "GET",
    url: "/tour/getAllTourPageable",
  });
  return tour;
};

export default getTourList;
