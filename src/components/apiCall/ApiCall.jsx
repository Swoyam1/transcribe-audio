import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./apiCall.scss";

const VITE_API_KEY = import.meta.env.VITE_OPENAI_SECRET_KEY;
const model = "whisper-1";

const ApiCall = ({ response, setResponse, file, languageObj }) => {
  useEffect(() => {
    const transcribe = async () => {
      if (!file) return;
      if (!languageObj) return;
      const langIso = languageObj.iso;
      console.log(langIso);
      const formData = new FormData();
      formData.append("model", model);
      formData.append("file", file);
      formData.append("language", langIso);
      formData.append("temperature", 0.2);
      setResponse();

      await axios
        .post("https://api.openai.com/v1/audio/transcriptions", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${VITE_API_KEY}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setResponse(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    transcribe();
  }, [file]);

  return (
    <div className="text">
      {response && <h2 className="typed">{response.text}</h2>}
      {/*response && console.log(response.text)*/}
    </div>
  );
};

export default ApiCall;
