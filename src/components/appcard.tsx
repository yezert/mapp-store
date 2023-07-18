import Image from "next/image";
export default function DownloadCard({ name, icon, link }: any) {
	return (
		<>
			<div
				id="download"
				className="bg-gray-400/20 m-4  p-8 flex items-center h-48 w-96 justify-around rounded-xl drop-shadow-2xl"
			>
				<Image width={100} height={100} src={icon} alt="" />
				<div className="flex flex-col justify-around h-full">
					<div className="text-xl font-semibold">{name}</div>
					<div className="hover flex rounded-full justify-center items-center transition h-10 hover:bg-gray-800/10 w-32 text-lg font-medium bg-gray-600/20">
						<a href={link}>download</a>
					</div>
				</div>
			</div>
		</>
	);
}
