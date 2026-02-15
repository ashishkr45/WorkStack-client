import React from "react"
import { MatarialButton } from "../ui/buttons"

const Navbar: React.FC = () => {
	return (
		<nav className="w-full">
			<div className="max-w-full mx-auto px-8 py-2 flex items-center justify-between">
			
				<div className="flex items-center gap-2">
					<div className="flex gap-0.5">
						<span className="w-2.5 h-2.5 bg-black rounded-full"></span>
						<span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
					</div>
					<span className="cursor-pointer text-lg font-semibold">WorkStack</span>
				</div>

				<div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
					<a href="#" className="hover:text-black hover:scale-105 transition">Features</a>
					<a href="#" className="hover:text-black hover:scale-105 transition">Solutions</a>
					<a href="#" className="hover:text-black hover:scale-105 transition">Resources</a>
					<a href="#" className="hover:text-black hover:scale-105 transition">Pricing</a>
				</div>
				<MatarialButton />
			</div>
		</nav>
	)
}

export default Navbar