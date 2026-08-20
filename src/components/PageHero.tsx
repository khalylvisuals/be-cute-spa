export default function PageHero({ title, description }: { title: string, description?: string }) {
  return (
    <div className="bg-maroon-900 pt-32 pb-16 text-center border-b border-maroon-900/10">
      <h1 className="luxury-heading text-3xl font-extralight uppercase tracking-[0.16em] text-ivory-50 sm:text-4xl text-balance px-4">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl mx-auto mt-6 text-lg text-ivory-50/80 font-light leading-relaxed px-4">
          {description}
        </p>
      )}
      <div className="mx-auto mt-6 h-px w-16 bg-gold-500" />
    </div>
  );
}
