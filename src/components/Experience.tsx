import { motion } from 'motion/react';
import { ShoppingCart, Calendar, Wrench } from 'lucide-react';

interface ExperienceProps {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  paragraphs?: string[];
}

export function Experience({
  imageSrc = "/WelcomeImg.jpg",
  title = "About Small Engine Power",
  subtitle = "45 Years of Heritage. 100 Miles of Service. One Lifetime Warranty.",
  paragraphs
}: ExperienceProps) {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={imageSrc}
              alt="Small Engine Power Shop"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
          </motion.div>

          {/* Text Column */}
          <div>
            <div className="mb-10">
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">{title}</h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">{subtitle}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {paragraphs ? (
                <div className="space-y-6">
                  {paragraphs.map((para, i) => (
                    <p key={i} className="text-lg text-slate-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Since 1993, Small Engine Power has been the trusted partner for Arkansas landowners. With 45 years of industry experience, we’ve built a rock-solid reputation in Edgemont and the surrounding 100-mile radius for providing high-performance tools and "no-nonsense" service. We don’t just move inventory; we are the proud Home of the Lifetime Powertrain Warranty, offering a level of security you won’t find anywhere else.
                  </p>

                  <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-tight mt-8 mb-4">How We Serve You:</h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-red-100 p-2 rounded-lg text-red-600 shrink-0">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        <strong className="text-slate-900">Top-Tier Sales:</strong> A massive selection of Mahindra, Ferris, TYM, and Greenworks equipment.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-red-100 p-2 rounded-lg text-red-600 shrink-0">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        <strong className="text-slate-900">Flexible Rentals:</strong> Pro-grade tools available by the hour, day, week, or month to fit your project.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 bg-red-100 p-2 rounded-lg text-red-600 shrink-0">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        <strong className="text-slate-900">Expert Service & Parts:</strong> A factory-certified shop and huge parts inventory to keep you running year-round.
                      </p>
                    </li>
                  </ul>

                  <p className="text-lg text-slate-600 leading-relaxed mt-6">
                    Get the equipment you need to finish the job faster. Browse our inventory online or visit us in Edgemont for pro-grade sales, rentals, and service.
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
