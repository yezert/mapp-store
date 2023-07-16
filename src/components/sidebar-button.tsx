"use client";
import { useRouter } from "next/navigation";
export default function SidebarButton({ name, link, isselected = false }: any) {
	const router = useRouter();

	return (
		<>
			{isselected === true ? (
				<div
					id="Apps"
					onClick={() => router.push(link)}
					className="p-2 flex items-center justify-between bg-indigo-200/90 rounded-xl transition"
				>
					<div id="icon" className="rounded-xl w-16 h-16 bg-indigo-300/80 mr-4" />
					<div id="name" className="text-2xl font-medium">
						{name}
					</div>
				</div>
			) : (
				<div
					id="Apps"
					onClick={() => router.push(link)}
					className="p-2 flex items-center justify-between hover:bg-indigo-200/90 rounded-xl transition"
				>
					<div id="icon" className="rounded-xl w-16 h-16 bg-indigo-300/80 mr-4" />
					<div id="name" className="text-2xl font-medium">
						{name}
					</div>
				</div>
			)}
		</>
	);
}
