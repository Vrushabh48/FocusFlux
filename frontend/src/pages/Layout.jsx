import Addtask from "../components/Addtaskform";
import Header from "../components/Header";
function Layout() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="grid grid-cols-3 pt-14 gap-5">
        <div className="grid col-span-2 shadow-lg">
          <h1 className="text-3xl font-semibold">Tasks</h1>
          <ul className="gap-4">
            <li className=""><span>Task1</span> <span>Deadline</span></li>
            <li><span>Task2</span> <span>Deadline</span></li>
            <li><span>Task3</span> <span>Deadline</span></li>
          </ul>
        </div>
        <div className="...">
            <Addtask />
        </div>
      </div>
    </>
  );
}

export default Layout;
