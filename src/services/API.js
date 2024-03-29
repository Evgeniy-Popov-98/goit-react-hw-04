import axios from "axios";

const ACCESS_KEY = "uRbjthHwB56Dd64vCktCP15eYSWhxayYeNHDzHA5aBQ";

export async function getImages(search) {
  const BASE_URL = "https://api.unsplash.com/";
  const END_POINT = `${search}/photos/`;
  const url = `${BASE_URL}${END_POINT}`;
  const params = {
    headers: {
      Authorization: `${ACCESS_KEY}`,
    },
  };
  const res = await axios.get(url, params);
  if (res.data.length === 0) {
    throw new Error("Error");
  } else {
    return res.data;
  }
}
