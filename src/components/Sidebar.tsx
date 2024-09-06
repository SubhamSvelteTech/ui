"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="grid md:grid-cols-2 gap-2 md:hidden">
      <Sheet key={"right"}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetClose asChild>
          <SheetContent side={"right"}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when done.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              {/* <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </SheetClose>
      </Sheet>
    </div>
  );
}
