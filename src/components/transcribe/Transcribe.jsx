import "./transcribe.scss";
import MultiplyIcon from "../../icons/multiply.svg";
import UploadIcon from "../../icons/upload-cloud.svg";
import { useEffect, useState } from "react";
import ApiCall from "../apiCall/ApiCall";

const Transcribe = ({
  open,
  handleClick,
  handleChange,
  inputRef,
  file,
  response,
  setResponse,
  handleSelectChange,
  selectValue,
  languages,
  languageObj,
  submit,
  setSubmit,
  handleTranscription,
  buttonText,
}) => {
  return (
    <>
      {" "}
      {open && (
        <div className="transcribeWrapper">
          <div className="transcribe">
            <div className="top">
              <h2>{submit ? "Transcribed File" : "Transcribe File"}</h2>
              <img src={MultiplyIcon} alt="" onClick={handleClick} />
            </div>

            <div className="mid">
              {!submit ? (
                <>
                  <div className="transcribeLang">
                    <h3>Transcription Language</h3>
                    <select
                      name="languages"
                      id="lang"
                      value={selectValue}
                      onChange={handleSelectChange}
                    >
                      {languages.map((language) => (
                        <option key={language.iso} value={language.lang}>
                          {language.lang}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="upload">
                    <div className="uploadIcon">
                      <img src={UploadIcon} alt="" />
                    </div>
                    <input
                      className="custom-file-input"
                      type="file"
                      ref={inputRef}
                      accept=".flac, .mp3, .mp4, .mpeg, .mpga, .m4a, .ogg, .wav, .webm"
                      onChange={handleChange}
                    />
                    <div className="uploadDesc">
                      <span>
                        <span className="color">Click to upload</span> or drag
                        and drop
                      </span>
                      <span className="fileSize">
                        The maximum file size is 1GB for audio and 10GB for
                        videos.
                      </span>
                      <span className="fileType">
                        Supported formats: mp3, mp4, wav, csf, avi, rmbv, flv,
                        m4a, mov, vmw, wma
                      </span>
                      {}
                    </div>
                  </div>
                  <div className="importLink">
                    <h2>Import from Link</h2>
                    <input
                      type="url"
                      placeholder="Paste a Dropbox, Google Drive or Youtube URL here"
                    />
                  </div>
                  <div className="checkBox">
                    <input type="checkbox" />
                    <span>Speaker Identification</span>
                  </div>
                </>
              ) : (
                <ApiCall
                  file={file}
                  response={response}
                  setResponse={setResponse}
                  languageObj={languageObj}
                />
              )}
            </div>

            <div className="bottom">
              <button
                onClick={handleTranscription}
                className={selectValue && file ? "highLight" : ""}
              >
                {buttonText}
                {console.log(file)}
                {console.log(selectValue)}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Transcribe;
