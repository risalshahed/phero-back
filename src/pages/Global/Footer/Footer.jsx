import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white text-center">
      <div className="flex w-full h-60">
        {/* contact us */}
        <div
          className="w-1/2 flex flex-col justify-center gap-y-2 bg-[#1F2937]"
        >
          <div className="uppercase pb-4 font-semibold text-lg">
            contact us
          </div>
          <div>123 ABS Street, Uni 21, Bangladesh</div>
          <div>+88 123456789</div>
          <div>Mon - Fri: 08:00 - 22:00</div>
          <div>Sat - Sun: 10:00 - 23:00</div>
        </div>

        {/* follow us */}
        <div
          className="w-1/2 flex flex-col justify-center gap-y-4 bg-[#111827]"
        >
          <div className="capitalize font-bold text-xl">
            follow us
          </div>
          <div className='text-center'>
            Join us on social media
          </div>
          {/* Social Icons */}
          <div>
            <SocialIcons />
          </div>
        </div>
      </div>



      <div className="bg-black py-4">
        Copyright ©{year} CulinaryCloud. All rights reserved.
      </div>
    </footer>
  )
}