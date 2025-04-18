import lord from "../../public/lord.png";
import Image from "next/image"

const HeroImage = () => {
	return (
		<>
			<Image
				src={lord}
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