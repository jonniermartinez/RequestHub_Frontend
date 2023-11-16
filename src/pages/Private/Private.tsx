import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
//import LogOut from "@/components/LogOut/LogOut";
function Private() {
  return (
    <>
      {/* <LogOut /> */}

      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}
export default Private;
