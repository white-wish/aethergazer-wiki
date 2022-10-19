import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>
        Welcome to White Wish Wiki!
      </h1>
    </>
  );
});

export const head: DocumentHead = {
  title: 'White Wish Wiki',
};
