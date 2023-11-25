import { Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
//import LogOut from "@/components/LogOut/LogOut";
import RoutesNotFound from '@/utilities/RoutesNotFound';
function Private() {
  return (
    <>
      {/* <LogOut /> */}

      <RoutesNotFound>
        <Route path="/" element={<Dashboard />} />
      </RoutesNotFound>
    </>
  );
}
export default Private;
