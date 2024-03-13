import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png"; 

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-blue-600">
          Food will make you happy.
        </h1>
        <span className="text-xl">Happiness is a click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter text-blue-600">
            Order happiness even faster!
          </span>
          <span className="text-blue-600">
            Order happiness even faster!
          </span>
          <img src={appDownloadImage}/>
        </div>
      </div>
    </div>
  )
}

export default HomePage;