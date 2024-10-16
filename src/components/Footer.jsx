import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-black text-white py-20">
            <h2 className="sm:text-6xl text-4xl mb-4 pl-3 sm:pl-12">LOGO</h2>

            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">

                <div className="mb-6 md:mb-0 md:w-1/4">
                    <p className="text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas. Lorem ipsum dolor sit amet consectetur. Laoreet cras egestas. Laoreet cras egestas.Lorem
                        ipsum dolor sit amet consectetur.
                        Laoreet cras egestas.Lorem ipsum dolor
                        sit amet consectetur.
                    </p>
                </div>

                <div className="mb-6 md:mb-0 md:w-1/4 sm:pl-8">
                    <h3 className="text-xl font-semibold mb-4">Services</h3>
                    <ul>
                        <li className="mb-2">Web Development</li>
                        <li className="mb-2">UI/UX Design</li>
                        <li className="mb-2">Graphic Design</li>
                        <li className="mb-2">Business Planning</li>
                    </ul>
                </div>

                <div className="mb-6 md:mb-0 md:w-1/4">
                    <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                    <ul>
                        <li className="mb-2">Lorem</li>
                        <li className="mb-2">Contact Us</li>
                        <li className="mb-2">Lorem Ipsum</li>
                        <li className="mb-2">Testimonials</li>
                    </ul>
                </div>

                <div className="md:w-1/4">
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className=' sm:grid flex justify-center sm:justify-start items-center'>
                        <div className="sm:flex sm:space-x-4 flex justify-center items-center">
                            <a href="#" className="text-pink-500">
                                <i className="fab fa-instagram"></i>
                                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" />
                            </a>
                            <a href="#" className="text-blue-600">
                                <i className="fab fa-facebook"></i>
                                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
                            </a>
                            <a href="#" className="text-blue-500">
                                <i className="fab fa-linkedin"></i>
                                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                        <div className="sm:flex sm:space-x-4 flex">
                            <a href="#" className="text-light-blue-500">
                                <i className="fab fa-twitter"></i>
                                <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
                            </a>
                            <a href="#" className="text-red-600">
                                <i className="fab fa-youtube"></i>
                                <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="YouTube" />
                            </a>
                            <a href="#" className="text-blue-400">
                                <i className="fab fa-behance"></i>
                                <img src="https://img.icons8.com/color/48/000000/behance.png" alt="Behance" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;














