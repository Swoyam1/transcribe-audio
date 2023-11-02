import "./content.scss";
import FolderIcon from "../../icons/folder.svg";
import SavedIcon from "../../icons/bookmark.svg";
import TextIcon from "../../icons/text.svg";
import DataTable from "../table/DataTable";
import { useState } from "react";

const Content = ({ handleClick }) => {
  return (
    <div className="content">
      <div className="topContent">
        <div className="greetings">
          <h2>Welcome Shakirat</h2>
          <span>Upload your audio and Video to convert to text</span>
        </div>
        <button onClick={handleClick}>Transcribe File</button>
      </div>
      <div className="dataContent">
        <div className="filesData">
          <div className="icon">
            <img src={FolderIcon} alt="" />
          </div>
          <span className="dataCount">100</span>
          <span className="dataName">Uploaded Files</span>
        </div>
        <div className="transcribedData">
          <div className="icon">
            <img src={TextIcon} alt="" />
          </div>
          <span className="dataCount">50</span>
          <span className="dataName">Transcribed</span>
        </div>
        <div className="savedData">
          <div className="icon">
            <img src={SavedIcon} alt="" />
          </div>
          <span className="dataCount">20</span>
          <span className="dataName">Saved</span>
        </div>
      </div>
      <div className="tableContent">
        <DataTable />
      </div>
    </div>
  );
};

export default Content;
