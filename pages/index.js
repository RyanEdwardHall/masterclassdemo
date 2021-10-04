import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import CourseList from "../src/components/CourseList";
import CourseData from "../src/components/CourseData";

export default function Home() {
  const [courseList, setCourseList] = useState([]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Masterclass</title>
        <meta name="description" content="Masterclass coding challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CourseData setData={setCourseList} />
        <CourseList list={courseList} />
      </main>
    </div>
  );
}
