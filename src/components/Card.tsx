export interface CardProps {
  title?: string;
  children?: React.ReactNode;
}

/**
 * A basic card component.
 *
 * @param {string} title - The title displayed in the card.
 * @param {React.ReactNode} children - The content displayed in the card.
 * @returns {JSX.Element} The card component.
 */
export default function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-lg shadow-lg w-fit">
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="">{children}</div>
    </div>
  );
}
