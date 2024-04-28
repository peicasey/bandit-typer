import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <nav style={{ width: '100%', height: '64px', backgroundColor: '#88B28C', position: 'fixed', top: '0', left: '0', zIndex: '1000', display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
            <Link href="/">
                <Image src="/bandit.png" alt="" width={56} height={40} style={{ width: '56px', height: '40px', marginRight: '20px' }} />
            </Link>
        </nav>
    );
}