export default function PageHeader({ icon, text }) {
  return (
    <h1 className="font-semibold text-2xl mb-8 tracking-tighter flex items-center gap-2">
      {icon}
      {text}
    </h1>
  );
}
