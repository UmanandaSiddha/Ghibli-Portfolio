import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Rubik } from "next/font/google";
import { portfolioConfig } from "@/config/portfolio.config";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-poppins",
});
const rubik = Rubik({
	subsets: ["latin"],
	weight: "600",
	variable: "--font-rubik",
});

export const metadata: Metadata = {
	metadataBase: new URL(portfolioConfig.seo.url),
	title: {
		default: portfolioConfig.name,
		template: `%s - ${portfolioConfig.title}`,
	},
	description: portfolioConfig.description,

	// added new keywords for seo
	keywords: portfolioConfig.seo.keywords,
	authors: portfolioConfig.seo.authors,
	creator: portfolioConfig.name,

	openGraph: {
		type: "website",
		locale: "en_US",
		url: portfolioConfig.seo.url,
		title: portfolioConfig.name,
		description: portfolioConfig.description,
		images: [`${portfolioConfig.seo.url}/lord.png`],
		siteName: portfolioConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: portfolioConfig.name,
		description: portfolioConfig.description,
		images: [`${portfolioConfig.seo.url}/lord.png`],
		creator: portfolioConfig.seo.twitterHandle,
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${rubik.variable}`}>
				{/* <main
					className={cn(
						"flex relative break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]",
						{ "bg-white": "#E6E7EB" }
					)}
				>
					<Navbar />
					{children}
				</main> */}
				<main
					className="flex relative antialiased break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20"
				>
					<div className="texture" />
					<Navbar />
					{children}
					<div className="texture" />
				</main>
			</body>
		</html>
		// <html lang="en">
		// 	<body
		// 		className={`${poppins.variable} ${rubik.variable} antialiased relative`}
		// 	>
		// 		<div className="texture" />
		// 		{children}
		// 	</body>
		// </html>
	);
}
