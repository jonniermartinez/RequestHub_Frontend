// import { LogOut } from '..';
import { client } from '@/supabase';
import { useEffect, useState } from 'react';
import logo from '../../../public/icon.svg';
import {
  SignOut,
  User,
  Cube,
  ChartLine,
  Toolbox,
  Bell,
} from '@phosphor-icons/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function DashboardComponent() {
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
    <div className="flex bg-stone-900 h-screen">
      <div className="flex flex-col items-center justify-between w-[7%] h-screen py-5 ">
        <img src={logo} alt="" className=" w-9 p-1 bg-white rounded-lg" />
        <div className="flex flex-col gap-10">
          <Toolbox size={25} color="white"></Toolbox>
          <ChartLine size={25} color="white"></ChartLine>
          <Cube size={25} color="white"></Cube>
          <User size={25} color="white"></User>
        </div>
        <SignOut size={25} color="white"></SignOut>
        {/* <LogOut></LogOut> */}
      </div>
      {/* numbers section */}
      <div className="bg-white m-3 w-[93%] rounded-2xl p-9">
        <nav className="flex justify-between items-center mb-6">
          <p className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            Overview
          </p>
          <div className="flex items-center gap-5">
            <Bell size={20}></Bell>
            <Avatar className=" w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </nav>
        <section className="flex flex-col gap-12">
          <div className="h-52 flex gap-16">
            <div className="w-[35%] bg-white h-full">
              <p className="scroll-m-20 text-xl font-semibold tracking-tights">
                Porfolio
              </p>
              <div className="flex h-full">
                <Card
                  textPrincipal="$17.000"
                  texSecundary="total pqrs"
                  className="bg-blue-100"
                ></Card>
              </div>
            </div>
            <div className="w-[65%] bg-white h-full">
              <p className="scroll-m-20 text-xl font-semibold tracking-tights">
                Your assets
              </p>
              <div className="flex h-full gap-10">
                <Card
                  textPrincipal="1.25 BTC"
                  texSecundary="$898980"
                  className="bg-violet-200"
                ></Card>
                <Card
                  textPrincipal="1.25 BTC"
                  texSecundary="$898980"
                  className="bg-green-200"
                ></Card>
                <Card
                  textPrincipal="1.25 BTC"
                  texSecundary="$898980"
                  className="bg-yellow-200"
                ></Card>
              </div>
            </div>
          </div>
          <div className="flex h-10"></div>
        </section>
      </div>
    </div>
  );
}

interface CardProps {
  textPrincipal: string;
  texSecundary: string;
  className: string;
}

const Card = ({
  textPrincipal,
  texSecundary,
  className,
}: CardProps): JSX.Element => {
  return (
    <div className={'w-full h-full mt-5 rounded-xl p-5 ' + className}>
      <p className="scroll-m-20 text-xl font-semibold tracking-tights">
        {textPrincipal}
      </p>
      <span className="text-xs">{texSecundary}</span>
    </div>
  );
};
