import Constants from "../Constants";
import axios from "axios";
export default async function CourseData({ setData }) {
  // axios
  //   .get(
  //     "https://mc-dev-5.herokuapp.com/jsonapi/v1/courses?email=hall.ryan@gmail.com"
  //   )
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   });

  // const response = await fetch(getListUri);
  // const data = await response;
  // setData(data);

  return null;
}

export async function getStaticProps(context) {
  const res = await fetch(
    "https://mc-dev-5.herokuapp.com/jsonapi/v1/courses?email=hall.ryan@gmail.com"
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
