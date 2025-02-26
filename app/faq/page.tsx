import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            have here a web page of my company, Panda Audio, I want to take the
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

        <section>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <strong>
                  Question: Why do most guitar synthesizers have an option to
                  send the six strings on six separate MIDI channels? E.g. you
                  can play polyphonically on a keyboard without restriction on
                  only one MIDI channel.
                </strong>
              </AccordionTrigger>
              <AccordionContent>
                Answer: When a note is started in MIDI the pitch of the note is
                determined by the note number of the Note On message. This pitch
                can be changed afterwards only with Pitch Bend messages. When
                you play polyphonically on a keyboard and you use the pitch bend
                wheel, it will bend all notes what you play by the same amount.
                In opposite, on a guitar it is absolutely natural that the pitch
                of individual strings can change individually, independently of
                the other strings. Since in MIDI the Pitch Bend message is
                common for all notes on a MIDI channel, individual pitch control
                of the notes for individual strings can be solved only if each
                string has its own separate MIDI channel. As a painful
                compromise it is possible to use pitch bend on one MIDI channel
                as long as the guitarist plays only a monophonic melody, and
                turn off pitch bend when he changes to polyphony. However, this
                can lead to contradictions that cannot be resolved in certain
                situations, e.g. when the pitch of a note is changed, and this
                note is sustained while another note is suddenly started. In
                this case, at the start of the second note the first one will
                have to return to its starting pitch, or it must be shut off
                early.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <strong>
                  Question: Ok, I do not bend the strings, so I could not care
                  less. Then can I use my guitar synthesizer on one channel
                  without compromises, yes?
                </strong>
              </AccordionTrigger>
              <AccordionContent>
                Answer: No. A very important part of expressive guitar playing
                is legato. Guitarists very often do not pick every note of a
                melody, but notes get different accent if they are picked, or if
                they are played with hammer-on or pull-off. A guitar synthesizer
                can emulate this also with Pitch Bend. Although a special Legato
                Mode is part of the MIDI specification, most synthesizers did
                not implement it, so the safe way is to use Pitch Bend instead.
                Then we are at the same point as in the question before.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <strong>
                  Question: Ok, I do not use hammer-on and pull-off, I pick
                  every note. Then I really do not need Pitch Bend, so I can use
                  one channel only, right?
                </strong>
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4">
                  Answer: No. There are at least two important arguments why
                  Pitch Bend should be used even if you pick every note.
                </p>
                <ol className="list-decimal space-y-3 pl-8 lg:px-12">
                  <li>
                    Coordination of left and right hand. If you play an
                    ascending scale on a string, theoretically you should press
                    the string to the fret with your left had finger (I mean
                    this for right handed guitarists) exactly at the same time
                    as you pick it with the right hand. Of course, this is only
                    theory. In practice this can never be coordinated perfectly.
                    If you are too early with your left hand, then you get a
                    hammer-on to the new note first, and then a little bit later
                    the note is picked. Even worse if your left hand is too
                    late, then there is a chance that you get a damped note,
                    because your finger already touches the string, but does not
                    press it to the fret yet. To avoid the second situation
                    which is much more annoying, guitarists play a little bit
                    ahead with the left hand compared to the right. The question
                    is how much, and how stable is this difference. When I
                    analyzed John McLaughlin&apos;s test recording, it was
                    amazing to see that pitch changes (left hand) were always
                    just 5-10 msec ahead of the pickings (right hand). By
                    average guitarists this can be 10 times more. Now, when the
                    guitar synthesizer is sensing a hammer-on (which is not
                    intentional in this case), and Pitch Bend is enabled, then
                    it follows the pitch in a natural way, and then when the new
                    note is picked additionally, it starts a new note at that
                    pitch. In opposite, if Pitch Bend is disabled, then during
                    the hammer-on phase the guitar synthesizer does not know
                    that soon a new pick is following, so it starts a new note
                    with a low velocity value. But very soon the new picking is
                    coming (with a higher velocity value), and this results in
                    an annoying double trigger.
                  </li>
                  <li className="space-y-3">
                    <div>
                      Unintended pitch change of the sound. When you pick a
                      string, at the very beginning the pitch is always more or
                      less higher than the intended pitch. I mean &quot;intended
                      pitch&quot; here the pitch of the string as it is
                      sustained for several seconds. This is where you tune the
                      string to your reference. There are several physical
                      reasons why the pitch at the very beginning is higher than
                      the sustained value, sometimes by more than a semitone.
                      One of the reasons is well known in classical physics: the
                      pitch of a string vibration has a steady frequency only if
                      the amplitude of the vibration is negligible to the length
                      of the string. If it is not negligible, then the vibration
                      causes an increased average tension in the string, and
                      higher tension means higher pitch. This effect depends on
                      two factors:
                    </div>
                    <ul className="list-disc space-y-3 pl-6 lg:pl-12">
                      <li>
                        the tension of the string: thin strings have lower
                        tension for the same pitch, so they can be played with
                        much higher amplitude, thus the pitch deviation is
                        higher as well.
                      </li>
                      <li>the harder you pick, the higher is the deviation.</li>
                    </ul>
                  </li>
                  <li className="space-y-3">
                    <div>
                      There is another reason for unintended high pitch in the
                      attack. The short picking pulse that started from your
                      pick is propagating towards the point where you fretted
                      the string. However, if the pulse is large (you picked
                      hard), and the string deviation is large (light gauge
                      string), and the string height is low, then the pulse
                      slightly hits the fret that is one higher than the one
                      that you fretted, simply because the string is so close to
                      this fret. This results a reflection from this fret that
                      appears in the first vibration cycle as a one semitone
                      higher note. This happens only in the very first cycle of
                      the vibration, since the amplitude of the pulse gets very
                      much smaller even by the second reflection. It is of
                      course natural, if you do not get this problem with a
                      Roland, since it does not recognize pitch from the first
                      cycle anyway. Also, it is good to know that if you turn
                      the pick sensitivity to finger picking, it will skip
                      recognition in the first cycle, so this problem will
                      probably not happen. With this knowledge, here are some
                      tips how to eliminate this problem:
                    </div>
                    <ul className="list-disc space-y-3 pl-6 lg:pl-12">
                      <li>
                        First and most important: Even with a piano sound it is
                        not necessary to play in Trigger mode. If you use
                        Quantize to semitones then you get just as well
                        quantized pitch like in trigger mode, but these glitches
                        at the very beginning of the note will not be audible,
                        if the synth has a good and fast response. Of course,
                        this works really well only in MONO mode, on six MIDI
                        channels.
                      </li>
                      <li>
                        Use medium or hard gauge strings, no light or extra
                        light.
                      </li>
                      <li>
                        Adjust the string height to be as high as you can
                        tolerate.
                      </li>
                      <li>Play softly, do not pick hard.</li>
                      <li>
                        Play with the tip of the plectrum, not with the flat
                        part
                      </li>
                      <li>
                        Finger Picking Mode, if the slightly slower response
                        does not hurt.
                      </li>
                    </ul>
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <strong>
                  Question: When I use Trigger Mode and I play a hammer-on, then
                  I understand that I get a new note, but why is it slightly
                  delayed?
                </strong>
              </AccordionTrigger>
              <AccordionContent>
                Answer: See the first part of the previous answer about
                left-right hand coordination. In order to avoid a very annoying
                double trigger, when the system recognizes a hammer-on while in
                Trigger Mode, it will intentionally delay the new note, waiting
                a little bit if a new picking is coming or not. It will trigger
                a new note based on the hammer-on only if the picking does not
                come in the expected timeFrame.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </PageContent>
    </>
  );
}

export default FaqPage;
