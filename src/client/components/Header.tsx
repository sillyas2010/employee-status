import { memo, useCallback, useMemo, useState } from 'react'

import Button from './Button'

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true)

	const loginText = useMemo(
		() => (isLoggedIn ? 'Log Out' : 'Log In'),
		[isLoggedIn],
	)
	const handleLogout = useCallback(() => {
		setIsLoggedIn(currentIsLoggedIn => !currentIsLoggedIn)
		console.log('Auth is planned in v1.0 ;)')
	}, [])

	return (
		<div className="w-full bg-white">
			<div className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-2.5 pb-3.5 flex justify-between items-center">
				<h1 className="text-xlarge font-bold text-primary">Employees</h1>
				<Button
					variant="outline"
					onPress={handleLogout}
					className="text-[.95rem] font-normal leading-5 mt-1 min-w-[7.5rem] focus:ring-offset-2"
					padding="py-1.5 px-6"
				>
					{loginText}
				</Button>
			</div>
		</div>
	)
}

export default memo(Header)
