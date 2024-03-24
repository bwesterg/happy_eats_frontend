import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl md:text-center text-white font-bold tracking-tight">
          HappyEats.com
        </span>
        <span className="text-white font-bold tracking-tight flex lg:gap-4">
          <div className="grid md:grid-cols-2 text-center max-md:mt-3">
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
            <Link to={"/terms-and-conditions"}>Terms & Conditions</Link>
          </div>

        </span>
      </div>
    </div>
  )
}

export default Footer;