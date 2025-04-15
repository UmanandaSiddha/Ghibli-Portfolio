import logo from "../../public/lord.png";
import Image from "next/image"
import { MaskedImage } from "./ui/masked-image";

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
			{/* <MaskedImageComponent /> */}
			<MaskedImage
				src="https://umanandasiddha.vercel.app/lord.png"
				alt="Description"
				width={500}
				height={500}
				variant="shape6"
			/>
		</>
	)
}
export default HeroImage