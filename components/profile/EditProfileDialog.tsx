"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ImageCropper from "./ImageCropper";
import { TimeZoneSelect } from "./TimeZoneSelect";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EditProfileDialog({ open, onClose }: Props) {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [name, setName] = useState("John Smith");
  const [timezone, setTimezone] = useState("GMT +5:00");
  const [bio, setBio] = useState("");

  const saveProfile = () => {
    // console.log({ avatar, name, timezone, bio });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg rounded-xl bg-white">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        {/* Avatar */}
        <ImageCropper value={avatar} onChange={setAvatar} />

        {/* Form */}
        <div className="mt-5 space-y-3">
          <div>
            <label className="text-xs text-neutral-500">Name</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label className="text-xs text-neutral-500">Time Zone</label>
            {/* <Input value={timezone} onChange={(e) => setTimezone(e.target.value)} /> */}
            <TimeZoneSelect value={timezone} onChange={setTimezone} />
          </div>

          <div>
            <label className="text-xs text-neutral-500">Bio</label>
            <textarea
              className="w-full h-32 border rounded-md p-2 text-sm focus:outline-none focus:ring-1"
              placeholder="Tell something about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={saveProfile}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
