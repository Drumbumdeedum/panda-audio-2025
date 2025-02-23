import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";

function FaqPage() {
  return (
    <>
      <PageHeader
        title="FAQ"
        subtitle="Answers to your questions, all in one place"
      />
      <PageContent type="narrow">
        <section>
          <blockquote>
            &quot;I spent most of the last fourty years designing guitar
            synthesizers. I developed several generations of devices from the
            Shadow GTM-6 / SH-075 through the Blue Chip Music / Terratec Axon
            until the Fishman Triple Play today. Over this period I answered
            thousands of questions from users who had some difficulties to
            understand certain features or behavior of their devices. Now, as I
            have here a web page of my company, Panda-Audio, I want to take the
            opportunity to summarize this information in the form of an FAQ. I
            hope I can help users of guitar synthesizers a better understanding
            of their devices with this information. While these answers are
            based on my designs, I believe most of the information here is true
            for Roland or other devices too. I will update this page time to
            time with questions whatever I recall from my memories, or whatever
            new questions arise.&quot;
          </blockquote>
          <div className="text-right">
            <cite>- Andras Szalay</cite>
          </div>
        </section>
      </PageContent>
    </>
  );
}

export default FaqPage;
