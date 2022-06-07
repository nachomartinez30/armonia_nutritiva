import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font bg-cafe-ligth">
            <div className="container px-5 mx-auto flex items-center sm:flex-row flex-col">
                <Link href='/'>
                    <a className="text-tinto-dark flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image
                            width={200}
                            height={250}
                            className='h-12 w-auto'
                            src='/img/logo.svg'
                            alt='logo'
                        />
                        <span className="ml-3 text-xl">Armonia Nutritiva</span>
                    </a>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-pink-400 sm:py-2 sm:mt-0 mt-4 text-tinto-dark">© 2019 Armonia nutritiva —
                    <a href="https://www.instagram.com/armonia_nutritiva/" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@armonia_nutritiva</a>
                </p>
                <span className="text-tinto-dark inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    {/* FACEBOOK */}
                    <a href='https://www.facebook.com/armonianutritivaoficial/' className="text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 " viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                    </a>
                    {/* INSTAGRAM */}
                    <a href='https://www.instagram.com/armonia_nutritiva/' className="ml-3 text-gray-500">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                        </svg>
                    </a>

                    {/* WHATSAPP */}
                    <a href='https://api.whatsapp.com/send?phone=523313596018' className="ml-3 text-gray-500">
                        <svg fill='currentColor' className='w-10 h-10' viewBox="-23 -21 682 682.66669" ><path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" fillRule="evenodd" /></svg>
                    </a>

                </span>
            </div>
        </footer>
    );
}

export default Footer;