// Next
import Image from "next/image"
// Next Intl
import { useTranslations } from "next-intl"


const Footer = () => {

    const t = useTranslations('footer')

    return (
        <footer className="theme-footer-one pt-[130px] md:pt-[70px]">
            <div className="top-footer">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-end">
                        <div className="w-full lg:w-3/12 footer-about-widget" data-aos="fade-up" data-aos-duration={1200}>
                            <a href="index.html" className="logo"><Image width={1000} height={1000} src="/images/logo/UniTemplate_02.svg" alt="شعار الشركة" /></a>
                        </div>

                        <div className="w-full md:w-4/12 lg:w-3/12 footer-list" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={50}>
                            <h5 className="font-rubik footer-title">{t('services.title')}</h5>
                            <ul>
                                {(t.raw('services.items') as string[]).map((item, index) => (
                                    <li key={index}><a href="#" className="font-rubik">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-4/12 lg:w-3/12 footer-list" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={100}>
                            <h5 className="font-rubik footer-title">{t('company.title')}</h5>
                            <ul>
                                {(t.raw('company.items') as string[]).map((item, index) => (
                                    <li key={index}><a href="#" className="font-rubik">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-4/12 lg:w-3/12 address-list" data-aos="fade-up" data-aos-duration={1200} data-aos-delay={150}>
                            <h5 className="font-rubik footer-title">{t('contact.title')}</h5>
                            <ul>
                                {(t.raw('contact.items') as string[]).map((item, index) => (
                                    <li key={index}><a href="#" className="font-rubik">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4">
                <div className="bottom-footer-content">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                        <ul className="order-2 sm:order-last" data-aos="fade-right" data-aos-duration={1200} data-aos-delay={100} data-aos-anchor=".theme-footer-one">
                            {(t.raw('legal.items') as string[]).map((item, index) => (
                                <li key={index}><a href="#" className="font-rubik">{item}</a></li>
                            ))}
                        </ul>
                        <p className="order-1 sm:order-first" data-aos="fade-left" data-aos-duration={1200} data-aos-delay={100} data-aos-anchor=".theme-footer-one">
                            {t('legal.copyright')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;