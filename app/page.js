import PortfolioBox from '@/components/PortfolioBox';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="mx-auto max-w-[800px] w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <PortfolioBox title="About Me">
            Your introduction hereFuga vitae exercitationem numquam. Possimus eligendi culpa aliquam est sint molestiae. Eius voluptatum est velit omnis aut praesentium.

            Molestiae quo voluptas eius voluptatem. Eum laborum qui atque beatae dolores facilis fugiat. Alias assumenda soluta. Iure earum libero. Doloribus beatae odit consequatur et perspiciatis magnam sed repellendus aut.

            Ex veniam eum recusandae aut enim nisi. Voluptates nostrum tempore quia harum. Minima odit quae. Dolor voluptatem ab. Quas suscipit praesentium qui quaerat modi similique.
            Molestiae quo voluptas eius voluptatem. Eum laborum qui atque beatae dolores facilis fugiat. Alias assumenda soluta. Iure earum libero. Doloribus beatae odit consequatur et perspiciatis magnam sed repellendus aut.

            Ex veniam eum recusandae aut enim nisi. Voluptates nostrum tempore quia harum. Minima odit quae. Dolor voluptatem ab. Quas suscipit praesentium qui quaerat modi similique.
          </PortfolioBox>

          <PortfolioBox title="Skills">
            Your skills here
          </PortfolioBox>

          <PortfolioBox title="Featured Project" size="2x1">
            Your featured project description
          </PortfolioBox>

          <PortfolioBox title="Experience" size="1x2">
            Your experience details
          </PortfolioBox>

          <PortfolioBox title="Contact">
            Your contact info
          </PortfolioBox>
        </div>
      </div>
    </main>
  );
}
