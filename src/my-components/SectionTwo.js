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
          name: "en-US-Polyglot-1",
          ssmlGender: "MALE",
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
          name: "en-US-Polyglot-1",
          ssmlGender: "MALE",
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
      downloadLink.download = "generated_audio.mp3";

      // Trigger a click on the link to initiate the download
      downloadLink.click();
    } catch (error) {
      console.error(error);
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const changeAwesome = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const currentIcon = isPlaying ? faPause : faPlayCircle;

  const placeholder = `In the serene city of Enugu, where the rolling hills embraced the horizon, lived Winner, an 18-year-old coding maestro with dreams as vast as the 
   .`;

  return (
    <div>
      <div className=" sect-cover grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-4 sm:mx-2 md:mx-2 mt-2 px-4 sm:px-6 md:px-7 lg:px-7 py-7 md:pt-24 lg:pt-32  bg-white">
        <div className="flex justify-start flex-col sm:mr-0 md:mr-2 lg:mr-10 pr-10 lg:ml-20 ml-6 ">
          <div className="border-2 border-solid border-gray-200  font-custom opacity-90 mx-5 rounded-full px-3 sm:px-6 md:px-6 lg:px-10">
            Text to Speech for Audiobooks
          </div>
          <div className="font-custom text-2xl sm:text-5xl md:text-6xl lg:text-7xl mx-5 my-4 opacity-90">
            AI-Powered Audiobook Narration
          </div>
          <div className="font-custom opacity-60 text-sm sm:text-base md:text-lg lg:text-lg">
            Revolutionize storytelling with Viocolabs' AI voices—bringing text
            to life in a natural and expressive way. Cater to the needs of
            audiobook enthusiasts with high-quality, scalable voice solutions.
          </div>
        </div>

        <div className="flex flex-col lg:justify-end mt-6 sm:justify-start sm:mt-10 lg:mt-16 lg:mr-24 mr-8 lg:ml-9 ml-8 shadow-lg shadow-black hover:shadow-indigo-900/40 ">
          <div
            className=" flex w-full px-2 py-2"
          >
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
