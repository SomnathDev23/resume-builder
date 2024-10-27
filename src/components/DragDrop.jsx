import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./DragDrop.css";

const fileTypes = ["JPG", "PNG", "GIF"];

export default function DragDrop() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFile = (file) => {
    setFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleChange = (file) => {
    handleFile(file);
  };

  return (
    <div>
      <h1 className='bebas-neue-regular'>
         Welcome ... !
        </h1>
        <h3 className="mate-regular">Upload photo here</h3>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        multiple={false}
        required
      />
      {previewUrl && (
        <div className="image">
          <img src={previewUrl} alt="Uploaded Preview" />
          <span>{file.name}</span>
        </div>
      )}
    </div>
  );
}
