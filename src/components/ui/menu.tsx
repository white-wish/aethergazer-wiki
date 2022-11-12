import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Menu = component$(() => {
  return (
    <nav className="grid min-h-full w-full auto-rows-min grid-cols-2 gap-6 bg-black/80 py-6 backdrop-blur">
      <Link href="/" className="bg-white/50">
        Home
      </Link>
      <Link href="/modifier" className="bg-white/50">
        Modifier
      </Link>
      <Link href="/functor" className="bg-white/50">
        Functor
      </Link>
      <Link href="/sigil" className="bg-white/50">
        Sigil
      </Link>
      <Link href="/meow" className="bg-white/50">
        M.E.O.W.
      </Link>
    </nav>
  );
});
