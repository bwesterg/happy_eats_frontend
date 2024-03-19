import { SearchState } from "@/pages/SearchPage";
import { RestaurantSearchResponse } from "@/types";
// import { SearchState } from "@/pages/SearchPage";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );
    if (!response.ok){
      console.log("dogs", response)
      throw new Error("Failed to get any restaurants");
    }
    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["serachRestaurants", searchState],
    createSearchRequest,
    { enabled: !!city }
  );

  return {
    results,
    isLoading,
  }
};