import axios from "axios";
export default function CourseData({ setData }) {
  axios
    .get(
      "https://mc-dev-5.herokuapp.com/jsonapi/v1/courses?email=hall.ryan@gmail.com"
    )
    .then(function (response) {
      // handle success
      setData(response.data);
    });

  return null;
}
