/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Cropper from "react-easy-crop";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { RotateCcw, RotateCw, ZoomIn } from "lucide-react";
import { getCroppedImg } from "@/lib/cropImage";
import { useOnboarding } from "../OnboardingContext";

const allowedFormats = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
export default function SetupProfilePage() {
  const router = useRouter();
  const { setConfig } = useOnboarding();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const [cropMode, setCropMode] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [error, setError] = useState("");
  const onCropComplete = (_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleSelectImage = (e: any) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // ❌ Invalid Format
    if (!allowedFormats.includes(file.type)) {
      setError("Please upload only PNG, JPG, JPEG or WEBP images.");
      e.target.value = ""; // ❗ Prevent selecting invalid file
      return;
    }

    // ✔ Valid Image
    setError("");
    const preview = URL.createObjectURL(file);
    setImagePreview(preview);
    setCropMode(true);

    // const file = e.target.files?.[0];
    // if (file) {
    //   const preview = URL.createObjectURL(file);
    //   setImagePreview(preview);
    //   setCropMode(true);
    // }
  };

  const handleCropDone = async () => {
    if (!imagePreview || !croppedAreaPixels) return;
    const img = await getCroppedImg(imagePreview, croppedAreaPixels, rotation);
    setCroppedImage(img);
    setCropMode(false);
  };

  const resetCrop = () => {
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
  };

  const handleContinue = () => {
    ((document.cookie = `token=123456; path=/;`), router.replace("/tutorial"));
  };

  // const router = useRouter();

  useEffect(() => {
    setConfig({
      skipLabel: "Skip",
      onSkip: () => {
        ((document.cookie = `token=123456; path=/;`), router.replace("/tutorial"));
      },
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col px-4 py-0 bg-[#F7F4EC]">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F1828]">Set Up Your Profile</h2>
        <p className="text-lg text-neutral-600 mt-2">
          Upload a photo and complete your profile to get started.
        </p>
      </div>

      {/* Main White Box */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-full md:w-[600px] mx-auto">
        {/* ======= UPLOAD BUTTON (IF NO IMAGE) ======= */}
        {!imagePreview && !croppedImage && !cropMode && (
          <label className="cursor-pointer block mx-auto">
            <div className="w-32 h-32 mx-auto rounded-full border-2 border-dashed border-blue-900 flex items-center justify-center">
              <span className="text-sm text-blue-300">Upload Photo</span>
            </div>
            <input type="file" className="hidden" onChange={handleSelectImage} />
          </label>
        )}

        {/* ======= CROP MODE UI ======= */}
        {cropMode && imagePreview && (
          <div className="flex flex-col items-center">
            {/* CROP BOX */}
            <div className="relative w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden">
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
                onCropComplete={onCropComplete}
                showGrid={false}
                style={{
                  cropAreaStyle: { border: "2px dashed rgba(255,255,255,0.8)" },
                }}
              />
            </div>

            {/* SLIDER + ROTATE BUTTONS */}
            <div className="mt-6 p-4 w-full max-w-md bg-[#F5F7FA] rounded-xl flex items-center gap-4">
              <ZoomIn className="text-gray-700" size={20} />

              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full accent-[#0F1828]"
              />

              {/* Reset */}
              <button
                onClick={resetCrop}
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
              >
                <RotateCcw size={18} />
              </button>

              {/* Rotate */}
              <button
                onClick={() => setRotation((r) => r + 90)}
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
              >
                <RotateCw size={18} />
              </button>
            </div>

            {/* Crop Done Button */}
            <Button
              onClick={handleCropDone}
              className="mt-4 bg-[#0F1828] text-white px-6 py-2 rounded-lg hover:bg-opacity-90"
            >
              Done
            </Button>
          </div>
        )}

        {/* ======= FINAL CROPPED IMAGE ======= */}
        {!cropMode && croppedImage && (
          <img
            src={croppedImage}
            className="w-28 h-28 mx-auto rounded-full object-cover border shadow-sm"
          />
        )}

        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        <p className="text-sm mt-4 text-neutral-600 mt-2 justify-center text-center">
          Format: png, jpg, jpeg, webp.
        </p>
        {/* ======= PHONE INPUT ======= */}
        <div className="mt-6">
          <label className="text-sm font-medium">Phone Number</label>
          <Input placeholder="Enter your phone number " className="mt-1 h-11 border-neutral-300" />
        </div>
        {/* <input className="text-2xl" type="time"></input> */}
        {/* <input className="time-input" type="time" /> */}

        {/* ======= BIO INPUT ======= */}
        <div className="mt-4">
          <label className="text-sm font-medium">Bio (Optional)</label>
          <textarea
            placeholder="Tell something about yourself"
            className="mt-1 w-full h-40 border border-neutral-300 rounded-md p-3 text-sm transition-colors file:border-0 file:bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
      </div>

      {/* Continue Button */}
      <Button
        onClick={handleContinue}
        className="w-full max-w-lg mx-auto h-11 mt-6 bg-[#0F1828] text-white hover:bg-[#0F1828]/90"
      >
        Continue
      </Button>
    </div>
  );
}
