import axios from "axios";

const ACCESS_KEY = "uRbjthHwB56Dd64vCktCP15eYSWhxayYeNHDzHA5aBQ";

export async function getImages(search) {
  const url = "https://api.unsplash.com/search/photos";
  const params = {
    client_id: `${ACCESS_KEY}`,
    page: 1,
    query: `${search}`,
  };
  const res = await axios.get(url, { params });
  if (res.data.length === 0) {
    throw new Error("Error");
  } else {
    return res.data;
  }
}
