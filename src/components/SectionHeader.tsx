export default function SectionHeader({
  kicker,
  title,
  subtitle,
  asH1 = false,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  asH1?: boolean;
}) {
  const TitleTag = asH1 ? 'h1' : 'h2';

  return (
    <div className="mb-12 text-center sm:mb-16">
      {kicker && (
        <p className="mb-4 text-xs font-medium uppercase tracking-wide-plus text-gold-700">
          {kicker}
        </p>
      )}

      <TitleTag className="section-heading text-ink">
        {title}
      </TitleTag>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-body font-light leading-relaxed text-ink/75">
          {subtitle}
        </p>
      )}
    </div>
  );
}
