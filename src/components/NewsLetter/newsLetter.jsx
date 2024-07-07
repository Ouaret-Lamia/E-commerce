import './newsLetter.css'
import { MdSend } from 'react-icons/md';

export default function newsLetter(){
  return (
    <div className='newsDiv'>
        <h1>Newsletter</h1>
        <p>Get timely updates from your favorite products.</p>
        <div class="Message">
            <input title="Write your email" placeholder="Your email" class="MsgInput" type="text"/>
            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="30" height="30" class="SendSVG">
                <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
                    <path d="M44 256 c-3 -8 -4 -29 -2 -48 3 -31 5 -33 56 -42 28 -5 52 -13 52 -16 0 -3 -24 -11 -52 -16 -52 -9 -53 -9 -56 -48 -2 -21 1 -43 6 -48 10 -10 232 97 232 112 0 7 -211 120 -224 120 -4 0 -9 -6 -12 -14z"/>
                </g>
            </svg> */}
            <MdSend class="SendSVG"/>
        </div>
    </div>
  )
}
