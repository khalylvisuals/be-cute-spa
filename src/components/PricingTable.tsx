import { Link } from 'react-router-dom';

export interface PricingItem {
  name: string;
  description: string;
  price: string;
  link: string;
}

interface PricingTableProps {
  title: string;
  items: PricingItem[];
  labels?: {
    col1: string;
    col2: string;
    col3: string;
  }
}

export default function PricingTable({ title, items, labels = { col1: 'Soin', col2: 'Détails / Durée', col3: 'Prix' } }: PricingTableProps) {
  return (
    <div className="mb-16">
      <h2 className="section-heading text-gold-700 mb-8 border-b border-sand-300/20 pb-4 text-left">
        {title}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-sand-300/30">
              <th className="py-4 text-gold-700 uppercase tracking-wide-plus text-sm">{labels.col1}</th>
              <th className="py-4 text-gold-700 uppercase tracking-wide-plus text-sm hidden sm:table-cell">{labels.col2}</th>
              <th className="py-4 text-gold-700 uppercase tracking-wide-plus text-sm text-right">{labels.col3}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sand-300/20 text-ink/90 font-light">
            {items.map((item, index) => (
              <tr key={index} className="transition-colors hover:bg-ivory-50/50">
                <td className="py-5 pr-4">
                  <Link to={item.link} className="font-medium text-ink hover:text-gold-700 transition-colors">
                    {item.name}
                  </Link>
                  <div className="text-sm text-ink/75 mt-1 sm:hidden">{item.description}</div>
                </td>
                <td className="py-5 pr-4 text-sm hidden sm:table-cell text-ink/75">
                  {item.description}
                </td>
                <td className="py-5 font-medium text-right text-gold-700 whitespace-nowrap">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}