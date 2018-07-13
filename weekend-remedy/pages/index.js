import Link from 'next/link';

const Navbar = () => (
	<div>
		<Link href="/about">
	       <a style={{ fontSize: 20 }}>About Page</a>
	    </Link>
		<p>Hello Next.js there what is up with you </p>
	</div>

)

export default Navbar