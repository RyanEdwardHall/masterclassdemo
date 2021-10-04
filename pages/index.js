import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import CourseData from "../src/components/CourseData";
import CourseList from "../src/components/CourseData";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Masterclass</title>
        <meta name="description" content="Masterclass coding challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <CourseData setData={setCourseList} /> */}
        <CourseList />
      </main>
    </div>
  );
}
