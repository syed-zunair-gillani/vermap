import Landing from "@/components/templates/Landing";
import { fetchApiInstance } from "@/utils/fetchApiInstance";

async function getData(type: any) {
  switch (type) {
    case "hotels":
      // Fetch data for hotels
      return await fetchApiInstance({
        endpoint: "hotel",
      });

    case "flight":
      // Fetch data for flights
      return await fetchApiInstance({
        endpoint: "flight",
      });

    case "car":
      // Fetch data for car rentals
      return await fetchApiInstance({
        endpoint: "car",
      });

    case "tour":
      // Fetch data for tours
      return await fetchApiInstance({
        endpoint: "tour",
      });

    default:
      // Handle cases where category doesn't match
      console.error("Unknown category:", type);
      return null;
  }
}

export default async function Home({ searchParams }: any) {
  const data = await getData(searchParams?.category);
  return <Landing data={data} />;
}
