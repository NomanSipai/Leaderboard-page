import SideBar from "./SideBar";
import Header from "./Header";
import Card from "./Card";
import DataTable from "./DataTable";
const LeaderBoards = () => {
  return (
    <div className="bg-gray-100">
      <SideBar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <Header />
        <div className="px-6 pt-6 2xl:container">
          <Card />
          <div className="mt-5">
            <DataTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoards;
