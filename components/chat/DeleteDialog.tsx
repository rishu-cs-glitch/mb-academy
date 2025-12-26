"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React from "react";
import { AlertDialogFooter } from "../ui/alert-dialog";
import { LogOut } from "lucide-react";

interface DeleteDialogProps {
  onClickDelete?: () => void;
}

export function DeleteDialog({ onClickDelete }: DeleteDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full justify-start gap-2 rounded-sm px-2 py-2 text-sm hover:bg-[#E1E9F4]"
        >
          Delete Chat
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="text-center sm:max-w-106.25">
        <div className="mx-auto flex items-center justify-center rounded-full">
          <LogOut className="flex h-24 w-24 self-center" color="red" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-center">Delete this Chat?</DialogTitle>
        </DialogHeader>
        <DialogDescription className="font-semibold text-[#1F2937]">
          Are you sure you want to delete this chat?
        </DialogDescription>
        <div className="grid gap-4">
          <div className="space-y-2"></div>
        </div>
        <AlertDialogFooter>
          <Button variant={"outline"} className="flex flex-1 border-[#15243B]">
            Close
          </Button>
          <Button onClick={onClickDelete} className="flex flex-1 bg-[#15243B]">
            Delete Chat
          </Button>
        </AlertDialogFooter>
      </DialogContent>
    </Dialog>
  );
}
