import DownloadCard from "@/components/appcard";
import SidebarButton from "@/components/sidebar-button";

export default function index() {
	return (
		<>
			<div id="main" className="flex h-screen w-screen justify-center items-center">
				<div
					id="index"
					className="flex items-center m-12 rounded-2xl  bg-blue-200/80 justify-between drop-shadow-2xl"
				>
					<div
						id="Sidebar"
						className="flex divide-y divide-indigo-400/60 flex-col justify-top bg-indigo-300/50 h-full rounded-l-2xl px-16"
					>
						<div id="User" className="my-8 flex items-center justify-around">
							<div id="avatar" className="rounded-full w-16 h-16 bg-indigo-300 mr-4" />
							<div id="name" className="text-2xl font-bold">
								Admin
							</div>
						</div>
						<div className="flex flex-col justify-around h-1/4 ">
							<SidebarButton name="Apps" link="/apps" isselected={true} />
							<SidebarButton name="Release" link="/apps" isselected={false} />
						</div>
					</div>

					<div id="Content" className="mt-16 ml-16 w-full h-full flex justify-start items-start">
						<DownloadCard
							icon="/assets/MicrosoftEdge/edgeicon.png"
							name="MicrosoftEdge"
							link="/assets/MicrosoftEdge/MicrosoftEdgeSetup.exe"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
