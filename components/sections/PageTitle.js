import Link from "next/link";
import React from "react";

const PageTitle = (props) => {
	return (
		<>
			<div className="breadcrumb-container">
				<div className="container">
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<i className="fa-light fa-angle-right"></i>
						</li>
						<li className="active_page">{props.pageName}</li>
					</ul>
				</div>
			</div>
			<section
				className="breadcrumb-area"
				style={{ backgroundImage: "url(assets/images/banner/banner1.jpg)" }}>
				<div className="container">
					<div className="breadcrumb__wrp">
						<div className="breadcrumb__item">
							<h1 className="title">{props.pageName}</h1>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PageTitle;
