import styles from "../styles/courseList.module.css";
import Image from "next/image";

export default function CourseList({ list }) {
  const [courseList, setCourseList] = useState([]);

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

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id} className={styles.container}>
          <Image
            src={item.instructor_image_url}
            alt={`Picture of ${item.instructor_name}`}
          />
          <div className={styles.textContainer}>
            <div>{item.instructor_name}</div>
            <div>{item.title}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
