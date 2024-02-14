import { FaStar } from "react-icons/fa";

export default function Starcard() {

	return (
		<>
			<div className="starcard w-60 h-72 bg-gray88 p-3 m-2 rounded-md">
				<figure><img src="https://placehold.co/600x500/white/black" className="rounded-md"/></figure>
				<p className="font-bold text-base mt-2">Star Name</p>
				<p className="text-md my-1">Category</p>
				<p className="text-md flex items-center my-1"><FaStar className="text-yellow text-lg mr-1"/>Rating</p>
			</div>
		</>
	)
}
