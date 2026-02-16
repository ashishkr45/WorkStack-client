import LoginForm from '../features/auth/components/LoginForm'
import img from '../assets/image.png'

const LoginPage = () => {
	return (
		<div className="min-h-screen bg-white bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] bg-size-[16px_16px] flex items-center justify-center p-4">
			<div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden grid md:grid-cols-2">
				<div className="hidden md:flex items-center justify-center bg-gray-50 p-12">
					<img 
						className="rounded-xl object-cover w-full h-auto shadow-sm" 
						src={img} 
						alt="Workspace Visual" 
					/>
				</div>

				<div className="p-10 flex items-center">
					<LoginForm />
				</div>
			</div>
		</div>
	)
}

export default LoginPage