import Image from "next/image";
import Link from "next/link";

const Nav = (() => {
    return (
        <nav>
          <Image src="/logo/logo_fond_bleu_blanc.png" alt="Logo avec fond bleu et blanc" width={150} height={60}/>
          {/* <button>Click Here</button> */}
          <button>
            <Link href={"/fr"}>FR</Link> / <Link href={"/en"}>EN</Link>
          </button>
        </nav>
    );
  });
  
  export default Nav;
  