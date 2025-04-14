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
				height={600}
				width={600}
			/>
		</>
	)
}
export default HeroImage