"use client";
import { useRouter } from "next/navigation";
export default function index() {
	const router = useRouter();
	router.push("/apps");
	return <></>;
}
