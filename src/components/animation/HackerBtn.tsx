"use client"
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { FiDownload } from 'react-icons/fi';

const HackerBtn = ({ label }: { label: string }) => {
	const [displayText, setDisplayText] = useState(label);
	const charset = "abcdefghijklmnopqrstuvwxyz";

	const randomChars = (length: number) => {
		return Array.from(
			{ length },
			() => charset[Math.floor(Math.random() * charset.length)]
		).join("");
	};

	const scramble = async (input: string) => {
		let prefix = "";
		for (let index = 0; index < input.length; index++) {
			await new Promise((resolve) => setTimeout(resolve, 50));
			prefix += input.charAt(index);
			setDisplayText(prefix + randomChars(input.length - prefix.length));
		}
	};

	const startScrambling = () => {
		scramble(label);
		setTimeout(() => console.log("Submitted"), label.length * 50);
	};

	useEffect(() => {
		setDisplayText(label);
	}, [label]);

	const handleDownloadResume = () => {
		const link = document.createElement("a");
		link.href = "/resume.pdf";
		link.download = "resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	return (
		<Button
			size={'lg'}
			onClick={handleDownloadResume}
			className='text-base px-5 py-6'
			onMouseEnter={startScrambling}
		>
			<FiDownload size={24} className="mx-1" />
			{displayText}
		</Button>
	);
};

export default HackerBtn;
