"use client";

import { useState, useEffect, useRef } from "react";
import Cropper from "react-easy-crop";
import { RotateCcw, RotateCw, ZoomIn, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCroppedImg } from "@/lib/cropImage";

const allowedFormats = ["image/png", "image/jpg", "image/jpeg", "image/webp"];

interface Props {
  value: string | null;
  onChange: (img: string) => void;
}

export default function ImageCropper({ value, onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(value);
  const [cropMode, setCropMode] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  useEffect(() => {
    setImagePreview(value);
  }, [value]);

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const onSelectImage = (e: any) => {
    const file = e.target.files?.[0];
    if (!file || !allowedFormats.includes(file.type)) return;

    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
    setCropMode(true);
  };

  const handleCropDone = async () => {
    if (!imagePreview || !croppedAreaPixels) return;

    const img = await getCroppedImg(imagePreview, croppedAreaPixels, rotation);
    onChange(img);
    setCropMode(false);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Avatar Preview */}
      {!cropMode && (
        <>
          <div className="w-28 h-28 rounded-full border-2 border-dashed flex items-center justify-center bg-neutral-50 overflow-hidden">
            {imagePreview ? (
              <img
                src={imagePreview}
                className="w-full h-full rounded-full object-cover"
                alt="Profile"
              />
            ) : (
              <div className="flex flex-col items-center text-xs text-neutral-500">
                <Camera size={18} />
                No Photo
              </div>
            )}
          </div>

          {/* Change Photo Button */}
          <Button type="button" variant="outline" size="sm" onClick={openFilePicker}>
            Change Photo
          </Button>

          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept="image/png,image/jpg,image/jpeg,image/webp"
            onChange={onSelectImage}
          />
        </>
      )}

      {/* Crop Mode */}
      {cropMode && imagePreview && (
        <div className="w-full mt-4">
          <div className="relative h-[260px] bg-gray-200 rounded-lg overflow-hidden">
            <Cropper
              image={imagePreview}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              aspect={1}
              cropShape="round"
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onRotationChange={setRotation}
              onCropComplete={(_, pixels) => setCroppedAreaPixels(pixels)}
              showGrid={false}
            />
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center gap-3">
            <ZoomIn size={18} />
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(+e.target.value)}
              className="flex-1"
            />
            <button onClick={() => setRotation((r) => r + 90)}>
              <RotateCw size={18} />
            </button>
            <button onClick={() => setRotation(0)}>
              <RotateCcw size={18} />
            </button>
          </div>

          <Button onClick={handleCropDone} className="mt-4 w-full">
            Save Photo
          </Button>
        </div>
      )}
    </div>
  );
}
