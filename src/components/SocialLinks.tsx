import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { LuLinkedin } from "react-icons/lu";
import { cn } from "@/lib/utils";

const SocialLinks = () => {
	const links = [
		{
			name: "Linkedin",
			link: portfolioConfig.socialLinks.linkedin,
			icon: <LuLinkedin size={20} />,
		},
		{
			name: "X",
			link: portfolioConfig.socialLinks.twitter,
			icon: <RiTwitterXLine size={20} />,
		},
		{
			name: "Instagram",
			link: portfolioConfig.socialLinks.instgram,
			icon: <FaInstagram size={20} />,
		},
		{
			name: "External",
			link: portfolioConfig.socialLinks.external,
			icon: <HiOutlineExternalLink size={20} />,
		},
		{
			name: "Github",
			link: portfolioConfig.socialLinks.github,
			icon: <FiGithub size={20} />,
		},
	];
	return (
		<>
			{links.map((itm, indx) => {
				const timing = 0.55 + indx * 0.125;

				return (
					<FramerWrapper key={indx} delay={timing} y={50}>
						<Link
							target="blank"
							href={itm.link}
							className={cn(
								"inline-flex items-center justify-center p-2.5 rounded-md border-[1.5px] border-black"
							)}
						>
							{itm.icon}
						</Link>
					</FramerWrapper>
				);
			})}
		</>
	);
};

export default SocialLinks;
