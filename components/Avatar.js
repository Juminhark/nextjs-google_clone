const Avatar = ({ url }) => {
	return (
		<img
			loading="lazy"
			src={url}
			className="h-10 rounded-full"
			alt="profile pic"
		/>
	);
};

export default Avatar;
