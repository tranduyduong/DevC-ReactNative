import axios from "axios";

const fetchData = (a, b) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://convert-rate.test.ymeet.me/convert?a=usd&b=vnd`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
export default fetchData;
