import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export function DropDownMenu({ children }: React.PropsWithChildren) {
  return (
    <Menu>
      <MenuButton className="">
        <span className="">{children}</span>
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-32 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            Edit
          </button>
        </MenuItem>
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            Duplicate
          </button>
        </MenuItem>
        <div className="my-1 h-px bg-white/5" />
        <MenuItem>
          <button
            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            Contact
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
