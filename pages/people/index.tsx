import {
  GetServerSideProps,
  GetServerSidePropsResult,
  GetStaticProps,
} from "next";
import { useState, useEffect } from "react";

interface Person {
  name: string;
  id: string;
}
type Data = {
  lst: [Person];
};
// export const Main = (({data }: InferGetServerSidePropsType<typeof Data>) => {
export default function Main(data: Data) {
//   console.log(data);
  if (!data.lst.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {data.lst.map((person, __key) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/people");

  const people: [Person] = await res.json();
  return {
    props: { lst: people },
  };
};
