// import { LogOut } from '..';
import { client } from '@/supabase';
import { useEffect, useState } from 'react';
import { Bell, SquaresFour, List } from '@phosphor-icons/react';
import { SilebarList } from '@/components/SilebarList/SilebarList';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icon } from '@/components/Icon/Icon';
import { UserKPI } from '@/components/KPI/KPI';
import { Route, Routes } from 'react-router-dom';

export default function Dashboard() {
  const [open, setOpen] = useState<boolean>(true);

  const [id, setId] = useState(String);
  useEffect(() => {
    client.auth
      .getSession()
      .then((data) => {
        if (data.data.session != null) {
          setId(data.data.session.user.id);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(id);
  return (
    <div className="h-screen">
      <nav className="border-b-[1px] border-black/5 flex justify-between items-center h-14 p-5">
        <div className="flex items-center gap-5">
          <Icon>
            <List
              size={20}
              weight="bold"
              onClick={() => {
                setOpen(!open);
              }}
            ></List>
          </Icon>
          <p className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            RequestHub
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Icon>
            <Bell size={20} weight="bold" />
          </Icon>
          <Icon>
            <SquaresFour size={20} weight="bold" />
          </Icon>
          <Avatar className=" w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <div className="custom-h flex">
        <div className="  border-black/5 h-full w-fit border-r-[1px] ">
          <SilebarList open={open}></SilebarList>
        </div>
        <div className="bg-[#f9fafb] p-8 h-full w-full">
          <div className=" bg-white shadow-sm border h-full rounded-md p-5 ">
            {/* Paginas  */}
            <Routes>
              <Route path="/" element={<DashboardHome></DashboardHome>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

const DashboardHome = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-16">
      <UserKPI></UserKPI>
      <div className="  flex w-full h-full gap-10 ">
        <div className="bg-white w-3/5 rounded-md border">{/* chart */}</div>
        <div className="bg-white w-2/5 rounded-md border">{/* users */}</div>
      </div>
    </div>
  );
};
