export const Circle = ({ color, coordX, coordY }) => {
	return (
		<div
			aria-hidden='true'
			className={`absolute rounded-full ${color} ${coordY} ${coordX} h-72 w-72 blur-3xl opacity-30 z-[-1] md:block hidden`}
		></div>
	);
};
