import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


const Navbar = () => {
	return(
		<ul className={styles.navigation_ul}>

				<li><Link href="/"><a>2020 Annual Report</a></Link></li>
				<li><Link href="/financial-highlights"><a>Financial Highlights</a></Link></li>
				<li><Link href="/"><a>Letter to Shareowners</a></Link></li>
				<li><Link href="/"><a>Letter to Downloads</a></Link></li>

		</ul>
	)
}
export default Navbar


