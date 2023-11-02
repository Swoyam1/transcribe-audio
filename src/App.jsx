import Content from "./components/content/Content";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss";
import Transcribe from "./components/transcribe/Transcribe";
import { useEffect, useRef, useState } from "react";
import { languages } from "./langData";

function App() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef();
  const [file, setFile] = useState();
  const [response, setResponse] = useState(null);
  const [selectValue, setSelectValue] = useState();
  const [languageObj, setLanguageObj] = useState();
  const [buttonText, setButtonText] = useState();

  const [submit, setSubmit] = useState(false);

  const handleChange = () => {
    setFile(inputRef.current.files[0]);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
    setSubmit(false);
    setFile();
    setSelectValue();
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    const res = languages.find((language) => language.lang === value);
    console.log(res);
    setLanguageObj(res);
    setSelectValue(value);
  };

  const handleTranscription = () => {
    setSubmit((prev) => !prev);
  };

  useEffect(() => {
    submit ? setButtonText("Go Back") : setButtonText("Transcribe File");
  }, [submit]);

  return (
    <div className="containerWrapper">
      <div className={open ? "container light" : "container"}>
        <div className="sideBarWrapper">
          <Sidebar />
        </div>
        <div className="mainWrapper">
          <Header />
          <Content handleClick={handleClick} />
        </div>
      </div>
      <Transcribe
        open={open}
        handleClick={handleClick}
        handleChange={handleChange}
        inputRef={inputRef}
        file={file}
        response={response}
        setResponse={setResponse}
        handleSelectChange={handleSelectChange}
        selectValue={selectValue}
        languages={languages}
        languageObj={languageObj}
        submit={submit}
        setSubmit={setSubmit}
        handleTranscription={handleTranscription}
        buttonText={buttonText}
      />
    </div>
  );
}

export default App;
