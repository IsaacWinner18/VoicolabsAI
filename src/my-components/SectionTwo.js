import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faDownload,
  faPause,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee, faDownload, faPlayCircle);

const SectionTwo = () => {
const [gender, setGender] = useState("MALE");
const [selectedVoice, setSelectedVoice] = useState("en-US-Neural2-J");

const genderOptions = ["MALE"];
const voiceOptions = ["en-US-Neural2-D", "en-US-Neural2-I", "en-US-Neural2-J", "en-US-News-N", "en-US-Polyglot-1", "en-US-Standard-A"]


  async function playAudio() {



    const text = document.querySelector("#input").value;

    const url = "https://joj-text-to-speech.p.rapidapi.com/";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "d21511cf0bmshc380e10e279eae7p130b36jsnd9c3dfcedda2",
        "X-RapidAPI-Host": "joj-text-to-speech.p.rapidapi.com",
      },
      body: JSON.stringify({
        input: { text },
        voice: {
          languageCode: "en-US",
          name: selectedVoice,
          ssmlGender: gender,
        },
        audioConfig: {
          audioEncoding: "MP3",
        },
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);

      // Extract Base64 audio content from the response
      const audioContentBase64 = data.audioContent;
      if (!audioContentBase64) {
        console.error("Empty audio content");
        return;
      }

      // Decode Base64 to ArrayBuffer
      const audioData = Uint8Array.from(atob(audioContentBase64), (c) =>
        c.charCodeAt(0)
      ).buffer;

      // Create an AudioContext
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();

      // Decode audio data and play
      audioContext.decodeAudioData(audioData, (buffer) => {
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
      });
    } catch (error) {
      console.error(error);
    }
  }

  const downloadAudio = async () => {
    const text = document.querySelector("#input").value;

    const url = "https://joj-text-to-speech.p.rapidapi.com/";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "d21511cf0bmshc380e10e279eae7p130b36jsnd9c3dfcedda2",
        "X-RapidAPI-Host": "joj-text-to-speech.p.rapidapi.com",
      },
      body: JSON.stringify({
        input: { text },
        voice: {
          languageCode: "en-US",
          name: selectedVoice,
          ssmlGender: gender,
        },
        audioConfig: {
          audioEncoding: "MP3",
        },
      }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      // Extract Base64 audio content from the response
      const audioContentBase64 = data.audioContent;
      if (!audioContentBase64) {
        console.error("Empty audio content");
        return;
      }

      // Decode Base64 to ArrayBuffer
      const audioData = Uint8Array.from(atob(audioContentBase64), (c) =>
        c.charCodeAt(0)
      ).buffer;

      // Create a Blob from ArrayBuffer
      const blob = new Blob([audioData], { type: "audio/mp3" });

      // Create a downloadable link
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = "Viocolabs_generated_audio.mp3";

      // Trigger a click on the link to initiate the download
      downloadLink.click();
    } catch (error) {
      console.error(error);
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleVoiceChange = (event) => {
    setSelectedVoice(event.target.value)
  }

  const [isPlaying, setIsPlaying] = useState(false);

  const changeAwesome = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const currentIcon = isPlaying ? faPause : faPlayCircle;

  const placeholder = `In the serene city of Enugu, where the rolling hills embraced the horizon, lived Winner, an 18-year-old coding maestro with dreams as vast as the 
   .`;

  return (
    <div>
      <div className=" sect-cover grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-2 sm:mx-2 md:mx-2 mt-2 px-4 sm:px-6 md:px-7 lg:px-7 py-5 md:pt-24 lg:pt-32  bg-white">
        <div className="flex justify-start flex-col sm:mr-0 md:mr-2 lg:mr-10 pr-10 lg:ml-20 ml-3 ">
          <div className="border-2 border-solid border-gray-200  font-custom opacity-90 mx-3 rounded-full px-3 sm:px-6 md:px-6 lg:px-10 text-xs max-w-xs">
            Text to Speech for Audiobooks
          </div>
          <div className="font-custom text-2xl sm:text-5xl md:text-6xl lg:text-7xl mx-1 my-3 opacity-90">
            AI-Powered Audiobook Narration
          </div>
          <div className="font-custom opacity-60 text-sm sm:text-base md:text-lg lg:text-lg">
            Revolutionize storytelling with Viocolabs' AI voices—bringing text
            to life in a natural and expressive way. Cater to the needs of
            audiobook enthusiasts with high-quality, scalable voice solutions.
          </div>
        </div>

        {/* <div className="shadow-lg shadow-indigo-300/40 bg-red-300">

        
            </div> */}

        <div className="flex flex-col lg:justify-end  sm:justify-start sm:mt-10 lg:mt-16 lg:mr-24  lg:ml-9  shadow-lg shadow-indigo-400/40 md:mx-20  ">

        <div className="shadow-lg shadow-indigo-300/40 ">
        <select
              value={gender}
              onChange={handleGenderChange}
              className="text-lg outline-none border-none mr-5 ml-3"
            >
              {genderOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={selectedVoice}
              onChange={handleVoiceChange}
              className="text-lg outline-none border-none ml-2"
            >
              {voiceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            </div>


          <div className=" flex w-full px-2 py-2">
            <textarea
              rows={1}
              placeholder={placeholder}
              id="input"
              className="outline-none w-full"
              style={{
                height: "300px",
                boxSizing: "border-box",
              }}
            ></textarea>
          </div>
          <hr />

          <div className="flex justify-center items-center mt-4 pb-2">
            <FontAwesomeIcon
              onClick={() => {
                changeAwesome();
                playAudio();
              }}
              icon={currentIcon}
              className="text-4xl sm:text-4xl opacity-80 mr-5 ml-3"
            />

            <FontAwesomeIcon
              onClick={downloadAudio}
              icon={faDownload}
              className="text-4xl sm:text-4xl opacity-50 ml-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
