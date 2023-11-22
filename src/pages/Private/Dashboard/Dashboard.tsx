// import { LogOut } from '..';
import { client } from '@/supabase';
import { useEffect, useState } from 'react';
import {
  Bell,
  SquaresFour,
  List,
  Command,
  Tray,
  Kanban,
  Info,
} from '@phosphor-icons/react';
import { Li } from '@/components/Li/Li';
import { Separator } from '@/components/ui/separator';
import KanbanBoard from '@/components/Kaban/KanbanBoard';
import Inbox from '@/components/Inbox/Inbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icon } from '@/components/Icon/Icon';
import { UserKPI } from '@/components/KPI/KPI';
import Chart from '@/components/Chart/Chart';

export default function Dashboard() {
  /**
   * Hacer que cada link muestre un componente distinto
   */
  const [open, setOpen] = useState<boolean>(true);
  const [section, setSection] = useState(String);

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

  const setSectionOpen = (): JSX.Element => {
    switch (section) {
      case 'Dashboard':
        return <DashboardHome></DashboardHome>;
        break;
      case 'Kanban':
        return <KanbanBoard></KanbanBoard>;

        break;
      case 'Inbox':
        return <Inbox></Inbox>;

        break;
      default:
        return <DashboardHome></DashboardHome>;
        break;
    }
  };

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
          <ul
            className={`${
              open ? 'w-56' : ''
            } mx-auto px-3 py-4 ml-2 flex flex-col gap-3`}
          >
            <div
              onClick={() => {
                setSection('Dashboard');
              }}
            >
              <Li
                text="Dashboard"
                icon={<Command size={23} weight="bold" />}
                short={!open}
              ></Li>
            </div>
            <div
              onClick={() => {
                setSection('Kanban');
              }}
            >
              <Li
                text="Kanban"
                icon={<Kanban size={23} weight="bold"></Kanban>}
                short={!open}
              ></Li>
            </div>
            <div onClick={() => setSection('Inbox')}>
              <Li
                text="Inbox"
                number={7}
                icon={<Tray size={23} weight="bold"></Tray>}
                short={!open}
              ></Li>
            </div>
            <Separator />
            <Li
              text="Help"
              short={!open}
              icon={<Info size={23} weight="bold"></Info>}
            ></Li>
          </ul>
        </div>
        <div className="bg-[#f9fafb] p-8 h-full w-full">
          <div className=" bg-white shadow-sm border h-full rounded-md p-5 ">
            {setSectionOpen()}
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
        <div className="bg-white w-3/5 rounded-md border">
          <Chart></Chart>
        </div>
        <div className="bg-white w-2/5 rounded-md border">{/* users */}</div>
      </div>
    </div>
  );
};
