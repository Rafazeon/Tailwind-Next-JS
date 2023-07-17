import { ComponentType } from "react";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: any;
}

export default function MenuItem({ title, address, Icon }: MenuItemProps) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <Icon className="text-2x1 sm:hidden" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
