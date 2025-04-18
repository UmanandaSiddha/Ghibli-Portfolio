import lord from "../../public/lord.png";
import Image from "next/image";

export default function MaskedImage() {
	return (
		<div className="relative w-[400px] h-[400px]">
			<Image
				src={lord}
				alt="Masked"
				fill
				className="object-cover custom-mask"
			/>
		</div>
	);
}