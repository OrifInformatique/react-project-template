import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import clsx from 'clsx';

const Link = ({ to, children, className }) => {
	return (<>
		<RouterLink className={clsx("text-primary text-lg uppercase tracking-wide no-underline hover:underline sm:text-2xl font-light", className)} to={to}>{children}</RouterLink>
	</>)
}

export default Link
