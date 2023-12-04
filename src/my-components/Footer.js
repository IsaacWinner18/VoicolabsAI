import { library } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faGithubSquare, faLinkedinIn, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTwitterSquare, faGithubSquare, faDiscord, faLinkedinIn );

const Footer = () => {
  return (
    <div>
      <div className="flex gap-10 justify-center flex-col lg:flex-row md:flex-row sm:flex-row mx-10 py-14 lg:mx-0 md:mx-0 ">
        <div className="font-custom text-blue-950 text-3xl ">Voicolabs</div>
        <div className='flex gap-5'>
        <div>
          <p className="font-custom text-blue-950 text-sm">SPEECH SYNTHESIS</p>
          <ul>
            <li>Text to Speech</li>
          </ul>
        </div>
        <div>
          <p className="font-custom text-blue-950 text-sm">VOICE LAB</p>
          <ul>
            <li>Voice library</li>
          </ul>
        </div>
        </div>

        <div>
          <p className="font-custom text-blue-950 text-sm">RESOURCES</p>
          <ul>
            <li> <a href="https://rapidapi.com/jojapi/api/joj-text-to-speech/"> JOJ TEXT TO SPEECH</a> </li>
          </ul>
        </div>
      </div>

      <div className='text-2xl flex gap-10 justify-center mb-3'>
            <div> <a href='https://twitter.com/IsaacWinner12'> <FontAwesomeIcon icon={faTwitterSquare} /> </a> </div>
            <div> <a href='https://github.com/IsaacWinner18'> <FontAwesomeIcon icon={faGithubSquare} /> </a> </div>
            <div> <a href='https://www.linkedin.com/in/isaac-winner-270ab3256/'> <FontAwesomeIcon icon={faLinkedinIn} /> </a> </div>
            <div> <a href='https://discord.com/channels/@me'> <FontAwesomeIcon icon={faDiscord} /> </a> </div>
      </div>
      <div className='flex justify-center mb-3 mx-2 font-custom text-sm text-blue-950 opacity-80'> <span>&copy; 2023 VoicoLabs</span> &nbsp; &nbsp; &nbsp;
            <span>Developed by Isaac Winner</span> </div>
    </div>
  );
};

export default Footer;
