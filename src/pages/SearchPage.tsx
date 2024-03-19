import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultInfo from "@/components/SearchResultInfo";
import SearchResultCard from "@/components/SearchResultsCard";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;

}

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
  });
  const { results, isLoading } = useSearchRestaurants(searchState, city);

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
    }));
  }

  if (isLoading){
    <span>Loading ...</span>
  }

  if (!results?.data || !city) {
    return <span>Nothing found</span>;
  }
  
  return (
  //   <span>
  //     User searched for {city}{" "}
  //     <span>
  //     {results?.data.map((restaurant)=> (
  //       <span>
  //         found - {restaurant.restaurantName}, {restaurant.city}
  //       </span>
  //     ))}
  //   </span>
  // </span>
  <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
    <div id="cuisines-list">
      todo: Add cuisines here...
    </div>
    <div id="main-content" className="flex flex-col gap-5">
      <SearchBar 
        searchQuery={searchState.searchQuery}
        onSubmit={setSearchQuery} 
        placeHolder="Search using cuisine or name of restaurant"
        onReset={resetSearch}

      />
      <SearchResultInfo total={results.pagination.total} city={city}/>
      {results.data.map((restaurant)=>(
        <SearchResultCard restaurant={restaurant}/>
      ))}
    </div>
  </div>
  );
};

export default SearchPage;