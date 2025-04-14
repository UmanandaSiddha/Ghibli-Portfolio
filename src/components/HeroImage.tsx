import logo from "../../public/lord.png";
import Image from "next/image"

const HeroImage = () => {
	return (
		<>
			<Image
				src={logo}
				alt="logo"
				loading="eager"
				priority
				height={800}
				width={800}
			/>
		</>
	)
}
export default HeroImage