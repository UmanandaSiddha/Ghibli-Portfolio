import { MaskedImage } from "@/components/ui/masked-image";

const MaskedImageComponent = () => {
    return (
        <MaskedImage
            src="/lord.png"
            alt="Description"
            width={500}
            height={500}
            variant="shape6"
        />
    )
}

export default MaskedImageComponent;
