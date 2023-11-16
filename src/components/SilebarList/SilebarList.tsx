import { Li } from '@/components/Li/Li';
import { Command, Tray, Kanban, Info } from '@phosphor-icons/react';
import { Separator } from '@/components/ui/separator';

interface ListProps {
  open: boolean;
}
export const SilebarList = ({ open }: ListProps): JSX.Element => {
  return (
    <ul
      className={`${
        open ? 'w-56' : ''
      } mx-auto px-3 py-4 ml-2 flex flex-col gap-3`}
    >
      <Li
        text="Dashboard"
        icon={<Command size={23} weight="bold" />}
        short={!open}
      ></Li>
      <Li
        text="Kanban"
        icon={<Kanban size={23} weight="bold"></Kanban>}
        short={!open}
      ></Li>
      <Li
        text="Inbox"
        number={3}
        icon={<Tray size={23} weight="bold"></Tray>}
        short={!open}
      ></Li>
      <Separator />
      <Li
        text="Help"
        short={!open}
        icon={<Info size={23} weight="bold"></Info>}
      ></Li>
    </ul>
  );
};
