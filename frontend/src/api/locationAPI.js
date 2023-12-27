import api from "./api";

const getLocationList = async () => {
  const location = await api({
    method: "GET",
    url: "/location/getlocationpage",
  });
  return location;
};

export default getLocationList;
