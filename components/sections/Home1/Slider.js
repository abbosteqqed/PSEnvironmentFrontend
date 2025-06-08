import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const swiperOptions = {
	modules: [Autoplay, Pagination],
	slidesPerView: 1,
	autoplay: {
		delay: 8500,
		disableOnInteraction: false,
	},
	loop: true,
	pagination: {
		el: ".banner__dot",
		clickable: true,
		renderBullet: function (index, className) {
			const content = [
				"<span>01</span><span>Tax strategy</span>",
				"<span>02</span><span>Consulting Service</span>",
				"<span>03</span><span>Business Analyse</span>",
			];
			return `<span class="${className} dot-content">${content[index]}</span>`;
		},
	},
};

// const slidesData = [
//     {
//         image: "assets/images/banner/bg3.jpg",
//         alt: "Tax strategy image",
//         title: "California's Original Baghouse Experts",
//         text: "The First Name in Air Pollution Control Services",
//     },
//     {
//         image: "assets/images/banner/banner2.jpg",
//         alt: "California's Original Baghouse Experts",
//         title: "California's Original Baghouse Experts",
//         text: "The First Name in Air Pollution Control Services",
//     },
//     {
//         image: "assets/images/banner/banner1.jpg",
//         alt: "Business analyse image",
//         title: "California's Original Baghouse Experts",
//         text: "The First Name in Air Pollution Control Services",
//     }
// ];

const slidesData = [
	{
		image: "assets/images/banner/bg3.jpg",
		alt: "Tax strategy image",
		title: "California's Original Baghouse Experts",
		text: "The First Name in Air Pollution Control Services",
	},
	{
		image: "assets/images/banner/banner2.jpg",
		alt: "California's Original Baghouse Experts",
		title: "Decades of Industrial Experience",
		text: "Trusted by California’s Top Manufacturers",
	},
	{
		image: "assets/images/banner/banner1.jpg",
		alt: "Business analyse image",
		title: "Innovative Air Filtration Solutions",
		text: "Custom Engineering for Maximum Efficiency",
	},
];

function Slider() {
	return (
		<>
			<section
				id="home-menu"
				className="banner-area">
				<div className="banner__wrp">
					<div className="banner__image">
						<Swiper
							{...swiperOptions}
							className="swiper-wrapper">
							{slidesData.map((slide, index) => (
								<SwiperSlide key={index}>
									<div className="slider-item">
										<div className="parallax-bg">
											<img
												src={slide.image}
												alt={slide.alt}
												data-swiper-parallax="300"
											/>
										</div>
                                        <div className="banner__cover"></div>
										<div className="banner__content">
											<h1
												className="title"
												data-animation="slideInLeft"
												data-duration="1s"
												data-delay="1s">
												{slide.title}
											</h1>
											<p
												className="text"
												data-animation="slideInLeft"
												data-duration="1.5s"
												data-delay="1.1s">
												{slide.text}
											</p>
											{/* <div
												data-animation="fadeInDown"
												data-duration="2s"
												data-delay="2s">
												<Link
													href="/"
													className="arry-btn animation__arryUpDown">
													<i className="fa-light fa-arrow-right-long" />
												</Link>
											</div> */}
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className="banner__dot"></div>
				</div>
			</section>
		</>
	);
}

export default Slider;
