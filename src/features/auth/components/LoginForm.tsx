import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { loginUser, clearError } from '../authSlice';
import { loginSchema } from '../authSchema';
import type { LoginFormData } from "../authSchema"

const LoginForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { isLoading, error, isAuthenticated } = useAppSelector((state) => state.auth);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	useEffect(() => {
		if (error) {
			toast.error(error);
			dispatch(clearError());
		}
		if (isAuthenticated) {
			toast.success('Welcome back!');
			navigate('/dashboard');
		}
	}, [error, isAuthenticated, navigate, dispatch]);

	const onSubmit = (data: LoginFormData) => {
		dispatch(loginUser(data));
	};

	return (
		<div className="p-10 flex flex-col justify-center">
			<div className="flex justify-between items-center mb-6">
			<h1 className="text-2xl font-semibold text-gray-900">Sign In</h1>
			<MoveLeft
				className="cursor-pointer text-gray-500 hover:text-black hover:scale-110 transition duration-200"
				onClick={() => navigate('/')}
			/>
			</div>

			<p className="text-sm text-gray-500 mb-8">
			Enter your credentials to access your workspace.
			</p>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
			{/* Email Field */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
               Email
				</label>
				<input
               type="email"
               disabled={isLoading}
               {...register('email')}
               className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition
               ${ errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300' }`}
               placeholder="example@email.com"
				/>
				{errors.email && (
               <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
				)}
			</div>

			{/* Password Field */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-1">
				Password
				</label>
               <input
               type="password"
               disabled={isLoading}
               {...register('password')}
               className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition 
               ${ errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300'}`}
               placeholder="••••••••"
				/>
				{errors.password && (
               <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
				)}
			</div>

			{/* Submit Button */}
			<button
				type="submit"
				disabled={isLoading}
				className="w-full bg-black text-white py-2.5 rounded-lg hover:opacity-90 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
			>
				{isLoading ? (
				<>
					<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
					<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
					Signing In...
				</>
				) : (
				'Sign In'
				)}
			</button>
			</form>

			{/* Footer */}
			<p className="mt-6 text-sm text-gray-500 text-center">
            Don’t have an account?{' '}
			<span
				onClick={() => navigate('/signup')}
				className="cursor-pointer text-black font-medium hover:underline"
			>
				Sign up
			</span>
			</p>
		</div>
	);
};

export default LoginForm;