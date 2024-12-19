import PortfolioBox from '@/components/PortfolioBox';
import FillerBox from '@/components/FillerBox';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2C1810] p-4 md:p-8">
      <div className="mx-auto max-w-[800px] w-full">
        <h1 className="
          text-4xl 
          md:text-5xl 
          font-bold 
          text-[#C17F59] 
          text-center 
          mb-8
          hover:text-white
          transition-colors
          duration-300
          tracking-wide
        ">
          <span className="text-white">Portfolio</span> Gallery
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr">
          <PortfolioBox title="About Me">
            Your introduction hereFuga vitae exercitationem numquam. Possimus eligendi culpa aliquam est sint molestiae. Eius voluptatum est velit omnis aut praesentium.
            nisi. Voluptates nostrumhereFuga vitae exercitationem numquam. Possimus eligendi culpa aliquam est sint molestiae. Eius voluptatum est velit omnis aut praesentium.
            nisi. Voluptates nostrumhereFuga vitae exercitationem numquam. Possimus eligendi culpa aliquam est sint molestiae. Eius voluptatum est velit omnis aut praesentium.
            nisi. Voluptates nostrumhereFuga vitae exercitationem numquam. Possimus eligendi culpa aliquam est sint molestiae. Eius voluptatum est velit omnis aut praesentium.
            nisi. Voluptates nostrum tempore quia harum. Minima odit quae. Dolor voluptatem ab. Quas suscipit praesentium qui quaerat modi similique.
          </PortfolioBox>

          <FillerBox />

          <PortfolioBox title="Skills">
            Your skills here
          </PortfolioBox>

          <FillerBox />

          <PortfolioBox title="Featured Project" size="2x1">
            Your featured project description
          </PortfolioBox>

          <PortfolioBox title="Experience" size="1x2">
            Your experience details
          </PortfolioBox>

          <PortfolioBox title="Contact">
            Your contact info
          </PortfolioBox>

          <FillerBox />
        </div>
      </div>
    </main>
  );
}
