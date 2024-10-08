import { useState } from 'react';
import {
  Bell,
  SquaresFour,
  List,
  Command,
  Tray,
  Kanban,
  SignOut,
  Info,
} from '@phosphor-icons/react';
import { Li } from '@/components/Li/Li';
import { Separator } from '@/components/ui/separator';
import Inbox from '@/components/Inbox/Inbox';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icon } from '@/components/Icon/Icon';
import { UserKPI } from '@/components/KPI/KPI';
import Chart from '@/components/Chart/Chart';
import CardShareLink from '@/components/CardSharLink/CardShareLink';
import KanbanBoard from '@/components/Kaban/KanbanBoard';
import { LogOut } from '@/components';

export default function Dashboard() {
  /**
   * Hacer que cada link muestre un componente distinto
   */
  const [open, setOpen] = useState<boolean>(true);
  const [section, setSection] = useState(String);

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
            <a
              href="https://twitter.com/jonniermartinez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Li
                text="Help"
                short={!open}
                icon={<Info size={23} weight="bold"></Info>}
              ></Li>
            </a>
            <LogOut>
              <Li
                text="LogOut"
                short={!open}
                icon={<SignOut size={23} weight="bold"></SignOut>}
              ></Li>
            </LogOut>
          </ul>
        </div>
        <div className="bg-[#f9fafb] p-5 h-full w-full">{setSectionOpen()}</div>
      </div>
    </div>
  );
}

const DashboardHome = (): JSX.Element => {
  return (
    <div className=" bg-white shadow-sm border h-full rounded-md p-5 ">
      <div className="flex flex-col gap-16">
        <UserKPI></UserKPI>
        <div className="  flex w-full h-full gap-10 ">
          <div className="bg-white w-3/5 ">
            <Chart></Chart>
          </div>
          <div className="bg-white w-2/5 ">
            <CardShareLink></CardShareLink>
          </div>
        </div>
      </div>
    </div>
  );
};
