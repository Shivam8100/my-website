import { FOOTER } from "../../constants/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          {FOOTER.text}
        </p>
      </div>
    </footer>
  );
}
