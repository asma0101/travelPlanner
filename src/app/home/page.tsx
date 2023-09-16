"use client"
import Banner from "../components/banner/page";
import Footer from "../components/footer/page"
import Header from "../components/header/page";
import Service from "../components/service/page";
import Trip from "../components/tripCard/page";
import { useEffect, useState } from "react";

const Home = (props:any) => {
	
	const services = [
		{
			id: 1, title: 'About Us', description: 'We are a team...', link: '/aboutus', img: '/slide1.jpg'
		},
		{
			id: 2, title: 'Services', description: 'Here are our services...', link: '/services', img: '/slide2.jpg'
		},
		{
			id: 3, title: 'Our Plans', description: 'We plan oue trips...', link: '/trips', img: '/slide3.jpg'
		},
		{
			id: 4, title: 'Custom Trips', description: 'Customize your trips..', link: '/makemytrip', img: '/banner.jpg'
		}
	];
	const trips = [
		{
			id: 1, title: 'Trip 1', startDate: '1 Sep, 2023', endDate: '4 Sep, 2023'
		},
		{
			id: 2, title: 'Trip 2', startDate: '1 Sep, 2023', endDate: '4 Sep, 2023'
		},
		{
			id: 3, title: 'Trip 3', startDate: '1 Sep, 2023', endDate: '4 Sep, 2023'
		},
		{
			id: 4, title: 'Trip 4', startDate: '1 Sep, 2023', endDate: '4 Sep, 2023'
		},
		{
			id: 5, title: 'Trip 5', startDate: '1 Sep, 2023', endDate: '4 Sep, 2023'
		},
		{
			id: 6, title: 'Trip 6', startDate: '1 Sep, 2023', endDate: '4 Sep, 2023'
		},
	]
  return (
    <>
    <div className="min-h-screen ">
      <Header loggedIn={props.loggedIn}></Header>
        <div className="mt-16">
			<div className="bg-white py-16 text-center">
				<Banner></Banner>
				<div className="flex justify-center mb-4 max-w-screen-xl mx-auto">
					{
						services.map((service) => {
							return <Service
								key={service.id}
								id={service.id}
								title={service.title}
								description={service.description}
								link={service.link}
								img={service.img}
							></Service>
						})
					}
					
				</div>
			
       		</div>
			<div className="flex justify-center mb-4 max-w-screen-xl mx-auto">
				<div className="w-1/2 p-4">
				{/* Google Maps */}
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2020248242615!2d73.05508995126046!3d33.68442215234402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df98ff0cf72ae5%3A0xf7e04dddf53f88d7!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1630691872471!5m2!1sen!2sus"
					width="100%"
					height="400"
					loading="lazy"
				/>
				</div>
				<div className="w-1/2 p-4 overflow-y-auto">
					<h2 className="text-2xl font-bold mb-4">Upcoming Trips</h2>
					<div className="overflow-y-auto max-h-80">
						{
							trips.map((trip) => {
								return <Trip
									key={trip.id}
									id={trip.id}
									title={trip.title}
									startDate={trip.startDate}
									endDate={trip.endDate}
								></Trip>
							})
					}			  
					</div>
				</div>
			</div>
        </div>
      
      </div>
      <Footer></Footer>      
      </>
  );
};
export default Home;