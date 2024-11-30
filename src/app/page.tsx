import Landing from "@/components/templates/Landing";
import { filterData } from "@/utils";
import { client } from "@/utils/client";
import { fetchApiInstance } from "@/utils/fetchApiInstance";
import { QFHotel } from "@/utils/query";

async function getData(type: any) {
  const {category, destination, start_date, end_date, guest } = type
  switch (category) {
    case "hotels":
      // Fetch data for hotels
      const data = await fetchApiInstance({
        endpoint: "hotel",
      });

      if(guest || destination){
        return filterData(data, type);
        
      }

      return data
      
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

export default async function Home(props: any) {
  const data = await getData(props?.searchParams);
  return <Landing data={data} />;
}
