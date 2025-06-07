import React, { useState } from 'react';
import Link from 'next/link';
import SocialLinks from '../elements/SocialLinks';
import ServicesList from '../elements/ServicesList';
import MenuList from '../elements/MenuList';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email');
            return;
        }

        setError('');
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccess('Thanks for subscribing!');
            setEmail('');

            setTimeout(() => setSuccess(''), 3000);
        }, 1500);
    };

    return (
        <footer className="footer-area">
            {/* Shapes */}
            <div className="footer__shape-left">
                <img src="/assets/images/shape/footer-shape-left.png" alt="shape" />
            </div>

            <div className="container">
                <div className="footer__wrp pt-130 pb-130">
                    {/* Left */}
                   <div className="footer__left">
                        {/* <Link href="/" className="logo">
                            <img src="assets/images/logo/PSlogo.png" alt="logo" style={{ width: '300px' }} />
                        </Link> */}
                        <div className="logo-and-name-footer">
                    <Link href="/" className="logo-footer" >
                        <img src="assets/images/logo/logo4.png" alt="logo" style={{ width: '95px',height: '80px' }} />
                    </Link>
                    <div className="company-name-footer">
                        <span className="line1">PS ENVIRONMENTAL</span>
                        <span className="line2">SERVICES INC.</span>
                    </div>
                    </div>
                        <p className="mt-30">We are a trusted industrial service provider offering specialized expertise in dust collection and air pollution control systems.</p>
                        </div>


                    {/* Right */}
                    <div className="footer__right">
                        <div className="footer__item-wrp">
                            
                            <div className="footer__item">
                                <h4 className="title">Service</h4>
                                <ServicesList />
                            </div>

                            
                            <div className="footer__item">
                                <h4 className="title">Company</h4>
                                <MenuList />
                            </div>

                            {/* Newsletter */}
                            <div className="footer__item-last">
                                <h4 className="title">Newsletter</h4>
                                <p>Feel free to reach out if you want to collaborate or simply chat.</p>

                                <div className="mailUs mt-30">
                                    <form onSubmit={handleSubmit}>
                                        <span>
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            <label htmlFor="newsletter-email" className="sr-only">Your Email</label>
                                        </span>
                                        <input
                                            type="email"
                                            id="newsletter-email"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <button type="submit" disabled={loading}>
                                            <i className="fa fa-paper-plane" aria-hidden="true" />
                                            <span className="sr-only">Submit</span>
                                        </button>
                                    </form>

                                    {/* Show messages */}
                                    {error && <p className="text-danger mt-2">{error}</p>}
                                    {success && <p className="text-success mt-2">{success}</p>}
                                    {loading && <p className="text-primary mt-2">Sending...</p>}
                                </div>
                            </div>
                        </div>

                        {/* Office Locations */}
                        <div className="footer__item-wrp mt-80">
                            <div className="footer__item">
                                <h4 className="title">West Coast</h4>
                                <ul>
                                    <li>
                                        <Link href="/">318 Avenue, Unit 454
                                            Redondo Beach, CA.
                                            90277</Link>
                                    </li>
                                    <li>
                                        <h5 className="title">Service Area</h5>
                                        <Link href="/">

                                      Serving the states of California, Washington, Oregon, Nevada, Arizona & Houston, Texas</Link>
                                    </li>
                                    <li>
                                        <Link href="tel:310373-6259">(310) 373-6259</Link> <br />
                                        <Link href="mailto:info@yourwebsite.com">joe@psenvironmental.com</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer__item">
                                <h4 className="title">East Coast</h4>
                                <ul>
                                    <li>
                                        <Link href="/">878 Donegal Drive
                                        Follansbee, WV.
                                        26037</Link>
                                    </li>
                                    <li>
                                        <h5 className="title">Service Area</h5>
                                        <Link href="/">Serving the states of “coming soon”</Link>
                                    </li>
                                    <li>
                                        <Link href="tel:304374-1775">(304) 374-1775</Link> <br />
                                        <Link href="mailto:info@yourwebsite.com">joe@psenvironmental.com</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer__item-last">
                                <h4 className="title">Follow Us</h4>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer__copyright">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between gap-1 gap-sm-4">
                        <p>&copy; 2025 <Link href="/" >ThemeMascot</Link> Agency</p>
                        <Link href="/"  className="policy">Privacy & Cookie Policy</Link>
                    </div>
                </div>
            </div>

            {/* Rectangle Shapes */}
            {/* <div className="footer__rectangle">
                <div className="item wow" />
                <div className="item-dark wow" />
            </div> */}
        </footer>
    );
};

export default Footer;
