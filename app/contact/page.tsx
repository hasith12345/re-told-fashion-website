import { Navbar } from '@/components/navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex flex-col">
        <section className="py-20 px-4 sm:px-6 lg:px-8 flex-1">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Contact
            </h2>
            <p className="text-muted-foreground mb-12">
              Get in touch with the designer behind reTold.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-1">Designer</h3>
                <p className="text-muted-foreground">Amadi Dewmini Uduwaka</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-1">Education</h3>
                <p className="text-muted-foreground">Honours Degree of Bachelor of Design — 3rd Year Student</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-1">Email</h3>
                <a
                  href="mailto:dewminiamadi2@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  dewminiamadi2@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-1">Mobile</h3>
                <a
                  href="tel:+94760285694"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  076 028 5694
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
