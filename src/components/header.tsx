// Next
import Link from "next/link"
// Next Intl
import { useTranslations } from "next-intl"
// Components
import SwitchLanguages from "./switch-languages"

const Header = () => {

    const t = useTranslations('header')

    return (
        <div className="theme-main-menu sticky-menu theme-menu-one">
            <div className="flex items-center justify-between">
                <div className="logo">
                    <Link className="font-rubik" href="index.html">
                        {t('logo')}
                    </Link>
                </div>
                <nav id="mega-menu-holder" className="relative">
                    <div className="mx-auto px-4">
                        <button className="block lg:hidden">
                            <span />
                        </button>
                        <div className="hidden lg:block" id="navbarSupportedContent">
                            <div className="lg:flex items-center">
                                <ul className="flex flex-col lg:flex-row list-none">
                                    {
                                        ['home', 'gallery', 'pages', 'blog', 'reference'].map((item) => {
                                            return (
                                                <li key={item} className="relative">
                                                    <Link
                                                        className="px-3 py-2 flex items-center"
                                                        href="#"
                                                    >
                                                        {t(`nav.${item}`)}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    <SwitchLanguages />
                </div>
            </div>
        </div>
    )
}

export default Header;