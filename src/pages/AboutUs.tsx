import { ConciseHero } from '../components/ConciseHero';
import { Experience } from '../components/Experience';

export function AboutUs() {
  return (
    <main>
      <ConciseHero
        title="About Us"
        subtitle="45 Years of Industry Experience Serving Edgemont Since '93."
      />
      <Experience
        imageSrc="/image2.jpg"
        paragraphs={[
          "At Small Engine Power, we are proud to serve the hardworking communities of Clinton, Heber Springs, Conway, Greenbrier, and Harrison. We understand that whether you are a homeowner tackling a weekend project or a professional managing large-scale acreage, you need machinery that won't quit. Our shop is more than just a dealership; it’s a local hub for dependable outdoor power solutions. From heavy-duty trackhoe rentals for your biggest excavations to a premium selection of tractors for sale, we provide the muscle you need to get the job done right, right here at home.",
          "Maintaining a pristine landscape requires the right tools, which is why we carry an elite lineup of mowing gear, including industry-leading Ferris Mowers and high-performance zero-turn models. But our expertise doesn't stop at the lawn’s edge. We are also your premier destination for home standby generators, stocking units ranging from 13kW to 100kW. To ensure your peace of mind, our generators come with a ten-year warranty, and we keep our shelves fully stocked with transfer switches, service parts, and oil change kits so you’re never left in the dark.",
          "What truly sets Small Engine Power apart is our commitment to the long-term health of your equipment. We aren't just selling machines; we are providing full-service support, from expert tractor repair to routine small engine maintenance. Our team is dedicated to exceptional service, ensuring that every piece of rental equipment is \"work-ready\" and every purchase is backed by local expertise. When you choose us, you’re choosing quality, reliability, and a partner who cares about your project's success as much as you do."
        ]}
      />
    </main>
  );
}
