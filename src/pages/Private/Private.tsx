import { Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
//import LogOut from "@/components/LogOut/LogOut";
import RoutesNotFound from '@/utilities/RoutesNotFound';
import Home from './Home/Home';
function Private() {
  return (
    <>
      {/* <LogOut /> */}

      <RoutesNotFound>
        <Route path="/" element={<Navigate to="ds" />} />
        <Route path="ds" element={<Dashboard />} />
        <Route path="home" element={<Home />} />
      </RoutesNotFound>
    </>
  );
}
export default Private;
