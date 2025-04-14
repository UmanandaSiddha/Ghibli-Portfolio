import { portfolioConfig } from "@/config/portfolio.config";
import { FaGlobeAsia, FaRegCircle } from "react-icons/fa";
import { LuDna, LuLanguages } from "react-icons/lu";

const Aboutfooter = () => {
	const items = [
		{
			name: "Language",
			answer: portfolioConfig.about.personalInfo.language,
			icon: <LuLanguages className="h-11 w-11" />,
		},
		{
			name: "Nationality",
			answer: portfolioConfig.about.personalInfo.nationality,
			icon: <FaGlobeAsia className="h-8 w-8" />,
		},
		{
			name: "Gender",
			answer: portfolioConfig.about.personalInfo.gender,
			icon: <LuDna className="h-8 w-8" />,
		},
	];

	return (
		<>
			{items.map((val, indx) => {
				return (
					<div className="p-1 w-fit relative" key={indx}>
						<h1 className="gap-2 text-3xl poppins text-primary font-semibold relative flex icon_underline max-sm:text-2xl">
							{val.icon}
							{val.name}
						</h1>
						<div className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start">
							<FaRegCircle className="h-3 w-3" /> {val.answer}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Aboutfooter;
