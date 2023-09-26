const GoogleMap = () => {
    return (
        <div className="w-1/2 p-4">
				{/* Google Maps */}
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2020248242615!2d73.05508995126046!3d33.68442215234402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df98ff0cf72ae5%3A0xf7e04dddf53f88d7!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1630691872471!5m2!1sen!2sus"
					width="100%"
					height="400"
					loading="lazy"
				/>
				</div>
    );
}

export default GoogleMap;