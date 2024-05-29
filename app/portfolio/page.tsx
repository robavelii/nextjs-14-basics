import Link from "next/link";
import NavigationMenu from "../../components/Navbar";
import UserProfile from "../../components/UserProfile";
import OtherInfo from "../../components/OtherInfo";

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-yellow-500 min-h-screen">
      <NavigationMenu />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UserProfile />
          <OtherInfo />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
