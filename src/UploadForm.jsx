import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UploadForm = () => {
  const [inputType, setInputType] = useState("select");
  const [textValue, setTextValue] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleInputTypeChange = (event) => {
    setInputType(event.target.value.toLowerCase());
    setTextValue("");
    setFile(null);
    setPreview("");
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev); 
  }

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile) {
      const fileType = uploadedFile.type.toLowerCase();
      const validTypes = {
        json: "application/json",
        csv: "text/csv",
      };

      if (fileType !== validTypes[inputType]) {
        alert(`Please upload a valid ${inputType.toUpperCase()} file.`);
        return;
      }

      setFile(uploadedFile);

      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsText(uploadedFile);
    }
  };

  const handlePreview = () => {
    if (!preview) {
      alert("No file uploaded to preview.");
      return;
    }
    setShowModal(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("input_type", inputType);

    if (inputType === "text") {
      if (!textValue.trim()) {
        alert("Please enter some text.");
        return;
      }
      formData.append("text", textValue);
    } else {
      if (!file) {
        alert("Please upload a file.");
        return;
      }
      formData.append("file", file);
    }

    try {
      const response = await fetch("https://biasfree-backend.onrender.com/analyze", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Error analyzing data.");

      const result = await response.json();
      console.log(result);

      localStorage.setItem("analysisResults", JSON.stringify(result));

      window.location.href = "/results";
    } catch (error) {
      console.error(error);
      alert("Failed to analyze data.");
    }
  };

  return (
    <div className="uploadform p-5">
      <div className="uformbox m-2 p-4">
        <h3 className="mb-3 text-center">Upload Data</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="color-text form-label fw-bold">Select Input Type</label>
            <select className={`form-select ${isOpen ? 'open' : ''}`} value={inputType} onChange={handleInputTypeChange} onClick={toggleOpen}>
              <option className="select-disabled" value="select" disabled hidden></option>
              <option value="text">Text</option>
              <option value="json">JSON File</option>
              <option value="csv">CSV File</option>
            </select>
          </div>

          {inputType === "text" && (
            <div className="mb-3">
              <label className="form-label">Enter Text</label>
              <textarea
                className="form-control"
                rows="4"
                value={textValue}
                onChange={handleTextChange}
                placeholder="Type your text here..."
              ></textarea>
            </div>
          )}

          {(inputType === "json" || inputType === "csv") && (
            <div className="mb-3">
              <label className="form-label">Upload {inputType.toUpperCase()} File</label>
              <input
                type="file"
                className="form-control"
                accept={inputType === "json" ? ".json" : ".csv"}
                onChange={handleFileChange}
              />
            </div>
          )}

          {preview && (inputType === "json" || inputType === "csv") && (
            <button type="button" className="btn btn-info mb-3" onClick={handlePreview}>
              Preview File
            </button>
          )}

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">File Preview</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body" style={{ maxHeight: "400px", overflowY: "scroll", whiteSpace: "pre-wrap" }}>
                <pre>{preview}</pre>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default UploadForm;
