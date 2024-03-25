import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png"; 
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    })
  }
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-blue-600">
          Food will make you happy.
        </h1>
        <span className="text-xl text-gray-500 font-thin">Happiness is a click away</span>
        <SearchBar placeHolder="Search Restaurants in Boulder and Denver, Colorado" onSubmit={handleSearchSubmit}/>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="hover:cursor-pointer">
          <img src={landingImage} />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter text-blue-600">
            Order happiness even faster!
          </span>
          <Link to={"/"} className="hover:cursor-pointer">
            <span className="text-gray-500 font-thin">
              Discounts available on our app
            </span>
            <img src={appDownloadImage} className="mt-3"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;