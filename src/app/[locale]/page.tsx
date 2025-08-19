import Image from "next/image"
import { useTranslations } from "next-intl"

type FeatureItem = {
  title: string;
  description: string;
};

type Testimonial = {
  text: string;
  author: string;
  role: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type StatItem = {
  value: string;
  unit: string;
  label: string;
};

export default function Home() {
  const t = useTranslations('homepage')

  return (
    <div className="main-page-wrapper">
      {/* Hero */}
      <div className="hero-banner-one">
        <div className="hero-upper-container">
          {/* Small decorative logos */}
          <div className="icon-box-one"><Image width={40} height={40} src="/images/logo/01.png" alt="Logo 1" /></div>
          <div className="icon-box-two"><Image width={42} height={42} src="/images/logo/02.png" alt="Logo 2" /></div>
          <div className="icon-box-three"><Image width={38} height={38} src="/images/logo/03.png" alt="Logo 3" /></div>
          <div className="icon-box-four"><Image width={45} height={45} src="/images/logo/04.png" alt="Logo 4" /></div>
          <div className="icon-box-five"><Image width={36} height={36} src="/images/logo/05.png" alt="Logo 5" /></div>
          <div className="icon-box-six"><Image width={44} height={44} src="/images/logo/06.png" alt="Logo 6" /></div>
          <div className="icon-box-seven"><Image width={41} height={41} src="/images/logo/07.png" alt="Logo 7" /></div>
          <div className="icon-box-eight"><Image width={39} height={39} src="/images/logo/08.png" alt="Logo 8" /></div>

          <div className="bubble-one" />
          <div className="bubble-two" />
          <div className="bubble-three" />
          <div className="bubble-four" />
          <div className="bubble-five" />
          <div className="bubble-six" />

          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-2/3 xl:w-8/12 mx-auto">
                <h1 className="font-rubik hero-heading">
                  {t('hero.title')} <span>{t('hero.highlight')}</span>
                </h1>
                <p className="hero-sub-heading font-rubik">{t('hero.subtitle')}</p>
              </div>
            </div>
            <form action="#" className="subscription-form">
              <input type="email" className="!border-gray-400" placeholder={t('hero.emailPlaceholder')} />
              <button className="font-rubik">{t('hero.cta')}</button>
            </form>
            <p className="sing-in-call font-rubik">
              {t('hero.loginPrompt')} <a href="login.html">{t('hero.loginLink')}</a>.
            </p>
          </div>
        </div>
      </div>

      {/* Feature */}
      <div className="fancy-feature-one pb-[150px] md:pb-[80px]">
        <div className="text-center">
          <div className="feature-img-area">
            {/* Main feature image */}
            <Image
              width={800}
              height={500}
              src="/images/assets/feature-img-01.png"
              alt="Main feature"
              priority
              className="main-feature-img"
            />

            {/* Overlay images */}
            <Image
              width={320}
              height={240}
              src="/images/assets/feature-img-01-01.png"
              alt="Feature detail 1"
              className="cs-screen screen-one"
            />
            <Image
              width={300}
              height={220}
              src="/images/assets/feature-img-01-02.png"
              alt="Feature detail 2"
              className="cs-screen screen-two"
              data-aos="fade-left"
              data-aos-duration={1200}
            />
            <Image
              width={280}
              height={200}
              src="/images/assets/feature-img-01-03.png"
              alt="Feature detail 3"
              className="cs-screen screen-three"
              data-aos="fade-right"
              data-aos-duration={1200}
              data-aos-delay={100}
            />
            <Image
              width={260}
              height={180}
              src="/images/assets/feature-img-01-04.png"
              alt="Feature detail 4"
              className="cs-screen screen-four"
              data-aos="fade-right"
              data-aos-duration={1200}
              data-aos-delay={150}
            />
            <Image
              width={240}
              height={160}
              src="/images/assets/feature-img-01-05.png"
              alt="Feature detail 5"
              className="cs-screen screen-five"
              data-aos="fade-left"
              data-aos-duration={1200}
              data-aos-delay={200}
            />
          </div>
        </div>

        <div className="block-style-one font-rubik">
          <div className="container mx-auto px-4">
            <div className="lg:flex items-center justify-between inner-container">
              {(t.raw('features.items') as FeatureItem[]).map((item, index) => (
                <div className="block-meta-data text-center" key={index}>
                  <div className="line-dot-container">
                    <div className="icon-box">
                      {/* Feature icons */}
                      <Image
                        width={48}
                        height={48}
                        src={`/images/icon/0${index + 1}.svg`}
                        alt={item.title}
                      />
                    </div>
                    <p className="font-rubik">{item.title}</p>
                  </div>
                  <div className="hover-content">
                    <span>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fancy-feature-two py-20 font-rubik">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-9/12 lg:w-7/12 mx-auto">
              <div className="title-style-one text-center mb-[190px] md:mb-[100px]">
                <h2 className="font-rubik">{t('features.sectionTitle')}</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Flexibility Section */}
          <div className="flex flex-wrap items-center block-style-two pb-[250px] md:pb-[90px]">
            <div className="w-full md:w-8/12 lg:w-7/12 mx-auto">
              <div data-aos="fade-left" data-aos-duration={1200}>
                <div className="img-holder img-holder-one">
                  <div className="cs-screen progress-line-one" data-aos="fade-right" data-aos-duration={1200}></div>
                  <div className="cs-screen progress-line-two" data-aos="fade-right" data-aos-duration={1200}></div>

                  {/* Feature images */}
                  <Image
                    width={700}
                    height={450}
                    src="/images/assets/feature-img-05.png"
                    alt="Flexibility feature"
                  />
                  <Image
                    width={120}
                    height={120}
                    src="/images/shape/1.svg"
                    alt="Decorative shape"
                    className="cs-screen screen-one"
                  />
                  <Image
                    width={80}
                    height={80}
                    src="/images/shape/2.svg"
                    alt="Dot shape"
                    className="cs-screen dot-shape"
                  />

                  <div className="bubble-one" />
                  <div className="bubble-two" />
                  <div className="bubble-three" />
                  <div className="bubble-four" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="text-wrapper" data-aos="fade-right" data-aos-duration={1200}>
                <h6 className="font-rubik" style={{ color: '#FF5291' }}>{t('features.flexibility.tag')}</h6>
                <h3 className="font-rubik">{t('features.flexibility.title')}</h3>
                <p className="font-rubik">{t('features.flexibility.description')}</p>
                <a href="#">{t('features.flexibility.link')}</a>
              </div>
            </div>
          </div>

          {/* Speed Section */}
          <div className="flex flex-wrap items-center block-style-two pb-[250px] md:pb-[90px]">
            <div className="w-full md:w-8/12 lg:w-6/12 mx-auto lg:order-last">
              <div data-aos="fade-right" data-aos-duration={1200}>
                <div className="img-holder img-holder-two">
                  <Image
                    width={650}
                    height={400}
                    src="/images/assets/feature-img-06.png"
                    alt="Speed feature"
                  />
                  <Image
                    width={300}
                    height={200}
                    src="/images/assets/feature-img-06-01.png"
                    alt="Speed detail"
                    className="cs-screen screen-one"
                  />
                  <Image
                    width={100}
                    height={100}
                    src="/images/shape/3.svg"
                    alt="Shape 3"
                    className="cs-screen screen-two"
                  />
                  <Image
                    width={70}
                    height={70}
                    src="/images/shape/4.svg"
                    alt="Dot shape"
                    className="cs-screen dot-shape"
                  />

                  <div className="bubble-one" />
                  <div className="bubble-two" />
                  <div className="bubble-three" />
                  <div className="bubble-four" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 lg:order-first">
              <div className="text-wrapper pl-5 pr-5" data-aos="fade-left" data-aos-duration={1200}>
                <h6 className="font-rubik" style={{ color: '#AA4CFF' }}>{t('features.speed.tag')}</h6>
                <h3 className="font-rubik">{t('features.speed.title')}</h3>
                <p className="font-rubik">{t('features.speed.description')}</p>
                <div className="quote">
                  <blockquote>{t('features.speed.testimonial')}</blockquote>
                  <div className="flex items-center">
                    {/* Testimonial avatar */}
                    <Image
                      width={56}
                      height={56}
                      src="/images/media/img_01.png"
                      alt={t('features.speed.author')}
                      className="rounded-full"
                    />
                    <div className="info-meta">
                      <h5>{t('features.speed.author')}</h5>
                      <span className="font-rubik">{t('features.speed.company')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tracking Section */}
          <div className="flex flex-wrap items-center block-style-two pb-[170px] md:pb-[50px]">
            <div className="w-full md:w-7/12 lg:w-7/12 mx-auto">
              <div data-aos="fade-left" data-aos-duration={1200}>
                <div className="img-holder img-holder-three">
                  <Image
                    width={680}
                    height={420}
                    src="/images/assets/feature-img-07.png"
                    alt="Tracking feature"
                  />
                  <Image
                    width={280}
                    height={180}
                    src="/images/assets/feature-img-07-01.png"
                    alt="Tracking detail"
                    className="cs-screen screen-one"
                  />
                  <Image
                    width={110}
                    height={110}
                    src="/images/shape/5.svg"
                    alt="Shape 5"
                    className="cs-screen screen-two"
                  />
                  <Image
                    width={65}
                    height={65}
                    src="/images/shape/6.svg"
                    alt="Dot shape"
                    className="cs-screen dot-shape"
                  />

                  <div className="bubble-one" />
                  <div className="bubble-two" />
                  <div className="bubble-three" />
                  <div className="bubble-four" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="text-wrapper" data-aos="fade-right" data-aos-duration={1200}>
                <h6 className="font-rubik" style={{ color: '#03DDD5' }}>{t('features.tracking.tag')}</h6>
                <h3 className="font-rubik">{t('features.tracking.title')}</h3>
                <p className="font-rubik">{t('features.tracking.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Useable Tools */}
      <div className="useable-tools-section bg-color mt-[140px] mb-[50px] md:mt-[80px] font-rubik">
        <div className="bubble-one" />
        <div className="bubble-two" />
        <div className="bubble-three" />
        <div className="bubble-four" />
        <div className="bubble-five" />

        <div className="container mx-auto px-4">
          <h6 className="font-rubik">{t('integrations.title')}</h6>
          <h2 className="font-rubik">{t('integrations.description')}</h2>
          <div className="flex flex-wrap justify-center gap-6">

            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-3">
              <div className="img-box bx-a">
                <a href="#">
                  <Image src="/images/logo/p-1.png" alt="" width={100} height={100} />
                </a>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6 p-3" >
              <div className="img-box bx-b">
                <a href="#">
                  <Image src="/images/logo/p-2.png" alt="" width={100} height={100} />
                </a>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-3">
              <div className="img-box bx-c">
                <a href="#">
                  <Image src="/images/logo/p-3.png" alt="" width={100} height={100} />
                </a>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-1/6 p-3">
              <div className="img-box bx-d">
                <a href="#">
                  <Image src="/images/logo/p-4.png" alt="" width={100} height={100} />
                </a>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-1/6 p-3">
              <div className="img-box bx-e">
                <a href="#">
                  <Image src="/images/logo/p-5.png" alt="" width={100} height={100} />
                </a>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/3 p-3">
              <div className="img-box bx-f">
                <a href="#">
                  <Image src="/images/logo/p-6.png" alt="" width={100} height={100} />
                </a>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6 xl:w-1/6 p-3">
              <div className="img-box bx-g">
                <a href="#">
                  <Image src="/images/logo/p-7.png" alt="" width={100} height={100} />
                </a>
              </div>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 p-3">
              <div className="img-box bx-h">
                <a href="#">
                  <Image src="/images/logo/p-8.png" alt="" width={100} height={100} />
                </a>
              </div>
            </div>
            <div className="w-1/2 sm:w-2/3 md:w-11/12 lg:w-11/12 xl:w-1/4 p-3">
              <div className="img-box bx-i">
                <a href="#">
                  <Image src="/images/logo/p-9.png" alt="" width={100} height={100} />
                </a>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="fancy-feature-three pt-[200px] md:pt-[80px] font-rubik">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="title-style-one">
                <h6 className="font-rubik">{t('community.tag')}</h6>
                <h2 className="font-rubik">{t('community.title')}</h2>
              </div>
              <div className="counter-info-classic">
                {(t.raw('community.stats') as StatItem[]).map((stat, index) => (
                  <div className={`counter-box-one color-${index === 0 ? 'one' : index === 1 ? 'two' : 'three'}`} key={index}>
                    <h2 className="number font-rubik">
                      <span className="timer" data-from={0} data-to={stat.value} data-speed={1200} data-refresh-interval={5}>0</span>
                      {stat.unit}
                    </h2>
                    <p className="font-rubik">{stat.label}</p>
                  </div>
                ))}

                <div className="bubble-one" />
                <div className="bubble-two" />
                <div className="bubble-three" />
                <div className="bubble-four" />
                <div className="bubble-five" />
                <div className="bubble-six" />
                <div className="bubble-seven" />

                {/* Decorative shape */}
                <Image
                  width={120}
                  height={120}
                  src="/images/shape/8.svg"
                  alt="Decorative shape"
                  className="cs-screen dot-shape"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="clients-feedback-classic md:mt-[80px]">
                {(t.raw('community.testimonials') as Testimonial[]).map((testimonial, index) => (
                  <div className="feedback-wrapper" data-aos="fade-up" data-aos-duration={1200} key={index}>
                    {/* Testimonial avatars */}
                    <Image
                      width={64}
                      height={64}
                      src={`/images/media/img_0${index + 2}.png`}
                      alt={testimonial.author}
                      className="media-meta rounded-full"
                    />
                    <p className="font-rubik">{testimonial.text}</p>
                    <h6 className="name">{testimonial.author}</h6>
                    <span className="font-rubik disg-info">{testimonial.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="fancy-short-banner-one font-rubik">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <div className="title-style-one">
                <h6 className="font-rubik" style={{ color: '#787CFF' }}>{t('cta.tag')}</h6>
                <h2 className="font-rubik">{t('cta.title')}</h2>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="form-wrapper">
                <form action="#">
                  <input type="email" placeholder={t('cta.emailPlaceholder')} />
                  <button>{t('cta.button')}</button>
                </form>
                <p className="font-rubik">
                  {t('cta.loginPrompt')} <a href="login.html">{t('cta.loginLink')}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bubble-one" />
        <div className="bubble-two" />
        <div className="bubble-three" />
        <div className="bubble-four" />
        <div className="bubble-five" />
        <div className="bubble-six" />
      </div>

      {/* FAQ Section */}
      <div className="faq-classic pt-[225px] md:pt-[120px] font-rubik">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-duration={1200}>
              <div className="title-style-one">
                <h6 className="font-rubik">{t('faq.title')}</h6>
                <h2 className="font-rubik">{t('faq.subtitle')}</h2>
              </div>
              <a href="faqs.html" className="theme-btn-one mt-[50px] md:mt-[30px]">{t('faq.button')}</a>
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-duration={1200}>
              <div id="accordion" className="md:mt-[60px]">
                {(t.raw('faq.questions') as FAQItem[]).map((item, index) => (
                  <div className="border rounded mb-2" key={index}>
                    <div className="p-3" id={`heading${index + 1}`}>
                      <h5 className="font-rubik mb-0">
                        <button className="w-full text-left">
                          {item.question}
                        </button>
                      </h5>
                    </div>
                    <div id={`collapse${index + 1}`} className="hidden p-4 border-t">
                      <p className="font-rubik">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="footer-bg-wrapper">
        <div className="bubble-one" />
        <div className="bubble-two" />
        <div className="bubble-three" />
        <div className="fancy-short-banner-two">
          <div className="container mx-auto px-4">
            <div className="content-wrapper">
              <div className="bg-wrapper lg:flex items-center justify-between">
                <h2 className="font-rubik">{t('contactBanner.title')}</h2>
                <a href="contact-us(light).html" className="font-rubik">{t('contactBanner.button')}</a>
                <div className="bubble-one" />
                <div className="bubble-two" />
                <div className="bubble-three" />
                <div className="bubble-four" />
                <div className="bubble-five" />
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Scroll Top Button */}
      <button className="scroll-top">
        <i className="fa fa-angle-up" aria-hidden="true" />
      </button>
    </div>
  )
}