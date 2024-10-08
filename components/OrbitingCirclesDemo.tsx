'use client'
import OrbitingCircles from '@/components/ui/orbiting-circles'
import { AnimatePresence, motion } from 'framer-motion'
// import {&apos} from 'react/no-unescaped-entities'
import { useState } from 'react'
import { FiCheckSquare, FiX } from 'react-icons/fi'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import Link from 'next/link'

export function OrbitingCirclesDemo() {
	const [notification, setNotification] = useState<string | null>(null)
	const email = 'areg.abrahamyan3@gmail.com'

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(email)
			setNotification('Email copied to clipboard!')
			setTimeout(() => setNotification(null), 3000)
		} catch (err) {
			console.error('Failed to copy!', err)
			setNotification('Failed to copy email.')
			setTimeout(() => setNotification(null), 3000)
		}
	}

	const deleteNotification = () => {
		setNotification(null)
	}

	return (
		<div className='relative top-16 flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg'>
				<Link href='mailto:areg.abrahamyan3@gmail.com'>
					<HoverBorderGradient className='p-2 px-3 hover-effect'>
						<li
							className='relative overflow-hidden block text-center grow p-0 text-indigo-300'
							data-hover="Let's get in touch"
						>
							<span className='block'>Let&apos;s get in touch</span>
						</li>
					</HoverBorderGradient>
				</Link>
			<OrbitingCircles
				className='size-[40px] border-none bg-transparent z-30'
				duration={20}
				delay={20}
				radius={100}
			>
				<Icons.whatsapp />
			</OrbitingCircles>
			<OrbitingCircles
				className='size-[40px] border-none bg-transparent z-30'
				duration={20}
				delay={10}
				radius={100}
			>
				<Icons.notion />
			</OrbitingCircles>

			<OrbitingCircles
				className='size-[50px] border-none bg-transparent z-30'
				radius={190}
				duration={20}
				reverse
				onClick={copyToClipboard}
			>
				<a aria-label='Copy email to clipboard'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						x='0px'
						y='0px'
						width='50'
						height='50'
						viewBox='0 0 48 48'
					>
						<path
							fill='#4caf50'
							d='M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z'
						></path>
						<path
							fill='#1e88e5'
							d='M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z'
						></path>
						<polygon
							fill='#e53935'
							points='35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17'
						></polygon>
						<path
							fill='#c62828'
							d='M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z'
						></path>
						<path
							fill='#fbc02d'
							d='M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z'
						></path>
					</svg>
				</a>
			</OrbitingCircles>
			{/* </div> */}
			<OrbitingCircles
				className='size-[50px] border-none bg-transparent z-30'
				radius={190}
				duration={20}
				delay={20}
				reverse
			>
				<Icons.gitHub />
			</OrbitingCircles>
			<div>
				{/* <a onClick={copyToClipboard} className='poineter w-[100%] h-[100%] absolute'>
      
      </a> */}

				<AnimatePresence>
					{notification && (
						<motion.div
							initial={{ opacity: 0, y: -50, scale: 0.8 }}
							animate={{
								opacity: 1,
								y: 0,
								scale: 1,
								transition: {
									type: 'spring',
									stiffness: 300,
									damping: 20,
									delay: 0.2,
								},
							}}
							exit={{
								opacity: 0,
								y: 50,
								scale: 0.8,
								transition: {
									type: 'spring',
									stiffness: 300,
									damping: 20,
								},
							}}
							className='fixed top-2 right-2 flex items-center p-2 text-sm text-white rounded-lg shadow-2xl z-50'
							role='alert'
							aria-live='assertive'
							style={{
								backdropFilter: 'blur(50px) saturate(180%)',
								// backgroundColor: 'rgb(165, 180, 252, 0.5)',
								// borderRadius: '50px',
								border: '1px solid rgba(255, 255, 255, 0.125)',
								// backgroundColor: '#13162D'
							}}
						>
							<span className='pr-3'>
								<FiCheckSquare />
							</span>
							<span>{notification}</span>
							<motion.button
								onClick={deleteNotification}
								//   whileHover={{ scale: 1.1, rotate: 10 }}
								//   whileTap={{ scale: 0.9, rotate: -10 }}
								transition={{
									type: 'spring',
									stiffness: 400,
									damping: 10,
								}}
								className='ml-4 p-1 rounded-full focus:outline-none'
								aria-label='Delete notification'
							>
								<FiX />
							</motion.button>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	)
}

const Icons = {
	gitHub: () => (
		<a href='https://github.com/Areg-7'>
			<svg width='50' height='50' viewBox='0 0 438.549 438.549'>
				<path
					fill='currentColor'
					d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'
				/>
			</svg>
		</a>
	),
	notion: () => (
		<a href='https://github.com/TomIsLoading/tailwind-themeing/blob/main/src/styles/globals.css'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='50'
				height='50'
				viewBox='0 0 48 48'
			>
				<path
					fill='#0078d4'
					d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z'
				></path>
				<path
					d='M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z'
					opacity='.05'
				></path>
				<path
					d='M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z'
					opacity='.07'
				></path>
				<path
					fill='#fff'
					d='M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z'
				></path>
			</svg>
		</a>
	),
	whatsapp: () => (
		<a href='https://www.instagram.com/areg.abrahamyan.33/'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='50'
				height='50'
				viewBox='0 0 48 48'
			>
				<radialGradient
					id='yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1'
					cx='19.38'
					cy='42.035'
					r='44.899'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0' stop-color='#fd5'></stop>
					<stop offset='.328' stop-color='#ff543f'></stop>
					<stop offset='.348' stop-color='#fc5245'></stop>
					<stop offset='.504' stop-color='#e64771'></stop>
					<stop offset='.643' stop-color='#d53e91'></stop>
					<stop offset='.761' stop-color='#cc39a4'></stop>
					<stop offset='.841' stop-color='#c837ab'></stop>
				</radialGradient>
				<path
					fill='url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)'
					d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z'
				></path>
				<radialGradient
					id='yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2'
					cx='11.786'
					cy='5.54'
					r='29.813'
					gradientTransform='matrix(1 0 0 .6663 0 1.849)'
					gradientUnits='userSpaceOnUse'
				>
					<stop offset='0' stop-color='#4168c9'></stop>
					<stop offset='.999' stop-color='#4168c9' stop-opacity='0'></stop>
				</radialGradient>
				<path
					fill='url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)'
					d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z'
				></path>
				<path
					fill='#fff'
					d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z'
				></path>
				<circle cx='31.5' cy='16.5' r='1.5' fill='#fff'></circle>
				<path
					fill='#fff'
					d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z'
				></path>
			</svg>
		</a>
	),
}