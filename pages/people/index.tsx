import {
  GetServerSideProps,
  GetServerSidePropsResult,
  GetStaticProps,
} from "next";
import { useState, useEffect } from "react";
import useSWR from "swr";

interface Person {
  name: string;
  id: string;
}
type Data = {
  lst: Person[];
};
// export const Main = (({data }: InferGetServerSidePropsType<typeof Data>) => {

const fetcher = (url) => fetch(url).then((r) => r.json() as Promise<Person[]>);
// const fetcher : ((str : string ) => Person[] )= (str) => [];
// const fetcher = async (
//     input: RequestInfo,
//     init: RequestInit,
//     ...args: any[]
//   ) => {
//     const res = await fetch(input, init);
//     return res.json();
//   };

export default function Main() {
  //   const { people, error } = useSWR("/api/people", fetcher,{
  //   revalidateOnMount: true,
  //   });

  const [people, setPeople] = useState([]);
  console.log("" + people);
  useEffect(() => {
    fetch("/api/people")
      .then<Person[]>((r) => r.json())
      .then((data) => setPeople(data));
  }, []);
  console.log("people: " + people);

  //   if (error) return <div>failed to load</div>;
  if (!people || people.length === 0) return <div>loading...</div>;

  return (
    <div>
      <ul>
        {people.map((person, __key) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch("http://localhost:3000/api/people");

//   const people: [Person] = await res.json();
//   return {
//     props: { lst: people },
//   };
// };
