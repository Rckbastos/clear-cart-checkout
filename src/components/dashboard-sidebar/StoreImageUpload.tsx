
import React, { useRef } from "react";
import { Image as ImageIcon } from "lucide-react";

type Props = {
  imageUrl: string | null;
  setImageUrl: (url: string | null) => void;
};

export function StoreImageUpload({ imageUrl, setImageUrl }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (typeof ev.target?.result === "string") {
          setImageUrl(ev.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="flex flex-col items-center mb-2 relative group cursor-pointer">
      <div
        className="w-14 h-14 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center overflow-hidden relative"
        onClick={() => inputRef.current?.click()}
        tabIndex={0}
        aria-label="Alterar imagem da loja"
        role="button"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Logo da loja"
            className="object-cover w-full h-full"
          />
        ) : (
          <ImageIcon className="text-gray-300" size={28} />
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center rounded-full">
          <span className="text-xs text-white font-medium">
            Editar
          </span>
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
}
