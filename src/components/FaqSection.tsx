import { useState, ReactNode } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | ReactNode;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
}

export default function FaqSection({ faqs, title = "Questions fréquentes" }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-ivory-50">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="luxury-heading mb-4 text-3xl sm:text-4xl font-extralight text-ink flex items-center justify-center gap-3">
            <Sparkles className="h-5 w-5 text-gold-700" />
            {title}
          </h2>
          <div className="mx-auto h-[2px] w-12 bg-gold-700/60"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white/80 border border-sand-300/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-gold-700/40 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                >
                  <span className="font-medium text-ink pr-4 text-sm sm:text-base">{faq.question}</span>
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-700 text-gold-700 transition-colors duration-300">
                    <ChevronDown 
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                <div 
                  className={`px-5 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="text-ink/75 font-light leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}