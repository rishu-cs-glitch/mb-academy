"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React from "react";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";
import { CircleAlert, type LucideIcon } from "lucide-react";

interface CustomDialogProps {
  triggerText?: string;
  title?: string;
  description?: string;
  icon?: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
}

export function CustomDialog({
  triggerText = "Open Dialog",
  title = "Are you sure?",
  description = "Please confirm your action.",
  icon: Icon = CircleAlert,
  iconColor = "red",
  iconBg = "#F3F4F6",
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm,
}: CustomDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-full justify-start gap-2 rounded-sm px-2 py-2 text-sm hover:bg-[#E1E9F4]"
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="text-center sm:max-w-[450px]">
        {Icon && (
          <div
            className="mx-auto flex items-center justify-center rounded-full p-4"
            style={{ backgroundColor: iconBg }}
          >
            <Icon className="h-18 w-18 rotate-y-180" color={iconColor} />
          </div>
        )}
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="font-semibold text-[#1F2937]">
          {description}
        </DialogDescription>
        <AlertDialogFooter className="mt-4 flex gap-3">
          <DialogClose asChild>
            <Button variant="outline" className="flex flex-1 border-[#15243B]">
              {cancelText}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={onConfirm} className="flex flex-1 bg-[#15243B] text-white">
              {confirmText}
            </Button>
          </DialogClose>
        </AlertDialogFooter>
      </DialogContent>
    </Dialog>
  );
}
