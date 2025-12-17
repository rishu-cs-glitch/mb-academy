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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ReportDialogProps {
  onClickReport?: () => void;
}

export function ReportDialog({ onClickReport }: ReportDialogProps) {
  const [reason, setReason] = React.useState("");
  const [notes, setNotes] = React.useState("");

  return (
    <Dialog>
      <form onSubmit={onClickReport}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="flex w-full justify-start gap-2 rounded-sm px-2 py-2 text-sm hover:bg-[#E1E9F4]"
          >
            Report
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Report</DialogTitle>
          </DialogHeader>
          <DialogDescription className="font-semibold text-[#1F2937]">
            Reason for reporting?
          </DialogDescription>
          <div className="grid gap-4">
            <RadioGroup value={reason} onValueChange={setReason} className="space-y-1">
              {[
                "Spam Content",
                "Harassment/Abuse",
                "Inappropriate Content",
                "Misinformation",
                "Other",
              ].map((item) => (
                <div className="flex items-center space-x-3" key={item}>
                  <RadioGroupItem className="border-2 border-[#15243B]" value={item} id={item} />
                  <Label htmlFor={item} className="text-sm">
                    {item}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-sm font-medium">
                Notes <span className="text-black/15">(Optional)</span>
              </Label>
              <Textarea
                id="notes"
                placeholder="Give us more details"
                className="min-h-[100px]"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
          <AlertDialogFooter>
            <Button type="submit" className="flex flex-1 bg-[#15243B]">
              Report
            </Button>
          </AlertDialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
