import { useRef } from "react";
import { Upload, X } from "lucide-react";

const ImageUpload = ({ preview, setFile, setPreview }) => {
  const fileRef = useRef(null);

  /* ---------------- FILE CHANGE ---------------- */
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ---------------- REMOVE IMAGE ---------------- */
  const handleRemove = () => {
    setFile(null);
    setPreview("");
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <div className="space-y-3">
      {/* Preview */}
      {preview ? (
        <div className="relative w-full h-52 border rounded-lg overflow-hidden">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />

          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full hover:bg-red-700"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <label
          onClick={() => fileRef.current.click()}
          className="flex flex-col items-center justify-center h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-slate-50"
        >
          <Upload className="text-slate-500" />
          <p className="text-sm text-slate-500 mt-2">
            Click to upload image
          </p>
        </label>
      )}

      {/* Hidden Input */}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
